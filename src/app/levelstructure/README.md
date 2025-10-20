# μLearn Level Structure Page

## Overview
The Level Structure page showcases μLearn's comprehensive learning journey from beginner to expert through a visually appealing timeline interface. This page guides learners through 5 distinct levels, each building upon the previous one.

## Features

### 🎯 Visual Timeline
- Interactive timeline showing all 5 learning levels
- Alternating layout for desktop (left/right positioning)
- Responsive design that works on all devices
- Smooth animations and hover effects

### 📊 Level Details
Each level includes:
- **Foundation Level**: Building the basics (2-4 weeks)
- **Intermediate Level**: Expanding knowledge (4-6 weeks)  
- **Advanced Level**: Mastering skills (6-8 weeks)
- **Expert Level**: Leading innovation (8-12 weeks)
- **Master Level**: Shaping the future (12+ weeks)

### 🔍 Detailed Modal
- Click any level card to see comprehensive details
- Skills, activities, milestones, and prerequisites
- Interactive modal with smooth animations
- Action buttons for starting levels

### 🎨 Design System
- Follows μLearn brand guidelines
- Uses defined color variables and gradients
- Consistent typography with Plus Jakarta Sans and Circe Rounded
- Accessible design with proper ARIA roles

## Components

### LevelStructureHero
- Hero section with page title and description
- Benefits overview with icons
- Gradient background matching μLearn branding

### LevelTimeline
- Main timeline component with all levels
- Interactive level cards
- Responsive timeline line
- Modal integration for detailed views

### LevelDetailModal
- Comprehensive level information display
- Skills, activities, and milestones breakdown
- Action buttons for engagement
- Smooth open/close animations

### LevelBenefits
- Call-to-action section
- Benefits overview
- Engagement buttons for starting journey

## Data Structure

The level data is stored in `src/data/data.ts` under the `levelStructure` export:

```typescript
export const levelStructure = {
  title: "μLearn Level Structure",
  subtitle: "Your journey from beginner to expert...",
  description: "Navigate through our structured learning levels...",
  levels: [
    {
      id: "level-1",
      level: 1,
      title: "Foundation Level",
      subtitle: "Building the Basics",
      icon: BookOpen,
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      description: "Start your μLearn journey...",
      duration: "2-4 weeks",
      prerequisites: "No prior experience required",
      skills: [...],
      activities: [...],
      milestones: [...],
      nextLevel: "Intermediate Level"
    },
    // ... more levels
  ],
  benefits: [...]
};
```

## Navigation

The page is accessible via:
- Main navigation: About → Level Structure
- Direct URL: `/levelstructure`

## Responsive Design

- **Mobile**: Single column layout with full-width cards
- **Tablet**: Optimized spacing and sizing
- **Desktop**: Alternating timeline layout with left/right positioning

## Accessibility

- Semantic HTML structure
- ARIA roles and labels
- Keyboard navigation support
- High contrast colors
- Screen reader friendly

## Animation

- Framer Motion for smooth animations
- Staggered card animations
- Hover effects and transitions
- Modal entrance/exit animations

## Future Enhancements

- Progress tracking integration
- User-specific level recommendations
- Interactive level selection
- Integration with learning management system
- Achievement badges and certificates
