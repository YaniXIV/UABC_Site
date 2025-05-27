// BlockchainBackground.tsx
import React, { useEffect, useState } from 'react'

const BlockchainBackground = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isLowPowerMode, setIsLowPowerMode] = useState(false);
  const [debugInfo, setDebugInfo] = useState({});

  useEffect(() => {
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    // Check for low power mode - simplified to only check for reduced motion preference
    const checkLowPowerMode = () => {
      const isLowPower = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setIsLowPowerMode(isLowPower);
      
      // Debug information
      setDebugInfo({
        prefersReducedMotion: mediaQuery.matches,
        isLowPower,
        webglEnabled: !!window.WebGLRenderingContext,
        devicePixelRatio: window.devicePixelRatio,
        userAgent: navigator.userAgent
      });
    };
    
    checkLowPowerMode();
    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches);
      checkLowPowerMode();
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Always use full animation mode for powerful GPUs
  const cubePositions = [
    { top: '25%', left: '25%', scale: 1 },
    { top: '35%', left: '65%', scale: 1 },
    { top: '60%', left: '40%', scale: 1 },
    { top: '45%', left: '15%', scale: 1 }
  ];

  // Always use full number of circles
  const numCircles = 8;

  useEffect(() => {
    // Add touch event handling for better mobile performance
    const handleTouchMove = (e) => {
      // Pause animations during touch movement
      document.querySelectorAll('.cubespinner').forEach(cube => {
        cube.style.animationPlayState = 'paused';
      });
    };

    const handleTouchEnd = () => {
      // Resume animations after touch ends
      document.querySelectorAll('.cubespinner').forEach(cube => {
        cube.style.animationPlayState = 'running';
      });
    };

    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  // Debug overlay
  const showDebug = false; // Set to true to see debug info

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900/50 to-gray-900" />
      
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-10 perspective-1000">
        <div className="absolute inset-0 transform-gpu" style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite',
          transform: 'rotateX(60deg)',
          willChange: 'transform',
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden',
        }} />
      </div>

      {/* Multiple 3D Rotating Cubes */}
      {cubePositions.map((pos, i) => (
        <div 
          key={i}
          className="stage-cube-cont absolute"
          style={{
            top: pos.top,
            left: pos.left,
            transform: `scale(${pos.scale})`,
            animation: `floatCube ${20 + Math.random() * 15}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: 1,
            transformOrigin: 'center',
            willChange: 'transform',
            backfaceVisibility: 'hidden',
            perspective: '1000px',
            transformStyle: 'preserve-3d',
            transition: 'transform 0.5s ease-out',
          }}
        >
          <div className={`cubespinner cube-${i}`}>
            <div className="face1" />
            <div className="face2" />
            <div className="face3" />
            <div className="face4" />
            <div className="face5" />
            <div className="face6" />
          </div>
        </div>
      ))}

      {/* Floating circles */}
      <div className="absolute inset-0">
        {Array.from({ length: numCircles }).map((_, i) => {
          const size = 40 + Math.random() * 60;
          const duration = 30 + Math.random() * 20;
          const delay = Math.random() * 10;
          const startX = Math.random() * 100;
          const startY = Math.random() * 100;
          
          return (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${startX}%`,
                top: `${startY}%`,
                background: 'radial-gradient(circle at center, rgba(147, 51, 234, 0.25) 0%, rgba(59, 130, 246, 0.2) 100%)',
                animation: `floatCircle${i % 3} ${duration}s ease-in-out infinite`,
                animationDelay: `${delay}s`,
                filter: 'blur(3px)',
                border: '1px solid rgba(147, 51, 234, 0.2)',
                borderRadius: '50%',
                aspectRatio: '1/1',
                boxShadow: '0 0 20px rgba(147, 51, 234, 0.2)',
                willChange: 'transform',
                opacity: 0.6 + Math.random() * 0.4,
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
              }}
            />
          );
        })}
      </div>

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 100%)',
          zIndex: 1,
          backdropFilter: 'blur(2px)',
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
      />

      {/* Debug overlay */}
      {showDebug && (
        <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg z-50 text-sm">
          <pre>{JSON.stringify(debugInfo, null, 2)}</pre>
        </div>
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 50px 50px;
          }
        }

        @keyframes floatCube {
          0% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(10px, -10px, 0) scale(1.02); }
          100% { transform: translate3d(0, 0, 0) scale(1); }
        }

        @keyframes floatCircle0 {
          0% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(100px, -80px, 0) scale(1.2); }
          100% { transform: translate3d(0, 0, 0) scale(1); }
        }

        @keyframes floatCircle1 {
          0% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(-120px, -60px, 0) scale(0.8); }
          100% { transform: translate3d(0, 0, 0) scale(1); }
        }

        @keyframes floatCircle2 {
          0% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(80px, -120px, 0) scale(1.3); }
          100% { transform: translate3d(0, 0, 0) scale(1); }
        }

        .cubespinner {
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-duration: 12s;
          transform-style: preserve-3d;
          transform-origin: 50px 50px 0;
          margin-left: calc(50% - 50px);
          willChange: 'transform';
          backfaceVisibility: 'hidden';
          transform: translateZ(0);
          width: 100px;
          height: 100px;
          position: relative;
          animation-play-state: running;
        }

        .cubespinner div {
          position: absolute;
          width: 100px;
          height: 100px;
          border: 1px solid rgba(255,255,255,0.1);
          background: linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.2));
          text-align: center;
          font-size: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
          backdrop-filter: blur(3px);
          box-shadow: 0 0 20px 0px rgba(147, 51, 234, 0.3);
          backfaceVisibility: 'hidden';
          transform: translateZ(0);
          willChange: 'transform';
        }

        .cube-0 { animation-name: spin1; }
        .cube-1 { animation-name: spin2; }
        .cube-2 { animation-name: spin3; }
        .cube-3 { animation-name: spin4; }

        .cubespinner .face1 { transform: translateZ(50px); }
        .cubespinner .face2 { transform: rotateY(90deg) translateZ(50px); }
        .cubespinner .face3 { transform: rotateY(90deg) rotateX(90deg) translateZ(50px); }
        .cubespinner .face4 { transform: rotateY(180deg) rotateZ(90deg) translateZ(50px); }
        .cubespinner .face5 { transform: rotateY(-90deg) rotateZ(90deg) translateZ(50px); }
        .cubespinner .face6 { transform: rotateX(-90deg) translateZ(50px); }

        @keyframes spin1 {
          from { transform: rotate3d(1, 1, 1, 0deg); }
          to { transform: rotate3d(1, 1, 1, 360deg); }
        }

        @keyframes spin2 {
          from { transform: rotate3d(1, 1, 0, 0deg); }
          to { transform: rotate3d(1, 1, 0, 360deg); }
        }

        @keyframes spin3 {
          from { transform: rotate3d(0, 1, 1, 0deg); }
          to { transform: rotate3d(0, 1, 1, 360deg); }
        }

        @keyframes spin4 {
          from { transform: rotate3d(1, 0, 1, 0deg); }
          to { transform: rotate3d(1, 0, 1, 360deg); }
        }

        @media (max-width: 768px) {
          .cubespinner {
            width: 80px;
            height: 80px;
            margin-left: calc(50% - 40px);
          }

          .cubespinner div {
            width: 80px;
            height: 80px;
          }

          .cubespinner .face1 { transform: translateZ(40px); }
          .cubespinner .face2 { transform: rotateY(90deg) translateZ(40px); }
          .cubespinner .face3 { transform: rotateY(90deg) rotateX(90deg) translateZ(40px); }
          .cubespinner .face4 { transform: rotateY(180deg) rotateZ(90deg) translateZ(40px); }
          .cubespinner .face5 { transform: rotateY(-90deg) rotateZ(90deg) translateZ(40px); }
          .cubespinner .face6 { transform: rotateX(-90deg) translateZ(40px); }
        }

        .stage-cube-cont {
          position: absolute;
          transform-origin: center;
          willChange: 'transform';
          backfaceVisibility: 'hidden';
          transform: translateZ(0);
          transition: transform 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default BlockchainBackground;
