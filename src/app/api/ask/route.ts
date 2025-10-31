import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { query } = await req.json();
    if (!query) return NextResponse.json({ answer: "Please ask something!" });

     const apiKey = process.env.GOOGLE_API_KEY ?? process.env.GEMINI_API_KEY;
    const searchId = process.env.SEARCH_ENGINE_ID;

    if (!apiKey || !searchId) {
      console.error("MUBot Error: Missing API key or SEARCH_ENGINE_ID");
      return NextResponse.json(
        { answer: "MUBot is not configured. Missing API key or search engine id." },
        { status: 500 }
      );
    }

    const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchId}&q=${encodeURIComponent(query)}`;

    const res = await fetch(url);
    if (!res.ok) {
      const bodyText = await res.text().catch(() => "");
      console.error("MUBot Error: search API returned non-OK status", res.status, bodyText);
      return NextResponse.json({ answer: "Something went wrong while searching." }, { status: 502 });
    }

    const data = await res.json();

    if (!data.items || data.items.length === 0) {
      return NextResponse.json({
        answer: "Sorry, I couldn’t find anything relevant on the MuLearn website.",
      });
    }

    const first = data.items[0];
    const answer = `${first.snippet}\n\n🔗 [${first.title}](${first.link})`;

    return NextResponse.json({ answer });
  } catch (err) {
    console.error("MUBot Error:", err);
    return NextResponse.json({ answer: "Something went wrong while searching." });
  }

  
}

