import type { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Terms of Service | Paper Boat Digital',
  description: 'The terms that apply when you use Paper Boat Digital.',
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-white via-zinc-50 to-zinc-100 dark:from-black dark:via-zinc-900 dark:to-zinc-950">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mb-8 space-y-4">
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: 'link', size: 'sm' }),
              'px-0',
            )}
          >
            Back to home
          </Link>
          <Badge variant="outline" className="rounded-full px-3 py-1">
            Legal
          </Badge>
          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Terms of Service
            </h1>
            <p className="max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
              These terms govern your use of the Paper Boat Digital platform and
              related services.
            </p>
          </div>
          <p className="text-xs text-muted-foreground">
            Last updated: August 22, 2026
          </p>
        </div>

        <Separator className="my-8" />

        <div className="space-y-6">
          <Card>
            <CardContent className="space-y-4 p-5 sm:p-6">
              <h2 className="text-lg font-semibold sm:text-xl">
                Acceptance of terms
              </h2>
              <div className="space-y-3 text-sm leading-6 text-muted-foreground sm:text-base">
                <p>
                  By accessing or using Paper Boat Digital, you agree to these
                  terms and any additional policies referenced here.
                </p>
                <p>If you do not agree, you may not use the service.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-4 p-5 sm:p-6">
              <h2 className="text-lg font-semibold sm:text-xl">The service</h2>
              <div className="space-y-3 text-sm leading-6 text-muted-foreground sm:text-base">
                <p>
                  Paper Boat Digital helps businesses automate review requests,
                  reminders, and related messaging through connected channels
                  such as WhatsApp and Google Business Profile.
                </p>
                <p>
                  We may modify, suspend, or discontinue features as needed to
                  maintain and improve the service.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-4 p-5 sm:p-6">
              <h2 className="text-lg font-semibold sm:text-xl">
                Your responsibilities
              </h2>
              <div className="space-y-3 text-sm leading-6 text-muted-foreground sm:text-base">
                <p>
                  You are responsible for the content you upload, the contacts
                  you message, and your compliance with applicable laws,
                  platform rules, and consent requirements.
                </p>
              </div>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground sm:text-base">
                <li>Only upload data you are allowed to use</li>
                <li>Obtain required permissions before sending messages</li>
                <li>Keep account credentials secure</li>
                <li>Do not misuse the platform for spam, fraud, or abuse</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-4 p-5 sm:p-6">
              <h2 className="text-lg font-semibold sm:text-xl">
                Billing and subscriptions
              </h2>
              <div className="space-y-3 text-sm leading-6 text-muted-foreground sm:text-base">
                <p>
                  If you purchase a paid plan, you agree to pay the fees shown
                  at checkout and any applicable taxes.
                </p>
                <p>
                  Subscription fees are billed in advance unless stated
                  otherwise, and we may change pricing for future billing
                  periods with notice.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-4 p-5 sm:p-6">
              <h2 className="text-lg font-semibold sm:text-xl">
                Intellectual property
              </h2>
              <div className="space-y-3 text-sm leading-6 text-muted-foreground sm:text-base">
                <p>
                  The service, branding, and related materials remain the
                  property of Paper Boat Digital or its licensors.
                </p>
                <p>
                  You retain ownership of your own content and data, subject to
                  the rights you grant us to operate the service.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-4 p-5 sm:p-6">
              <h2 className="text-lg font-semibold sm:text-xl">Termination</h2>
              <div className="space-y-3 text-sm leading-6 text-muted-foreground sm:text-base">
                <p>
                  We may suspend or terminate access if you violate these terms,
                  create risk for the platform, or as required by law.
                </p>
                <p>You may stop using the service at any time.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-4 p-5 sm:p-6">
              <h2 className="text-lg font-semibold sm:text-xl">Contact</h2>
              <p className="text-sm leading-6 text-muted-foreground sm:text-base">
                Questions about these terms can be sent to
                contact@paperboatdigital.com.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
