
"use client";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function StarfieldBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas>
        <Stars
          radius={100}     
          depth={50}       
          count={10000}   
          factor={4}       
          saturation={0}
          fade
        />
      </Canvas>
    </div>
  );
}