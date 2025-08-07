import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - JVAULT',
  description: 'Terms of Service for JVAULT - Weekly-Batch Liquidity Vault',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-lg p-8">
          <h1 className="text-3xl font-bold text-foreground mb-8">Terms of Service</h1>
          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            
            <section>
              <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using JVAULT ("the Service"), you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">2. Service Description</h2>
              <p className="text-muted-foreground leading-relaxed">
                JVAULT is a pooled investment service that uses deposited USDC to perform market-making activities 
                on centralized platforms including but not limited to Hyperliquid and lighter.xyz for the purpose 
                of farming potential airdrops and other rewards.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">3. Investment Risks</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p><strong>High Risk Investment:</strong> Cryptocurrency investments carry significant risk of loss.</p>
                <p><strong>No Guaranteed Returns:</strong> Past performance does not guarantee future results.</p>
                <p><strong>Market-Making Risks:</strong> Automated trading strategies may result in losses.</p>
                <p><strong>Platform Risks:</strong> Third-party platforms may experience downtime or security issues.</p>
                <p><strong>Smart Contract Risks:</strong> Blockchain technology carries inherent technical risks.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">4. Deposit and Withdrawal Terms</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p><strong>Deposits:</strong> USDC deposits are subject to a 0.25% fee paid to the protocol team.</p>
                <p><strong>Lock Periods:</strong> Users may choose lock periods of 7, 30, 60, or 90 days for bonus points.</p>
                <p><strong>Withdrawals:</strong> Withdrawal requests can be made after lock expiry, subject to 0.25% fee.</p>
                <p><strong>Settlement:</strong> Withdrawals are processed weekly on Sundays at 00:00 UTC.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">5. Airdrop Distribution</h2>
              <p className="text-muted-foreground leading-relaxed">
                Any airdrops or rewards obtained through market-making activities will be distributed as follows: 
                70% to users based on their points accumulation, 30% retained by the protocol. Distribution 
                timelines and methods are at the sole discretion of JVAULT.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">6. Eligibility and Compliance</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>Users must be at least 18 years old and legally capable of entering contracts.</p>
                <p>Users are responsible for compliance with their local laws and regulations.</p>
                <p>JVAULT reserves the right to restrict access from certain jurisdictions.</p>
                <p>Users must not use the service for illegal activities or money laundering.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                JVAULT, its operators, and affiliates shall not be liable for any indirect, incidental, special, 
                or consequential damages arising from the use of this service. Our total liability is limited 
                to the amount of your deposits.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">8. Service Modifications</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify, suspend, or discontinue the service at any time. 
                We will provide reasonable notice of material changes when possible.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">9. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms are governed by the laws of the jurisdiction where JVAULT operates. 
                Any disputes shall be resolved through binding arbitration.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">10. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms of Service, please contact us through our official channels 
                or visit our documentation at <a href="https://docs.jobjabvault.xyz" className="text-primary hover:underline">docs.jobjabvault.xyz</a>.
              </p>
            </section>

            <div className="mt-8 pt-8 border-t border-border text-sm text-muted-foreground">
              <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <p className="mt-2">
                By using JVAULT, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}