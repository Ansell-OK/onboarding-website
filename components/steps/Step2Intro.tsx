import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import { GlassCard } from '../GlassCard';

interface Step2Props {
  value: string;
  onChange: (val: string) => void;
  onNext: () => void;
}

export const Step2Intro: React.FC<Step2Props> = ({ value, onChange, onNext }) => {
  const isValid = value.trim().length >= 10;

  return (
    <GlassCard>
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-3 mb-6">
          <Terminal className="w-6 h-6 text-neon-purple" />
          <h2 className="text-xl md:text-2xl font-display font-bold text-white">
            IDENTIFY YOURSELF
          </h2>
        </div>

        <p className="text-slate-300 mb-6 text-sm font-light">
          Establish your presence in the guild. Who are you and what do you seek to build?
        </p>

        <div className="relative group">
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="I am a developer looking to..."
            className="w-full h-32 bg-black/30 border border-white/10 rounded-lg p-4 text-white placeholder-slate-600 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all resize-none font-mono text-sm"
          />
          <div className="absolute bottom-3 right-3 text-xs text-slate-500">
            {value.length} CHARS
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            onClick={onNext}
            disabled={!isValid}
            className={`
              flex items-center gap-2 px-6 py-3 rounded-lg font-display font-semibold tracking-wide transition-all duration-300
              ${isValid 
                ? 'bg-gradient-to-r from-neon-purple to-fuchsia-600 text-white shadow-[0_0_15px_rgba(188,19,254,0.4)] hover:shadow-[0_0_25px_rgba(188,19,254,0.6)] transform hover:-translate-y-0.5' 
                : 'bg-white/5 text-slate-500 cursor-not-allowed border border-white/5'}
            `}
          >
            PROCEED <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </GlassCard>
  );
};