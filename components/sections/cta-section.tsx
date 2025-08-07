"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Shield, Users, Zap } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl overflow-hidden"
        >
          <div className="px-6 py-16 sm:px-16">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Ready to Start Earning?
              </h2>
              <p className="mt-4 text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Join hundreds of users earning consistent returns through automated market-making strategies
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  <a href="https://app.jobjabvault.xyz" target="_blank" rel="noopener noreferrer">
                    Launch App
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <a href="https://docs.jobjabvault.xyz/" target="_blank" rel="noopener noreferrer">
                    Read Documentation
                  </a>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <Shield className="h-8 w-8 text-primary-foreground/80 mb-2" />
                  <h3 className="text-lg font-semibold text-white">Transparent</h3>
                  <p className="text-primary-foreground/80 text-center">
                    Open-source contracts, public NAV updates
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Users className="h-8 w-8 text-primary-foreground/80 mb-2" />
                  <h3 className="text-lg font-semibold text-white">Community</h3>
                  <p className="text-primary-foreground/80 text-center">
                    Join our Discord for updates and support
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Zap className="h-8 w-8 text-primary-foreground/80 mb-2" />
                  <h3 className="text-lg font-semibold text-white">Base L2</h3>
                  <p className="text-primary-foreground/80 text-center">
                    Fast transactions, low fees, secure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-muted-foreground max-w-4xl mx-auto">
            <strong>Disclaimer:</strong> JVAULT involves financial risks. Market-making strategies may result in losses. 
            Past performance does not guarantee future results. Please read our{' '}
            <a href="https://docs.jobjabvault.xyz/09-risk" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
              risk disclosure
            </a>{' '}
            and{' '}
            <Link href="/terms" className="underline hover:text-foreground">
              terms of service
            </Link>{' '}
            before participating. Only invest what you can afford to lose.
          </p>
        </motion.div>
      </div>
    </section>
  )
}