"use client"

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Coins, Lock, TrendingUp, Calendar } from 'lucide-react'

export function HowItWorksSection() {
  const steps = [
    {
      icon: Coins,
      title: "Deposit USDC",
      description: "Connect your wallet and deposit USDC to receive JVAULT shares. Choose lock period for bonus points."
    },
    {
      icon: Lock,
      title: "Farm Airdrops",
      description: "Your pooled funds perform market-making on platforms like Hyperliquid to farm airdrops. 70% to users, 30% to protocol."
    },
    {
      icon: TrendingUp,
      title: "Track Performance",
      description: "Monitor your shares, NAV updates, and points accumulation in real-time through the dashboard."
    },
    {
      icon: Calendar,
      title: "Withdraw Weekly",
      description: "Request withdrawals anytime after lock period. Funds processed every Sunday with updated NAV."
    }
  ]

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            How JVAULT Works
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            Simple deposit, automated yield generation, transparent weekly settlements
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="relative h-full">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-lg text-primary-foreground mb-4">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                  <div className="absolute top-4 right-4 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">
                      {index + 1}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card className="glass-effect">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h4 className="font-semibold text-lg mb-2">Lock Tiers</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>7 days: 1.0x points</div>
                    <div>30 days: 1.3x points</div>
                    <div>60 days: 1.6x points</div>
                    <div>90 days: 2.0x points</div>
                  </div>
                  <a href="https://docs.jobjabvault.xyz/08-points" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">
                    Learn More →
                  </a>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-lg mb-2">Weekly Cycle</h4>
                  <p className="text-sm text-muted-foreground">
                    Every Sunday 07:00 Bangkok time:<br/>
                    Close positions → Update NAV → Process withdrawals → Rebalance
                  </p>
                  <a href="https://docs.jobjabvault.xyz/04-withdraw" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">
                    How Withdrawals Work →
                  </a>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-lg mb-2">Fee Structure</h4>
                  <p className="text-sm text-muted-foreground">
                    0.25% on deposits<br/>
                    0.25% on withdrawals<br/>
                    No management fees
                  </p>
                  <a href="https://docs.jobjabvault.xyz/07-fees" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">
                    View Details →
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}