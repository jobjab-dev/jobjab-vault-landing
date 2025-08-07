import Link from 'next/link'
import { Building2, Github, Twitter, MessageCircle } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
                  Product
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/#how-it-works" className="text-base text-muted-foreground hover:text-foreground">
                      How It Works
                    </Link>
                  </li>
                  <li>
                    <Link href="/#roadmap" className="text-base text-muted-foreground hover:text-foreground">
                      Roadmap
                    </Link>
                  </li>
                  <li>
                    <a 
                      href="https://app.jobjabvault.xyz" 
                      className="text-base text-muted-foreground hover:text-foreground"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Launch App
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
                  Resources
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/docs" className="text-base text-muted-foreground hover:text-foreground">
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs/faq" className="text-base text-muted-foreground hover:text-foreground">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs/risks" className="text-base text-muted-foreground hover:text-foreground">
                      Risks & Disclaimers
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-base text-muted-foreground hover:text-foreground">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-base text-muted-foreground hover:text-foreground">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
                  Community
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a 
                      href="https://discord.gg/jvault" 
                      className="text-base text-muted-foreground hover:text-foreground"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Discord
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://x.com/jobjab_eth" 
                      className="text-base text-muted-foreground hover:text-foreground"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://github.com/jvault-xyz" 
                      className="text-base text-muted-foreground hover:text-foreground"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/terms" className="text-base text-muted-foreground hover:text-foreground">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-base text-muted-foreground hover:text-foreground">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 xl:mt-0">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-3">
                <Building2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">JVAULT</span>
            </div>
            <p className="mt-4 text-muted-foreground text-base">
              Weekly-batch liquidity vault earning market-making yield on Base L2.
            </p>
            <div className="flex space-x-6 mt-6">
              <a 
                href="https://x.com/jobjab_eth" 
                className="text-muted-foreground hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a 
                href="https://discord.gg/jvault" 
                className="text-muted-foreground hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Discord</span>
                <MessageCircle className="h-6 w-6" />
              </a>
              <a 
                href="https://github.com/jvault-xyz" 
                className="text-muted-foreground hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-muted pt-8">
          <p className="text-base text-muted-foreground xl:text-center">
            &copy; 2024 JVAULT. All rights reserved. Built on Base L2.
          </p>
        </div>
      </div>
    </footer>
  )
}