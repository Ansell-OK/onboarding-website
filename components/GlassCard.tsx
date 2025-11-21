import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, x: -50, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.4, 0.1, 0.2, 1] }}
      className={`
        relative overflow-hidden rounded-2xl 
        bg-slate-900/40 backdrop-blur-xl 
        border border-white/10 
        shadow-[0_0_30px_rgba(0,243,255,0.1)]
        w-full p-6 md:p-10
        ${className}
      `}
    >
      {/* Decorative Gradients */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-neon-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-neon-purple/10 rounded-full blur-3xl pointer-events-none" />
      
      {children}
    </motion.div>
  );
};