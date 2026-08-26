import { IconCircleCheckFilled } from '@tabler/icons-react'
import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export function EmailVerificationSuccessCard({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <Card className={cn('overflow-hidden p-0', className)} {...props}>
      <CardContent className="flex flex-col items-center gap-6 p-6 text-center md:p-8">
        <IconCircleCheckFilled
          className="size-16 text-primary"
          aria-hidden="true"
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Email verified</h1>
          <p className="text-balance text-muted-foreground">
            Your email has been verified successfully. You can now sign in to
            your Review Engine account.
          </p>
        </div>
        <Link
          href="/sign-in"
          className={cn(buttonVariants(), 'w-full')}
        >
          Continue to sign in
        </Link>
      </CardContent>
    </Card>
  )
}
