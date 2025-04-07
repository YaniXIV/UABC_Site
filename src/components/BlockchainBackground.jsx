// BlockchainBackground.tsx
import React from 'react'

const BlockchainBackground = () => {
  // Predefined positions for cubes to ensure consistent placement
  const cubePositions = [
    { top: '25%', left: '25%', scale: 0.6 },
    { top: '35%', left: '65%', scale: 0.7 },
    { top: '60%', left: '40%', scale: 0.5 },
    { top: '45%', left: '15%', scale: 0.8 },
    { top: '70%', left: '75%', scale: 0.6 }
  ];

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
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: '80px',
              height: '80px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: 'radial-gradient(circle at center, rgba(147, 51, 234, 0.25) 0%, rgba(59, 130, 246, 0.2) 100%)',
              animation: `floatCircle ${25 + Math.random() * 15}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              filter: 'blur(3px)',
              border: '1px solid rgba(147, 51, 234, 0.2)',
              borderRadius: '50%',
              aspectRatio: '1/1',
              boxShadow: '0 0 20px rgba(147, 51, 234, 0.2)',
            }}
          />
        ))}
      </div>

      {/* Radial gradient overlay - More transparent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 100%)',
          zIndex: 1,
          backdropFilter: 'blur(2px)',
        }}
      />

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
          0% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-50px) translateX(30px); }
          50% { transform: translateY(0) translateX(60px); }
          75% { transform: translateY(50px) translateX(30px); }
          100% { transform: translateY(0) translateX(0); }
        }

        @keyframes floatCircle {
          0% { transform: translateY(0) translateX(0) scale(1); }
          25% { transform: translateY(-60px) translateX(40px) scale(1.1); }
          50% { transform: translateY(0) translateX(80px) scale(1); }
          75% { transform: translateY(60px) translateX(40px) scale(0.9); }
          100% { transform: translateY(0) translateX(0) scale(1); }
        }

        .cubespinner {
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-duration: 12s;
          transform-style: preserve-3d;
          transform-origin: 50px 50px 0;
          margin-left: calc(50% - 50px);
          willChange: 'transform';
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
        }

        .cube-0 { animation-name: spin1; }
        .cube-1 { animation-name: spin2; }
        .cube-2 { animation-name: spin3; }
        .cube-3 { animation-name: spin4; }
        .cube-4 { animation-name: spin5; }

        .cubespinner .face1 { transform: translateZ(50px); }
        .cubespinner .face2 { transform: rotateY(90deg) translateZ(50px); }
        .cubespinner .face3 { transform: rotateY(90deg) rotateX(90deg) translateZ(50px); }
        .cubespinner .face4 { transform: rotateY(180deg) rotateZ(90deg) translateZ(50px); }
        .cubespinner .face5 { transform: rotateY(-90deg) rotateZ(90deg) translateZ(50px); }
        .cubespinner .face6 { transform: rotateX(-90deg) translateZ(50px); }

        @keyframes spin1 {
          from { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
          to { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
        }

        @keyframes spin2 {
          from { transform: rotateX(72deg) rotateY(72deg) rotateZ(0deg); }
          to { transform: rotateX(432deg) rotateY(432deg) rotateZ(360deg); }
        }

        @keyframes spin3 {
          from { transform: rotateX(144deg) rotateY(144deg) rotateZ(0deg); }
          to { transform: rotateX(504deg) rotateY(504deg) rotateZ(360deg); }
        }

        @keyframes spin4 {
          from { transform: rotateX(216deg) rotateY(216deg) rotateZ(0deg); }
          to { transform: rotateX(576deg) rotateY(576deg) rotateZ(360deg); }
        }

        @keyframes spin5 {
          from { transform: rotateX(288deg) rotateY(288deg) rotateZ(0deg); }
          to { transform: rotateX(648deg) rotateY(648deg) rotateZ(360deg); }
        }
      `}</style>
    </div>
  )
}

export default BlockchainBackground
