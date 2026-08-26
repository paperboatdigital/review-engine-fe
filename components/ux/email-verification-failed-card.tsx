import { IconCircleXFilled } from '@tabler/icons-react'
import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export function EmailVerificationFailedCard({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <Card className={cn('overflow-hidden p-0', className)} {...props}>
      <CardContent className="flex flex-col items-center gap-6 p-6 text-center md:p-8">
        <IconCircleXFilled
          className="size-16 text-destructive"
          aria-hidden="true"
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Email verification failed</h1>
          <p className="text-balance text-muted-foreground">
            This verification link is invalid or has expired. Please try again
            or contact support if you need help.
          </p>
        </div>
        <Link
          href="/sign-in"
          className={cn(buttonVariants(), 'w-full')}
        >
          Back to sign in
        </Link>
      </CardContent>
    </Card>
  )
}
