import { ReactNode, useRef, useEffect } from "react";
import { Children } from "react";
import './Animation.css';

interface MarqueeProps {
  children: ReactNode;
  direction?: "left" | "right";
  duration?: number;
}

const Marquee = ({ children, direction = "left", duration = 30 }: MarqueeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Duplicate children to create seamless loop
  const duplicatedChildren = [...Children.toArray(children), ...Children.toArray(children)];

  useEffect(() => {
    if (contentRef.current && containerRef.current) {
      // Set animation duration based on content width
      const contentWidth = contentRef.current.scrollWidth / 2;
      const speed = (contentWidth / (duration * 1000)) * 100;
      
      containerRef.current.style.setProperty('--duration', `${duration}s`);
      containerRef.current.style.setProperty('--content-width', `${contentWidth}px`);
      containerRef.current.style.setProperty('--speed', `${speed}px/s`);
    }
  }, [duration]);

  return (
    <div ref={containerRef} className="relative overflow-hidden w-full mb-6">
      <div 
        ref={contentRef}
        className={`flex gap-4 w-max ${direction === 'left' ? 'marquee-left' : 'marquee-right'}`}
      >
        {duplicatedChildren.map((child, index) => (
          <div key={index} className="px-8 py-3 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;