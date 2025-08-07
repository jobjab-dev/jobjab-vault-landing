"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Circle, Clock, Zap, Globe, Shield, TrendingUp } from 'lucide-react'

// Roadmap data aligned with docs/16-roadmap.md
const roadmapPhases = [
  {
    phase: "Phase 1",
    title: "Foundation",
    status: "in-progress",
    icon: Clock,
    items: [
      "Core smart contracts architecture",
      "Web3 frontend (Landing + dApp)",
      "Multi-language documentation",
      "Smart contract implementation",
      "Backend API development"
    ]
  },
  {
    phase: "Phase 2", 
    title: "Launch",
    status: "upcoming",
    icon: Zap,
    items: [
      "Smart Contract Deployment on Base L2",
      "Market-Making Operations (lighter.xyz)",
      "Full deposit/withdrawal functionality",
      "Points tracking & leaderboard",
      "Weekly settlement automation"
    ]
  },
  {
    phase: "Phase 3",
    title: "Growth", 
    status: "upcoming",
    icon: TrendingUp,
    items: [
      "Multi-Platform Trading (Hyperliquid+)",
      "Mobile app development",
      "Enhanced analytics dashboard",
      "Referral program & social features",
      "Advanced trading strategies"
    ]
  },
  {
    phase: "Phase 4+",
    title: "Coming Soon",
    status: "future", 
    icon: Globe,
    items: [
      "HyperEVM migration planning",
      "Multi-chain support",
      "Institutional features",
      "Ecosystem expansion",
      "Advanced DeFi integrations"
    ]
  }
]

export function RoadmapSection() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 dark:text-green-400'
      case 'in-progress': return 'text-blue-600 dark:text-blue-400'
      case 'upcoming': return 'text-yellow-600 dark:text-yellow-400'
      case 'future': return 'text-muted-foreground'
      default: return 'text-muted-foreground'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle
      case 'in-progress': return Clock
      default: return Circle
    }
  }

  return (
    <section id="roadmap" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            JVAULT Roadmap
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            From Foundation to Growth: Building Accessible Market-Making for Everyone
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {roadmapPhases.map((phase, index) => {
            const StatusIcon = getStatusIcon(phase.status)
            const PhaseIcon = phase.icon
            
            return (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full transition-all duration-300 hover:shadow-lg ${
                  phase.status === 'in-progress' ? 'ring-2 ring-primary' : ''
                }`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className={`p-2 rounded-lg ${
                          phase.status === 'in-progress' 
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        }`}>
                          <PhaseIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">
                            {phase.phase}
                          </p>
                          <CardTitle className="text-lg">
                            {phase.title}
                          </CardTitle>
                        </div>
                      </div>
                      <StatusIcon className={`w-6 h-6 ${getStatusColor(phase.status)}`} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2">
                          <Circle className="w-4 h-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Current Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card className="glass-effect border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Current Focus: Phase 1 - Foundation</h3>
              <p className="text-muted-foreground mb-4">
                Building core infrastructure, smart contracts, and documentation. 
                Creating the foundation for accessible market-making through pooled investments.
              </p>
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">In Development</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}