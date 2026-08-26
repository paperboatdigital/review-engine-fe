import type { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Privacy Policy | Paper Boat Digital',
  description:
    'How Paper Boat Digital collects, uses, and protects personal information.',
}

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
              This policy explains how Paper Boat Digital handles information
              when you use our WhatsApp and Google review automation platform.
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
                Information we collect
              </h2>
              <div className="space-y-3 text-sm leading-6 text-muted-foreground sm:text-base">
                <p>
                  We collect information you provide directly when you create an
                  account, request a demo, upload contacts, or configure
                  messaging templates.
                </p>
                <p>
                  This may include your name, business details, phone numbers,
                  email address, message content, and account settings.
                </p>
              </div>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground sm:text-base">
                <li>Account and profile details</li>
                <li>Customer contact data you upload</li>
                <li>Usage, device, and log information</li>
                <li>Support requests and communications</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-4 p-5 sm:p-6">
              <h2 className="text-lg font-semibold sm:text-xl">
                How we use information
              </h2>
              <div className="space-y-3 text-sm leading-6 text-muted-foreground sm:text-base">
                <p>
                  We use information to provide the service, send notifications,
                  improve product performance, and support your account.
                </p>
                <p>
                  We also use data to maintain security, prevent abuse, and
                  comply with legal obligations.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-4 p-5 sm:p-6">
              <h2 className="text-lg font-semibold sm:text-xl">
                Sharing and disclosures
              </h2>
              <div className="space-y-3 text-sm leading-6 text-muted-foreground sm:text-base">
                <p>
                  We do not sell personal information. We may share data with
                  service providers that help us operate the platform, such as
                  hosting, analytics, and messaging infrastructure.
                </p>
                <p>
                  We may also disclose information if required by law or to
                  protect our rights, users, or systems.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-4 p-5 sm:p-6">
              <h2 className="text-lg font-semibold sm:text-xl">
                Data retention
              </h2>
              <div className="space-y-3 text-sm leading-6 text-muted-foreground sm:text-base">
                <p>
                  We keep personal information only as long as needed to provide
                  the service, resolve disputes, comply with legal requirements,
                  and support legitimate business needs.
                </p>
                <p>
                  When data is no longer required, we delete or anonymize it
                  where possible.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-4 p-5 sm:p-6">
              <h2 className="text-lg font-semibold sm:text-xl">Your choices</h2>
              <div className="space-y-3 text-sm leading-6 text-muted-foreground sm:text-base">
                <p>
                  You can request access, correction, or deletion of your
                  personal data, and you can opt out of non-essential
                  communications at any time.
                </p>
                <p>
                  If you manage customer data in the platform, you are
                  responsible for making sure you have the right to use and
                  message those contacts.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-4 p-5 sm:p-6">
              <h2 className="text-lg font-semibold sm:text-xl">Contact</h2>
              <p className="text-sm leading-6 text-muted-foreground sm:text-base">
                If you have questions about this policy, contact us at
                contact@paperboatdigital.com.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
