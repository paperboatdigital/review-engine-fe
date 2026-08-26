import { EmailVerificationFailedCard } from '@/components/ux/email-verification-failed-card'
import { EmailVerificationSuccessCard } from '@/components/ux/email-verification-success-card'

type VerifyEmailPageProps = {
  searchParams: Promise<{ status?: string }>
}

export default async function VerifyEmailPage({
  searchParams,
}: VerifyEmailPageProps) {
  const { status } = await searchParams
  const isFailed = status === 'failed'

  return (
    <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-md">
        {isFailed ? (
          <EmailVerificationFailedCard />
        ) : (
          <EmailVerificationSuccessCard />
        )}
      </div>
    </div>
  )
}
