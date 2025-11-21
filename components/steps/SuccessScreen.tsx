import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ExternalLink } from 'lucide-react';
import { GlassCard } from '../GlassCard';

export const SuccessScreen: React.FC = () => {
  return (
    <GlassCard className="text-center overflow-visible">
      {/* Burst Animation Background (Simple pure CSS/SVG simulation via motion) */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <motion.div 
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full bg-neon-blue/20 rounded-full blur-2xl"
        />
      </div>

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-neon-blue/10 text-neon-blue mb-6 border border-neon-blue/50 shadow-[0_0_30px_rgba(0,243,255,0.3)]"
      >
        <CheckCircle2 className="w-12 h-12" />
      </motion.div>

      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 mb-2"
      >
        YOU'RE IN
      </motion.h1>

      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-slate-400 mb-8 font-light"
      >
        Access granted. Welcome to the Stacks AI Guild.
      </motion.p>

      <motion.div
         initial={{ y: 20, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ delay: 0.4 }}
      >
        <button 
          onClick={() => window.open('https://discord.gg/Cpj6NhHf', '_blank')}
          className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-neon-blue to-blue-600 text-black font-display font-bold rounded-xl shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2 mx-auto"
        >
          ENTER PORTAL <ExternalLink className="w-4 h-4" />
        </button>
      </motion.div>
    </GlassCard>
  );
};