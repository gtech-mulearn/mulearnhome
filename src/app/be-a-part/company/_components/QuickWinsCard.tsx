"use client";

interface QuickWinsCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function QuickWinsCard({ icon, title, description }: QuickWinsCardProps) {
  return (
    <div className="text-left">
      <div className="text-5xl mb-3 text-blue-500">{icon}</div>
      <h4 className="font-bold text-blue-600 mb-2 text-lg">{title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}