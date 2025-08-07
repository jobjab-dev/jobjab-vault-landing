"use client"

import { useEffect, useRef, useState } from 'react'
import QRCode from 'qrcode'

interface QRCodeProps {
  value: string
  size?: number
  className?: string
}

export function QRCodeComponent({ value, size = 200, className }: QRCodeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const generateQR = async () => {
      if (!canvasRef.current) return
      
      try {
        await QRCode.toCanvas(canvasRef.current, value, {
          width: size,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#FFFFFF'
          }
        })
        setError(null)
      } catch (err) {
        setError('Failed to generate QR code')
        console.error('QR Code generation error:', err)
      }
    }

    generateQR()
  }, [value, size])

  if (error) {
    return (
      <div className={`flex items-center justify-center border border-dashed border-muted-foreground rounded ${className}`} style={{ width: size, height: size }}>
        <p className="text-xs text-muted-foreground text-center p-2">{error}</p>
      </div>
    )
  }

  return (
    <canvas 
      ref={canvasRef} 
      className={`border rounded ${className}`}
    />
  )
}