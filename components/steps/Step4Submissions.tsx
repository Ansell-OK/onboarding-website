import React from 'react';
import { ArrowRight, Layers, HelpCircle } from 'lucide-react';
import { GlassCard } from '../GlassCard';
import { StepProps } from '../../types';

export const Step4Submissions: React.FC<StepProps> = ({ onNext }) => {
  return (
    <GlassCard>
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-600 to-purple-900 rounded-2xl flex items-center justify-center mb-6 shadow-lg rotate-3">
          <Layers className="w-8 h-8 text-white" />
        </div>

        <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
          PROTOCOL: SUBMISSIONS
        </h2>

        <div className="text-left bg-black/20 rounded-xl p-6 border border-white/5 mb-8 w-full">
          <h3 className="text-neon-purple font-bold mb-2 text-sm tracking-wider uppercase">
            Directives
          </h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-blue mt-1.5 shrink-0" />
              <span>Collaborate with peers in your track channels.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-blue mt-1.5 shrink-0" />
              <span>Submit your proof-of-work via the <strong>#submissions</strong> channel.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-blue mt-1.5 shrink-0" />
              <span>Seek assistance from Mentors if blockers arise.</span>
            </li>
          </ul>
        </div>

        <div className="flex gap-4 w-full">
          <button
             className="flex-1 py-3 px-4 rounded-lg border border-white/10 text-slate-300 text-sm hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
          >
            <HelpCircle className="w-4 h-4" /> Guide
          </button>
          <button
            onClick={onNext}
            className="flex-[2] bg-white text-black font-display font-bold rounded-lg py-3 px-4 hover:bg-neon-purple hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
          >
            ACKNOWLEDGE <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </GlassCard>
  );
};