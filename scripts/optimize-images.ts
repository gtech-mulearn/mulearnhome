import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Re-compress an already-oversized `.webp` master only past this size — avoids
// needlessly re-encoding (and quality-degrading) files that are already small.
const WEBP_RECOMPRESS_THRESHOLD_BYTES = 300 * 1024;

async function convertToWebp(inputPath: string, outputPath: string) {
  try {
    const stats = await fs.stat(inputPath);
    const originalSize = stats.size;

    await sharp(inputPath)
      .webp({
        quality: 85,
        effort: 6, // Higher effort = better compression
      })
      .toFile(outputPath);

    const newStats = await fs.stat(outputPath);
    const newSize = newStats.size;
    const savings = (((originalSize - newSize) / originalSize) * 100).toFixed(1);

    console.log(
      `✅ ${path.basename(inputPath)}: ${(originalSize / 1024).toFixed(1)}KB → ${(newSize / 1024).toFixed(1)}KB (${savings}% smaller)`,
    );
  } catch (error) {
    console.error(`❌ Error optimizing ${path.basename(inputPath)}:`, error);
  }
}

/** Re-encodes a `.webp` file in place (via a temp file + rename, so the read never races the write). */
async function recompressWebpInPlace(filePath: string) {
  try {
    const stats = await fs.stat(filePath);
    const originalSize = stats.size;
    if (originalSize <= WEBP_RECOMPRESS_THRESHOLD_BYTES) return;

    const tempPath = `${filePath}.tmp`;
    await sharp(filePath)
      .webp({
        quality: 85,
        effort: 6,
      })
      .toFile(tempPath);

    const newStats = await fs.stat(tempPath);
    const newSize = newStats.size;

    if (newSize >= originalSize) {
      // Re-encoding made it bigger (already well-compressed) — keep the original.
      await fs.unlink(tempPath);
      return;
    }

    await fs.rename(tempPath, filePath);
    const savings = (((originalSize - newSize) / originalSize) * 100).toFixed(1);
    console.log(
      `✅ ${path.basename(filePath)}: ${(originalSize / 1024).toFixed(1)}KB → ${(newSize / 1024).toFixed(1)}KB (${savings}% smaller)`,
    );
  } catch (error) {
    console.error(`❌ Error re-compressing ${path.basename(filePath)}:`, error);
  }
}

async function main() {
  const publicDir = path.join(__dirname, "../public");
  const imageDirs = ["assets"];

  console.log("🚀 Starting build-time image optimization...");

  for (const dir of imageDirs) {
    const fullPath = path.join(publicDir, dir);

    try {
      await fs.access(fullPath);
      const entries = await fs.readdir(fullPath, { recursive: true, withFileTypes: true });

      for (const entry of entries) {
        if (!entry.isFile()) continue;
        const file = entry.name;
        const entryWithPath = entry as { parentPath?: string; path?: string };
        const entryDir = entryWithPath.parentPath ?? entryWithPath.path ?? fullPath;

        if (file.match(/\.(png|jpg|jpeg)$/i)) {
          const input = path.join(entryDir, file);
          const output = path.join(entryDir, file.replace(/\.(png|jpg|jpeg)$/i, ".webp"));

          // Check if WebP version already exists and is newer
          try {
            const inputStats = await fs.stat(input);
            const outputStats = await fs.stat(output);

            if (outputStats.mtime > inputStats.mtime) {
              // file already optimized and up to date
              continue;
            }
          } catch (_e) {
            // output doesn't exist, proceed
          }

          await convertToWebp(input, output);
        } else if (file.match(/\.webp$/i)) {
          await recompressWebpInPlace(path.join(entryDir, file));
        }
      }
    } catch (_e) {
      // Directory doesn't exist, skip
    }
  }

  console.log("✨ Image optimization complete!");
}

main().catch(console.error);
