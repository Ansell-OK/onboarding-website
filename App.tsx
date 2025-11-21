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
import { OnboardingState } from './types';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userData, setUserData] = useState<OnboardingState>({
    discordJoined: false,
    selectedTrack: null,
    submissionsViewed: false
  });

  // Simulate initial asset load with a slightly randomized delay for realism
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {
    // Max step index is 3 (Success screen)
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const handleUpdateData = (key: keyof OnboardingState, value: any) => {
    setUserData(prev => ({ ...prev, [key]: value }));
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-neon-dark flex flex-col items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center p-6"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple mb-8 text-center">
            STACKS AI GUILD
          </h1>
          <Loader2 className="w-10 h-10 text-neon-blue animate-spin" />
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            delay={0.3}
            className="mt-6 text-slate-400 font-mono text-xs tracking-[0.2em]"
          >
            INITIALIZING NEURAL LINK...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <main className="relative w-full h-screen overflow-hidden bg-neon-dark text-white selection:bg-neon-blue selection:text-black">
      {/* 3D Background Layer */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }} dpr={[1, 2]}>
          <ParticleBackground />
        </Canvas>
      </div>

      {/* Big Typography Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <h1 className="text-[15vw] md:text-[18vw] font-display font-black text-white opacity-[0.03] leading-none whitespace-nowrap select-none">
          BUILD FUTURE
        </h1>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col h-full p-4 md:p-8 max-w-7xl mx-auto">
        
        {/* Header */}
        <header className="flex justify-between items-center mb-6 md:mb-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-3 h-3 bg-neon-blue rounded-full shadow-[0_0_10px_#00f3ff] animate-pulse" />
            <span className="font-display font-bold tracking-widest text-lg md:text-xl">
              STACKS <span className="text-neon-purple">AI GUILD</span>
            </span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:block text-xs font-mono text-slate-500 border border-white/10 px-3 py-1 rounded-full bg-black/30 backdrop-blur-md"
          >
            SYSTEM ONLINE // v1.0.2
          </motion.div>
        </header>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col items-center justify-center w-full max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
             {/* Progress Indicator (Only show for active steps 0-2) */}
            {currentStep < 3 && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="w-full mb-8 px-4"
              >
                <Navigation currentStep={currentStep} totalSteps={3} />
              </motion.div>
            )}

            {/* Step 1: Discord */}
            {currentStep === 0 && (
              <Step1Discord 
                key="step1" 
                onNext={() => {
                  handleUpdateData('discordJoined', true);
                  handleNext();
                }} 
              />
            )}

            {/* Step 2: Track Selection (Previously Step 3) */}
            {currentStep === 1 && (
              <Step3Track 
                key="step2"
                selected={userData.selectedTrack}
                onSelect={(track) => handleUpdateData('selectedTrack', track)}
                onNext={handleNext}
              />
            )}

            {/* Step 3: Submissions Info (Previously Step 4) */}
            {currentStep === 2 && (
              <Step4Submissions 
                key="step3"
                onNext={() => {
                  handleUpdateData('submissionsViewed', true);
                  handleNext();
                }}
              />
            )}

            {/* Success Screen */}
            {currentStep === 3 && (
              <SuccessScreen key="success" />
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <footer className="mt-auto py-4 text-center text-[10px] md:text-xs text-slate-600 font-mono uppercase tracking-wider">
          <p>© {new Date().getFullYear()} Stacks AI Guild. All systems nominal.</p>
        </footer>
      </div>
    </main>
  );
};

export default App;