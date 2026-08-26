import { SignInForm } from '@/components/ux/sign-in-form'
import Link from 'next/link'

export default function SignInPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        <SignInForm />

        <p className="text-sm text-muted-foreground text-center mt-6">
          By clicking continue, you agree to our{' '}
          <Link className="border-b" href="/terms-of-service">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link className="border-b" href="/privacy-policy">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
