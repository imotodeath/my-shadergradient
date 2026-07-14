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
  axesHelper="off"
  bgColor1="#000000"
  bgColor2="#000000"
  brightness={1.3}
  cAzimuthAngle={170}
  cDistance={4.4}
  cPolarAngle={70}
  cameraZoom={1}
  color1="#fcff2e"
  color2="#7af0ff"
  color3="#ffffff"
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
  positionY={0.9}
  positionZ={-0.3}
  range="enabled"
  rangeEnd={40}
  rangeStart={0}
  reflection={0.1}
  rotationX={45}
  rotationY={0}
  rotationZ={0}
  shader="defaults"
  type="sphere"
  uAmplitude={5.9}
  uDensity={1.3}
  uFrequency={0}
  uSpeed={0.05}
  uStrength={7.5}
  uTime={0}
  wireframe={false}
/>
    </ShaderGradientCanvas>
  )
}
