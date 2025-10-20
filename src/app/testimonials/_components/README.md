# Video Testimonials Carousel

A comprehensive video carousel component built for the MuLearn testimonials page, featuring smooth animations, responsive design, and interactive video playback.

## Component Structure

### 1. **VideoCarousel.tsx**
Main container component that orchestrates the entire carousel experience.

**Features:**
- Swiper.js integration for smooth sliding
- Navigation arrows (previous/next)
- Synced main player and thumbnail grid
- Responsive breakpoints for all screen sizes
- Framer Motion entrance animations

**Props:**
```typescript
interface VideoCarouselProps {
  testimonials: VideoTestimonial[];
}
```

### 2. **VideoPlayer.tsx**
Displays the main video with user information overlay.

**Features:**
- HTML5 video player with play/pause controls
- Large centered play button overlay
- User info card (profile image, name, organization, role)
- Smooth animations for UI elements
- Click-to-play/pause functionality
- Auto-pause when switching videos

**Props:**
```typescript
interface VideoPlayerProps {
  testimonial: VideoTestimonial;
  isActive: boolean;
}
```

### 3. **VideoThumbnail.tsx**
Individual thumbnail component for the grid below the main player.

**Features:**
- Click-to-select functionality
- Active state with blue ring indicator
- Hover effects with scaling
- Play button overlay
- Staggered entrance animations

**Props:**
```typescript
interface VideoThumbnailProps {
  testimonial: VideoTestimonial;
  isActive: boolean;
  onClick: () => void;
  index: number;
}
```

### 4. **testimonialData.ts**
Sample data structure for video testimonials.

**Data Structure:**
```typescript
interface VideoTestimonial {
  id: string;
  name: string;
  organization: string;
  role: string;
  videoUrl: string;
  thumbnailUrl: string;
  profileImage: string;
}
```

## Responsive Breakpoints

### Thumbnail Grid (Swiper):
- **Mobile (< 480px):** 2 thumbnails
- **Small Mobile (480px+):** 3 thumbnails
- **Tablet (640px+):** 4 thumbnails
- **Medium (768px+):** 5 thumbnails
- **Desktop (1024px+):** 6 thumbnails

### Spacing:
- **Mobile:** 12px gap
- **Tablet:** 16px gap
- **Desktop:** 20px gap

## Key Features

### 1. **Navigation**
- Left/right arrow buttons
- Automatically disabled at carousel boundaries
- Smooth transitions between videos
- Keyboard accessible

### 2. **Video Playback**
- Click play button to start video
- Auto-pause when switching to another video
- Video controls hidden for clean UI
- Pause button appears when playing

### 3. **Animations**
- Fade-in-up animation for main container
- Staggered entrance for thumbnails
- Smooth scale transitions on hover
- Active state ring animation

### 4. **Accessibility**
- ARIA labels on interactive elements
- Semantic HTML structure
- Keyboard navigation support
- Focus states for all interactive elements

## Usage

### Basic Implementation
```jsx
import VideoCarousel from "./_components/VideoCarousel";
import { sampleTestimonials } from "./_components/testimonialData";

export default function TestimonialsPage() {
  return (
    <div>
      <VideoCarousel testimonials={sampleTestimonials} />
    </div>
  );
}
```

### With Custom Data
```jsx
const customTestimonials: VideoTestimonial[] = [
  {
    id: "unique-id-1",
    name: "John Doe",
    organization: "Tech Company",
    role: "Software Engineer",
    videoUrl: "path/to/video.mp4",
    thumbnailUrl: "path/to/thumbnail.jpg",
    profileImage: "path/to/profile.jpg",
  },
  // ... more testimonials
];

<VideoCarousel testimonials={customTestimonials} />
```

## Styling

The component uses:
- **Tailwind CSS** for all styling
- **MuLearn brand colors** (`mulearn-trusty-blue`, `mulearn-duke-purple`)
- **Framer Motion** for animations
- **Lucide React** for icons (Play, Pause, ChevronLeft, ChevronRight)

### Custom Classes
- Rounded corners: `rounded-[20px]` (main video), `rounded-xl` (thumbnails)
- Aspect ratio: `aspect-video` (16:9)
- Shadows: `shadow-lg`, `shadow-md` for depth

## Dependencies

Required packages (already in project):
- `swiper` (^12.0.2)
- `framer-motion` (^12.23.22)
- `lucide-react` (^0.544.0)
- `next` (15.5.4)
- `react` (19.1.0)

Required CSS imports (handled in components):
```css
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
```

## File Structure

```
src/app/testimonials/
├── _components/
│   ├── VideoCarousel.tsx      # Main carousel container
│   ├── VideoPlayer.tsx        # Main video player
│   ├── VideoThumbnail.tsx     # Thumbnail grid item
│   ├── testimonialData.ts     # Sample data
│   └── README.md              # This file
└── page.jsx                   # Testimonials page
```

## Customization

### Changing Video Sources
Replace the sample data in `testimonialData.ts` with your actual video URLs. Supports:
- MP4 files (recommended)
- WebM files
- Any HTML5 video-compatible format

### Adjusting Animations
Modify the `fadeInUp` variant in `VideoCarousel.tsx`:
```typescript
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};
```

### Changing Thumbnail Count
Update breakpoints in `VideoCarousel.tsx`:
```typescript
breakpoints={{
  1024: {
    slidesPerView: 6,  // Change this number
    spaceBetween: 20,
  },
}}
```

## Best Practices

1. **Video Optimization:**
   - Use compressed video files (< 10MB recommended)
   - Provide proper thumbnails for faster loading
   - Consider using CDN for video hosting

2. **Performance:**
   - Lazy load videos
   - Optimize images with Next.js Image component
   - Use proper aspect ratios to prevent layout shift

3. **Accessibility:**
   - Always provide alt text for images
   - Ensured keyboard navigation works
   - Test with screen readers

4. **Responsive Design:**
   - Tested on multiple device sizes
   - Ensures touch targets are adequate (44x44px minimum)
   - Verified text is readable at all sizes

