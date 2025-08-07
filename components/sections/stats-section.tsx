"use client"

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { formatNumber, formatPercentage, formatUSDC } from '@/lib/utils'

// Mock stats for landing page display (pre-launch)
const mockStats = {
  tvl: 0,
  nav: 1.0000,
  reservePercent: 0,
  weeklyYield: 0,
  totalUsers: 0
}

export function StatsSection() {
  const timeUntilUpdate = () => {
    const now = new Date()
    const sunday = new Date()
    sunday.setDate(now.getDate() + (7 - now.getDay()))
    sunday.setHours(7, 0, 0, 0) // 07:00 Bangkok time
    
    const diff = sunday.getTime() - now.getTime()
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    
    return `${days}d ${hours}h`
  }

  const stats = [
    {
      label: "Total Value Locked",
      value: `$${formatNumber(mockStats.tvl, { minimumFractionDigits: 0 })}`,
      change: "Pre-launch",
      description: "Coming soon"
    },
    {
      label: "NAV per Share",
      value: `$${formatUSDC(mockStats.nav)}`,
      change: "Starting price",
      description: "At launch"
    },
    {
      label: "Reserve Ratio",
      value: formatPercentage(mockStats.reservePercent / 100),
      change: "Not active",
      description: "20% target"
    },
    {
      label: "Next Settlement",
      value: timeUntilUpdate(),
      change: "Sunday 07:00",
      description: "Bangkok time"
    }
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Live Vault Statistics
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            Real-time metrics updated every 20 seconds
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-muted-foreground">
                        {stat.label}
                      </p>
                      <p className="text-2xl font-bold text-foreground">
                        {stat.value}
                      </p>
                      <div className="flex items-center mt-1">
                        <span className={`text-sm font-medium ${
                          stat.change.startsWith('+') 
                            ? 'text-green-600 dark:text-green-400'
                            : stat.change === 'Healthy'
                            ? 'text-blue-600 dark:text-blue-400'
                            : stat.change === 'Starting price'
                            ? 'text-blue-600 dark:text-blue-400'
                            : 'text-muted-foreground'
                        }`}>
                          {stat.change}
                        </span>
                        <span className="text-xs text-muted-foreground ml-2">
                          {stat.description}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <Card className="glass-effect">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">Active Users</h3>
                <p className="text-3xl font-bold text-primary mb-2">
                  {formatNumber(mockStats.totalUsers)}
                </p>
                <p className="text-sm text-muted-foreground">
                  Participants earning market-making yield
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}