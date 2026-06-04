"use client";
import React from "react";

const LegoBrick3D = ({ 
  color, 
  size, 
  className,
  floatClass 
}: { 
  color: 'red' | 'blue' | 'yellow' | 'green' | 'orange'; 
  size: '2x2' | '2x4'; 
  className?: string;
  floatClass?: string;
}) => {
  const colors = {
    red: { top: '#ef4444', front: '#b91c1c', side: '#991b1b', stud: '#f87171' },
    blue: { top: '#3b82f6', front: '#1d4ed8', side: '#1e40af', stud: '#60a5fa' },
    yellow: { top: '#eab308', front: '#a16207', side: '#854d0e', stud: '#facc15' },
    green: { top: '#22c55e', front: '#15803d', side: '#166534', stud: '#4ade80' },
    orange: { top: '#f97316', front: '#c2410c', side: '#9a3412', stud: '#fb923c' },
  };

  const c = colors[color];
  const is2x4 = size === '2x4';

  return (
    <div className={`absolute select-none pointer-events-none ${className} ${floatClass}`} style={{ perspective: '800px' }}>
      <div 
        className="relative transition-transform duration-500 hover:scale-110"
        style={{ transformStyle: 'preserve-3d', transform: 'rotateX(-22deg) rotateY(25deg)' }}
      >
        {/* Top Face */}
        <div 
          className="absolute rounded-[2px]" 
          style={{
            backgroundColor: c.top,
            width: is2x4 ? '72px' : '36px',
            height: '36px',
            transform: 'rotateX(90deg) translateZ(18px)',
            boxShadow: 'inset 0 0 3px rgba(255,255,255,0.3)'
          }}
        >
          {/* Studs */}
          <div className={`grid ${is2x4 ? 'grid-cols-4' : 'grid-cols-2'} grid-rows-2 gap-[4px] p-[4px] h-full`}>
            {Array.from({ length: is2x4 ? 8 : 4 }).map((_, i) => (
              <div 
                key={i} 
                className="w-full h-full rounded-full relative"
                style={{
                  backgroundColor: c.stud,
                  transform: 'translateZ(3px)',
                  boxShadow: `0 1px 2px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.4)`
                }}
              />
            ))}
          </div>
        </div>

        {/* Front Face */}
        <div 
          className="absolute rounded-[2px]" 
          style={{
            backgroundColor: c.front,
            width: is2x4 ? '72px' : '36px',
            height: '20px',
            transform: 'translateZ(18px)',
            boxShadow: 'inset 0 0 3px rgba(0,0,0,0.15)'
          }}
        />

        {/* Side Face Left */}
        <div 
          className="absolute rounded-[2px]" 
          style={{
            backgroundColor: c.side,
            width: '36px',
            height: '20px',
            transform: 'rotateY(-90deg) translateZ(18px)',
            left: 0
          }}
        />

        {/* Side Face Right */}
        <div 
          className="absolute rounded-[2px]" 
          style={{
            backgroundColor: c.side,
            width: '36px',
            height: '20px',
            transform: 'rotateY(90deg) translateZ(54px)',
            left: 0
          }}
        />
      </div>
    </div>
  );
};

export default function LegoBricks() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[0] overflow-hidden">
      {/* Red Brick Top Left */}
      <LegoBrick3D color="red" size="2x4" className="top-[12%] left-[4%]" floatClass="lego-float-1" />
      
      {/* Blue Brick Top Right */}
      <LegoBrick3D color="blue" size="2x2" className="top-[18%] right-[5%]" floatClass="lego-float-2" />
      
      {/* Orange Brick Top Center-Left */}
      <LegoBrick3D color="orange" size="2x2" className="top-[5%] left-[35%]" floatClass="lego-float-3" />

      {/* Green Brick Top Center-Right */}
      <LegoBrick3D color="green" size="2x2" className="top-[8%] right-[30%]" floatClass="lego-float-2" />

      {/* Red Brick Middle Center-Left */}
      <LegoBrick3D color="red" size="2x4" className="top-[32%] left-[8%]" floatClass="lego-float-1" />

      {/* Yellow Brick Middle Center-Right */}
      <LegoBrick3D color="yellow" size="2x4" className="top-[38%] right-[10%]" floatClass="lego-float-3" />

      {/* Yellow Brick Middle Left */}
      <LegoBrick3D color="yellow" size="2x2" className="top-[48%] left-[2%]" floatClass="lego-float-3" />
      
      {/* Green Brick Middle Right */}
      <LegoBrick3D color="green" size="2x4" className="top-[58%] right-[3%]" floatClass="lego-float-1" />

      {/* Blue Brick Lower Middle Left */}
      <LegoBrick3D color="blue" size="2x4" className="top-[68%] left-[9%]" floatClass="lego-float-2" />

      {/* Orange Brick Lower Middle Right */}
      <LegoBrick3D color="orange" size="2x2" className="top-[72%] right-[7%]" floatClass="lego-float-1" />

      {/* Orange Brick Bottom Left */}
      <LegoBrick3D color="orange" size="2x4" className="top-[85%] left-[4%]" floatClass="lego-float-2" />

      {/* Red Brick Bottom Right */}
      <LegoBrick3D color="red" size="2x2" className="top-[90%] right-[5%]" floatClass="lego-float-3" />
    </div>
  );
}
