import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { AnimatePresence, motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { ParticleBackground } from './components/ParticleBackground';
import { Navigation } from './components/Navigation';
import { Step1Discord } from './components/steps/Step1Discord';
import { Step3Track } from './components/steps/Step3Track';
import { Step4Submissions } from './components/steps/Step4Submissions';
import { SuccessScreen } from './components/steps/SuccessScreen';
import { OnboardingState, TrackType } from './types';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userData, setUserData] = useState<OnboardingState>({
    discordJoined: false,
    selectedTrack: null,
    submissionsViewed: false
  });

  // Simulate initial asset load
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const handleUpdateData = (key: keyof OnboardingState, value: any) => {
    setUserData(prev => ({ ...prev, [key]: value }));
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-neon-dark flex flex-col items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple mb-8">
            STACKS AI GUILD
          </h1>
          <Loader2 className="w-12 h-12 text-neon-blue animate-spin" />
          <p className="mt-4 text-slate-400 font-sans text-sm tracking-widest">INITIALIZING PROTOCOL...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <main className="relative w-full h-screen overflow-hidden bg-neon-dark text-white">
      {/* 3D Background Layer */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ParticleBackground />
        </Canvas>
      </div>

      {/* Big Typography Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <h1 className="text-[15vw] md:text-[20vw] font-display font-black text-white opacity-[0.03] leading-none whitespace-nowrap select-none">
          BUILD FUTURE
        </h1>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col h-full p-4 md:p-8 max-w-7xl mx-auto">
        
        {/* Header */}
        <header className="flex justify-between items-center mb-8 md:mb-12">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-neon-blue rounded-full shadow-[0_0_10px_#00f3ff]" />
            <span className="font-display font-bold tracking-widest text-lg md:text-xl">STACKS <span className="text-neon-purple">AI GUILD</span></span>
          </div>
          <div className="text-xs md:text-sm font-mono text-slate-400 border border-white/10 px-3 py-1 rounded-full bg-black/20 backdrop-blur-sm">
            BETA ACCESS // v1.0
          </div>
        </header>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col items-center justify-center w-full max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
             {/* Progress Indicator (Only show for steps 0-2) */}
            {currentStep < 3 && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="w-full mb-8"
              >
                <Navigation currentStep={currentStep} totalSteps={3} />
              </motion.div>
            )}

            {currentStep === 0 && (
              <Step1Discord 
                key="step1" 
                onNext={() => {
                  handleUpdateData('discordJoined', true);
                  handleNext();
                }} 
              />
            )}

            {currentStep === 1 && (
              <Step3Track 
                key="step3"
                selected={userData.selectedTrack}
                onSelect={(track) => handleUpdateData('selectedTrack', track)}
                onNext={handleNext}
              />
            )}

            {currentStep === 2 && (
              <Step4Submissions 
                key="step4"
                onNext={() => {
                  handleUpdateData('submissionsViewed', true);
                  handleNext();
                }}
              />
            )}

            {currentStep === 3 && (
              <SuccessScreen key="success" />
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <footer className="mt-auto py-4 text-center text-xs text-slate-600 font-mono">
          SECURE CONNECTION ESTABLISHED // SYSTEM READY
        </footer>
      </div>
    </main>
  );
};

export default App;