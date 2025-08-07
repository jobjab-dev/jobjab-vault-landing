import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - JVAULT',
  description: 'Privacy Policy for JVAULT - How we collect, use, and protect your data',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-lg p-8">
          <h1 className="text-3xl font-bold text-foreground mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            
            <section>
              <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p><strong>Wallet Information:</strong> We collect your wallet address when you connect to our service.</p>
                <p><strong>Transaction Data:</strong> Deposit amounts, withdrawal requests, and transaction hashes.</p>
                <p><strong>Usage Data:</strong> Website interactions, pages visited, and time spent on our platform.</p>
                <p><strong>Technical Data:</strong> IP address, browser type, device information, and connection data.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">2. How We Use Your Information</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p><strong>Service Provision:</strong> To process deposits, withdrawals, and calculate points and rewards.</p>
                <p><strong>Security:</strong> To detect fraud, protect against unauthorized access, and ensure platform security.</p>
                <p><strong>Analytics:</strong> To understand user behavior and improve our service quality.</p>
                <p><strong>Communication:</strong> To provide important updates about your account and the service.</p>
                <p><strong>Compliance:</strong> To meet legal and regulatory requirements when necessary.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">3. Data Storage and Security</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>We implement industry-standard security measures to protect your data.</p>
                <p>Sensitive data is encrypted both in transit and at rest.</p>
                <p>We use secure hosting providers and regularly update our security protocols.</p>
                <p>Access to personal data is restricted to authorized personnel only.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">4. Third-Party Services</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p><strong>Blockchain Networks:</strong> Transaction data is publicly recorded on Base L2 blockchain.</p>
                <p><strong>Trading Platforms:</strong> We interact with Hyperliquid, lighter.xyz, and other platforms for market-making.</p>
                <p><strong>Analytics:</strong> We may use web analytics services to understand user behavior.</p>
                <p><strong>Infrastructure:</strong> Cloud hosting and CDN services for platform operation.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">5. Data Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share 
                anonymized, aggregated data for research or business purposes. Personal data may be shared 
                only when required by law or to protect our legitimate business interests.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">6. Cookies and Tracking</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>We use cookies to enhance user experience and analyze website performance.</p>
                <p>Essential cookies are required for the service to function properly.</p>
                <p>Analytics cookies help us understand how users interact with our platform.</p>
                <p>You can manage cookie preferences through your browser settings.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">7. Your Rights</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p><strong>Access:</strong> You can request access to the personal data we hold about you.</p>
                <p><strong>Correction:</strong> You can request correction of inaccurate personal data.</p>
                <p><strong>Deletion:</strong> You can request deletion of your personal data, subject to legal requirements.</p>
                <p><strong>Portability:</strong> You can request a copy of your data in a structured format.</p>
                <p><strong>Objection:</strong> You can object to certain processing of your personal data.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">8. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain personal data for as long as necessary to provide our services and comply with 
                legal obligations. Transaction data may be retained longer for audit and compliance purposes. 
                You can request data deletion, subject to our legal and business requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">9. International Transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your data may be transferred to and processed in countries other than your country of residence. 
                We ensure appropriate safeguards are in place to protect your data during such transfers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">10. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our service is not intended for users under 18 years of age. We do not knowingly collect 
                personal information from children under 18. If you believe we have collected such information, 
                please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">11. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify users of material changes 
                through our website or other communication channels. Continued use of our service after changes 
                constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">12. Contact Us</h2>
              <div className="text-muted-foreground leading-relaxed space-y-2">
                <p>If you have questions about this Privacy Policy or our data practices:</p>
                <p>• Visit our documentation: <a href="https://docs.jobjabvault.xyz" className="text-primary hover:underline">docs.jobjabvault.xyz</a></p>
                <p>• Follow us on Twitter: <a href="https://x.com/jobjab_eth" className="text-primary hover:underline">@jobjab_eth</a></p>
              </div>
            </section>

            <div className="mt-8 pt-8 border-t border-border text-sm text-muted-foreground">
              <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <p className="mt-2">
                This Privacy Policy describes how JVAULT collects, uses, and protects your personal information 
                when you use our service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}