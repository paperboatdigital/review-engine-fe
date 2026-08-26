'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'

const forgotPasswordFormSchema = z.object({
  email: z.email('Please enter a valid email address.'),
})

export function ForgotPasswordForm({
  className,
  ...props
}: React.ComponentProps<'div'> & { size?: 'default' | 'sm' }) {
  const forgotPasswordForm = useForm<z.infer<typeof forgotPasswordFormSchema>>({
    resolver: zodResolver(forgotPasswordFormSchema),
    defaultValues: {
      email: '',
    },
  })

  function onSubmit(data: z.infer<typeof forgotPasswordFormSchema>) {
    // Do something with the form values.
    console.log(data)
  }

  return (
    <Card className={cn('overflow-hidden p-0', className)} {...props}>
      <CardContent className="p-0">
        <form
          id="forgot-password-form"
          className="p-6 md:p-8"
          onSubmit={forgotPasswordForm.handleSubmit(onSubmit)}
        >
          <FieldGroup>
            <div className="flex flex-col items-center gap-2 text-center">
              <h1 className="text-2xl font-bold">Forgot your password?</h1>
              <p className="text-balance text-muted-foreground">
                Enter your email to receive a password reset link
              </p>
            </div>

            <Controller
              name="email"
              control={forgotPasswordForm.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="forgot-password-email">Email</FieldLabel>
                  <Input
                    {...field}
                    type="email"
                    id="forgot-password-email"
                    placeholder="m@example.com"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Field>
              <Button type="submit">Send Reset Link</Button>
            </Field>

            <FieldDescription className="text-center">
              Remember your password? <Link href="/sign-in">Sign in</Link>
            </FieldDescription>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
