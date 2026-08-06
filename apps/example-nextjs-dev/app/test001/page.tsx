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
  cAzimuthAngle={1156}
  cDistance={8.94}
  cPolarAngle={120}
  cameraZoom={0.38}
  color1="#fff157"
  color2="#73eaff"
  color3="#fff157"
  destination="onCanvas"
  embedMode="off"
  envPreset="city"
  format="gif"
  fov={10}
  frameRate={10}
  gizmoHelper="hide"
  grain="off"
  lightType="3d"
  pixelDensity={1.3}
  positionX={0}
  positionY={0}
  positionZ={0}
  range="disabled"
  rangeEnd={40}
  rangeStart={0}
  reflection={0}
  rotationX={0}
  rotationY={0}
  rotationZ={0}
  shader="defaults"
  type="sphere"
  uAmplitude={2.1}
  uDensity={1.7}
  uFrequency={5.5}
  uSpeed={0.1}
  uStrength={1.7}
  uTime={0.2}
  wireframe={false}
  zoomOut={false}
/>
    </ShaderGradientCanvas>
  )
}
