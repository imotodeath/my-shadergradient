'use client'

import { useState } from 'react'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

export default function Home() {
  return (
    <ShaderGradientCanvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
      }}
    >
      <ShaderGradient
        animate="on"
        brightness={1.1}
        cAzimuthAngle={180}
        cDistance={3.9}
        cPolarAngle={115}
        cameraZoom={1}
        color1="#5606ff"
        color2="#fe8989"
        color3="#000000"
        envPreset="city"
        fov={45}
        grain="off"
        lightType="3d"
        pixelDensity={1}
        positionX={-0.5}
        positionY={0.1}
        positionZ={0}
        range="disabled"
        rangeEnd={40}
        rangeStart={0}
        reflection={0.1}
        rotationX={0}
        rotationY={0}
        rotationZ={235}
        shader="defaults"
        type="waterPlane"
        uAmplitude={0}
        uDensity={1.1}
        uFrequency={5.5}
        uSpeed={0.1}
        uStrength={2.4}
        uTime={0.2}
        wireframe={false}
      />
    </ShaderGradientCanvas>
  )
}
