"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Shield, TrendingUp, Clock } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl tracking-tight font-extrabold text-foreground sm:text-5xl md:text-6xl">
              <span className="block">Earn Market-Making</span>
              <span className="block text-primary">Yield Weekly</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-muted-foreground sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Deposit USDC, get JVAULT shares, withdraw every Sunday. 
              Transparent returns from automated market-making on Base L2.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-2xl mx-auto sm:flex sm:justify-center sm:flex-wrap sm:gap-3 md:mt-8"
          >
            <div className="rounded-md shadow mb-3 sm:mb-0">
              <Button asChild size="lg" className="w-full sm:w-auto bg-green-600 hover:bg-green-700">
                <a href="#predeposit">
                  Early Access - Predeposit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="rounded-md shadow mb-3 sm:mb-0">
              <Button asChild size="lg" variant="default" className="w-full sm:w-auto">
                <a href="https://app.jobjabvault.xyz" target="_blank" rel="noopener noreferrer">
                  Launch App
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="rounded-md shadow">
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <a href="https://docs.jobjabvault.xyz/" target="_blank" rel="noopener noreferrer">
                  Read Docs
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3"
          >
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-foreground">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="mt-2 text-lg font-medium text-foreground">Transparent</h3>
              <p className="mt-1 text-muted-foreground text-center">
                0.25% flat fee, 80/20 reserve model, weekly NAV updates
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-foreground">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="mt-2 text-lg font-medium text-foreground">Market-Making</h3>
              <p className="mt-1 text-muted-foreground text-center">
                Automated trading strategies generating consistent yield
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-foreground">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="mt-2 text-lg font-medium text-foreground">Weekly Cycles</h3>
              <p className="mt-1 text-muted-foreground text-center">
                Withdraw every Sunday, lock periods for bonus points
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}