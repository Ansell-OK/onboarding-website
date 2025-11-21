import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { GlassCard } from '../GlassCard';
import { StepProps } from '../../types';

export const Step1Discord: React.FC<StepProps> = ({ onNext }) => {
  const handleJoin = () => {
    // Open Discord in new tab
    window.open('https://discord.gg/Cpj6NhHf', '_blank');
    // Proceed to next step after a brief delay to allow interaction
    setTimeout(onNext, 500);
  };

  return (
    <GlassCard className="flex flex-col items-center text-center">
      <div className="w-16 h-16 bg-neon-blue/20 rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,243,255,0.3)]">
        <MessageCircle className="w-8 h-8 text-neon-blue" />
      </div>
      
      <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
        INITIATE CONNECTION
      </h2>
      
      <p className="text-slate-300 mb-8 max-w-md font-light leading-relaxed">
        Join the <strong className="text-white font-semibold">Stacks AI Guild</strong> neural network. 
        <br /><br />
        <span className="text-neon-blue/90">Directive:</span> Once joined, head to the <code className="bg-white/10 px-1 py-0.5 rounded text-neon-purple text-xs">#introductions</code> channel to verify your presence.
      </p>

      <button
        onClick={handleJoin}
        className="group relative px-8 py-4 bg-white text-black font-display font-bold tracking-wider uppercase rounded-lg overflow-hidden hover:bg-neon-blue transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
      >
        <span className="relative z-10 flex items-center gap-2">
          Join Discord Server <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
        
        {/* Button Glow Effect */}
        <div className="absolute inset-0 bg-neon-blue opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
      </button>
      
      <p className="mt-6 text-[10px] md:text-xs text-slate-500 uppercase tracking-widest">
        Step 1 of 3
      </p>
    </GlassCard>
  );
};