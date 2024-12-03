import React, { useEffect, useState } from "react";

export default function Pagination({ totalSlides, currentSlide, duration }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, duration / 100);

    return () => clearInterval(interval);
  }, [currentSlide, duration]);

  return (
    <div className="flex justify-center space-x-2 p-4 relative z-10">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <div
          key={index}
          className="h-1 bg-zinc-600 rounded-full overflow-hidden"
          style={{ width: `${100 / totalSlides}%` }}
        >
          <div
            className="h-full bg-white transition-all duration-100 ease-linear"
            style={{
              width: `${
                index === currentSlide
                  ? progress
                  : index < currentSlide
                  ? 100
                  : 0
              }%`,
            }}
          />
        </div>
      ))}
    </div>
  );
}
