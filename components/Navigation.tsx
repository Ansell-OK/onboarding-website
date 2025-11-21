import React from 'react';
import { motion } from 'framer-motion';

interface NavigationProps {
  currentStep: number;
  totalSteps: number;
}

export const Navigation: React.FC<NavigationProps> = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex items-center justify-center gap-2 w-full max-w-xs mx-auto">
      {Array.from({ length: totalSteps }).map((_, idx) => {
        const isActive = idx === currentStep;
        const isCompleted = idx < currentStep;

        return (
          <div key={idx} className="flex-1 h-1.5 relative bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ 
                width: isCompleted ? "100%" : isActive ? "100%" : "0%",
                backgroundColor: isCompleted ? "#bc13fe" : "#00f3ff" // Purple if done, Blue if active
              }}
              transition={{ duration: 0.5 }}
              className={`absolute inset-y-0 left-0 rounded-full shadow-[0_0_8px_currentColor]`}
            />
          </div>
        );
      })}
    </div>
  );
};