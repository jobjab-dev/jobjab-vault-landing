"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Copy, ExternalLink, Zap, Shield, Clock, CheckCircle, QrCode } from 'lucide-react'
import { QRCodeComponent } from '@/components/ui/qr-code'

export function PreDepositSection() {
  const [copied, setCopied] = useState(false)
  const [showQR, setShowQR] = useState(false)
  const vaultAddress = "0x3Ecf78015fB003b6B4Bf779A92E9313CB932f08C"

  const copyAddress = () => {
    navigator.clipboard.writeText(vaultAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="predeposit" className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-4 py-2 rounded-full mb-4">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Early Access Now Open</span>
          </div>
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Predeposit for Launch
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            Be among the first to access JVAULT. Send USDC to our vault address and get priority access when we launch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Deposit Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-green-200 dark:border-green-800">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-green-600" />
                  Predeposit Instructions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="vault-address" className="text-sm font-medium">
                    Vault Address (Base L2)
                  </Label>
                  <div className="flex mt-1">
                    <Input 
                      id="vault-address"
                      value={vaultAddress}
                      readOnly
                      className="font-mono text-sm"
                    />
                    <Button 
                      onClick={copyAddress}
                      variant="outline" 
                      size="sm" 
                      className="ml-2"
                    >
                      {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </Button>
                    <Button 
                      onClick={() => setShowQR(!showQR)}
                      variant="outline" 
                      size="sm" 
                      className="ml-2"
                    >
                      <QrCode className="w-4 h-4" />
                    </Button>
                  </div>
                  {copied && (
                    <p className="text-xs text-green-600 mt-1">Address copied!</p>
                  )}
                  
                  {showQR && (
                    <div className="mt-4 text-center">
                      <p className="text-sm font-medium mb-3">Scan to Get Address</p>
                      <div className="inline-block p-3 bg-white rounded-lg shadow-sm">
                        <QRCodeComponent value={vaultAddress} size={160} />
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Scan with your mobile wallet
                      </p>
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <span className="text-xs font-semibold text-green-800 dark:text-green-200">1</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Switch to Base Network</p>
                      <p className="text-xs text-muted-foreground">Make sure your wallet is connected to Base L2</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <span className="text-xs font-semibold text-green-800 dark:text-green-200">2</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Send USDC</p>
                      <p className="text-xs text-muted-foreground">Transfer any amount of USDC to the vault address above</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <span className="text-xs font-semibold text-green-800 dark:text-green-200">3</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Get Priority Access</p>
                      <p className="text-xs text-muted-foreground">You'll receive JVAULT tokens when we officially launch</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button className="w-full" asChild>
                    <a 
                      href={`https://basescan.org/address/${vaultAddress}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on BaseScan
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Benefits Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-blue-600" />
                  Early Access Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Priority Launch Access</h4>
                    <p className="text-sm text-muted-foreground">
                      Be among the first users when JVAULT officially launches
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">No Extra Fees</h4>
                    <p className="text-sm text-muted-foreground">
                      Standard 0.25% fee applies, no premium for early access
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Immediate Points Accrual</h4>
                    <p className="text-sm text-muted-foreground">
                      Start earning points from day one for future airdrops
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Same Withdrawal Rights</h4>
                    <p className="text-sm text-muted-foreground">
                      Full access to weekly withdrawal cycles once live
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg mt-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-800 dark:text-blue-200">
                      Launch Timeline
                    </span>
                  </div>
                  <p className="text-xs text-blue-700 dark:text-blue-300">
                    Official launch expected in Q1 2024. Predepositors will be notified via email when the platform goes live.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-muted-foreground max-w-4xl mx-auto">
            <strong>Important:</strong> Predeposits are held securely in our vault smart contract. 
            Funds will be automatically converted to JVAULT shares at launch with the same terms as regular deposits. 
            Read our{' '}
            <a href="https://docs.jobjabvault.xyz/09-risk" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
              risk disclosure
            </a>{' '}
            before participating.
          </p>
        </motion.div>
      </div>
    </section>
  )
}