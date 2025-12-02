import React from 'react';
import './LandingAnimation.scss';
import { motion } from 'framer-motion';
import { CubeGrid } from './CubeGrid';

interface LandingPageProps {
  onStart: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 10 }
    },
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden font-sans">
      
      {/* 1. Background Animation (Gradient + Waves) */}
      <div className="landing-animation-container">
        {/* Waves */}
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>

      {/* 2. Interactive Cube Grid Layer (Optional - keeping it for now as it adds depth, but let's see if it fits the new vibe) */}
      <div className="absolute inset-0 flex items-center justify-center z-0 opacity-30 pointer-events-auto">
         <div className="scale-125 mix-blend-overlay">
             <CubeGrid rows={6} cols={8} />
         </div>
      </div>

      {/* 3. Main Content */}
      <motion.div 
        className="relative z-10 px-6 max-w-5xl mx-auto w-full flex flex-col items-center text-center pointer-events-none"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
            {/* Title: Variable Font Pop-Art Text */}
            <motion.div variants={itemVariants} className="mb-10 w-full flex justify-center">
                <h1 
                    className="pop-art-text text-[6rem] sm:text-[8rem] md:text-[10rem] leading-none tracking-tighter pointer-events-auto select-none"
                >
                    Baro.AI
                </h1>
            </motion.div>
            
            {/* Subtitle */}
            <motion.div variants={itemVariants} className="mb-12 space-y-2">
                <p className="text-xl md:text-2xl text-white font-bold leading-relaxed drop-shadow-lg">
                    AI와 함께 팀의 워크플로우를
                </p>
                <p className="text-xl md:text-2xl text-white font-bold leading-relaxed drop-shadow-lg">
                    새로운 차원으로 끌어올리세요.
                </p>
            </motion.div>

            {/* Button */}
            <motion.div variants={itemVariants}>
                <button 
                onClick={onStart}
                className="pointer-events-auto px-16 py-5 bg-white text-[#FF6B6B] text-xl font-bold rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_rgba(255,107,107,0.4)] hover:-translate-y-1 active:translate-y-0 active:scale-95 transition-all duration-300"
                >
                    시작하기
                </button>
            </motion.div>
      </motion.div>

       <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1.0, duration: 1 }}
        className="absolute bottom-10 z-10 text-white/30 text-xs tracking-widest uppercase pointer-events-none"
      >
        © 2024 Nexus AI Corp.
      </motion.div>
    </div>
  );
};
