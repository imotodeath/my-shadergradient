'use client'

import { useState } from 'react'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

export default function Home() {
  return (
    <ShaderGradientCanvas
      alpha
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'transparent'
      }}
    >
  <ShaderGradient
  animate="on"
  axesHelper="off"
  brightness={1.2}
  cAzimuthAngle={0}
  cDistance={0.3}
  cPolarAngle={75}
  cameraZoom={3.8}
  color1="#ffe83b"
  color2="#73eaff"
  color3="#fffdf5"
  destination="onCanvas"
  embedMode="off"
  envPreset="city"
  format="gif"
  fov={45}
  frameRate={10}
  gizmoHelper="hide"
  grain="off"
  lightType="3d"
  pixelDensity={1}
  positionX={0}
  positionY={0}
  positionZ={0}
  range="disabled"
  rangeEnd={40}
  rangeStart={0}
  reflection={0.1}
  rotationX={0}
  rotationY={0}
  rotationZ={0}
  shader="defaults"
  type="sphere"
  uAmplitude={2.3}
  uDensity={0.9}
  uFrequency={5.5}
  uSpeed={0.2}
  uStrength={1.4}
  uTime={0.2}
  wireframe={false}
/>
    </ShaderGradientCanvas>
  )
}


