import React from 'react';
import { Code2, Music, PenTool, Check } from 'lucide-react';
import { GlassCard } from '../GlassCard';
import { TrackType } from '../../types';

interface Step3Props {
  selected: TrackType | null;
  onSelect: (track: TrackType) => void;
  onNext: () => void;
}

export const Step3Track: React.FC<Step3Props> = ({ selected, onSelect, onNext }) => {
  
  const tracks = [
    { id: TrackType.DEVELOPMENT, label: 'DEVELOPMENT', icon: Code2, desc: 'Engineering digital ecosystems.' },
    { id: TrackType.CONTENT, label: 'CONTENT', icon: PenTool, desc: 'Forging narratives & visuals.' },
    { id: TrackType.MUSIC, label: 'MUSIC', icon: Music, desc: 'Sonic architecture & synthesis.' },
  ];

  return (
    <GlassCard>
      <h2 className="text-xl md:text-2xl font-display font-bold mb-2 text-center">
        SELECT DESIGNATION
      </h2>
      <p className="text-center text-slate-400 mb-8 text-sm">
        Choose your primary specialization path.
      </p>

      <div className="grid grid-cols-1 gap-4 mb-8">
        {tracks.map((track) => {
          const isSelected = selected === track.id;
          const Icon = track.icon;
          
          return (
            <button
              key={track.id}
              onClick={() => onSelect(track.id)}
              className={`
                relative flex items-center p-4 rounded-xl border transition-all duration-300 group overflow-hidden text-left
                ${isSelected 
                  ? 'bg-neon-blue/10 border-neon-blue shadow-[0_0_15px_rgba(0,243,255,0.15)]' 
                  : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20'}
              `}
            >
              <div className={`
                p-3 rounded-lg mr-4 transition-colors duration-300
                ${isSelected ? 'bg-neon-blue text-black' : 'bg-black/50 text-slate-400 group-hover:text-white'}
              `}>
                <Icon className="w-6 h-6" />
              </div>
              
              <div className="flex-1">
                <h3 className={`font-display font-bold ${isSelected ? 'text-neon-blue' : 'text-white'}`}>
                  {track.label}
                </h3>
                <p className="text-xs text-slate-400 mt-1">{track.desc}</p>
              </div>

              {isSelected && (
                <div className="absolute right-4 w-6 h-6 rounded-full bg-neon-blue flex items-center justify-center">
                   <Check className="w-3 h-3 text-black stroke-[3]" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      <div className="flex justify-center">
        <button
          onClick={onNext}
          disabled={!selected}
          className={`
            w-full py-4 rounded-lg font-display font-bold tracking-wider transition-all duration-300
            ${selected 
              ? 'bg-white text-black hover:bg-neon-blue hover:shadow-[0_0_20px_rgba(0,243,255,0.4)]' 
              : 'bg-white/5 text-slate-600 cursor-not-allowed'}
          `}
        >
          CONFIRM SELECTION
        </button>
      </div>
    </GlassCard>
  );
};