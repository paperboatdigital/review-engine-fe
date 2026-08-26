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

const resetPasswordFormSchema = z
  .object({
    password: z.string().min(8, 'Password must be at least 8 characters.'),
    confirmPassword: z.string().min(1, 'Please confirm your password.'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match.',
  })

export function ResetPasswordForm({
  className,
  ...props
}: React.ComponentProps<'div'> & { size?: 'default' | 'sm' }) {
  const resetPasswordForm = useForm<
    z.infer<typeof resetPasswordFormSchema>
  >({
    resolver: zodResolver(resetPasswordFormSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  })

  function onSubmit(data: z.infer<typeof resetPasswordFormSchema>) {
    // Do something with the form values.
    console.log(data)
  }

  return (
    <Card className={cn('overflow-hidden p-0', className)} {...props}>
      <CardContent className="p-0">
        <form
          id="reset-password-form"
          className="p-6 md:p-8"
          onSubmit={resetPasswordForm.handleSubmit(onSubmit)}
        >
          <FieldGroup>
            <div className="flex flex-col items-center gap-2 text-center">
              <h1 className="text-2xl font-bold">Reset your password</h1>
              <p className="text-balance text-muted-foreground">
                Enter a new password for your Review Engine account
              </p>
            </div>

            <Controller
              name="password"
              control={resetPasswordForm.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="reset-password-password">
                    Password
                  </FieldLabel>
                  <Input
                    {...field}
                    type="password"
                    id="reset-password-password"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="confirmPassword"
              control={resetPasswordForm.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="reset-password-confirm-password">
                    Confirm Password
                  </FieldLabel>
                  <Input
                    {...field}
                    type="password"
                    id="reset-password-confirm-password"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Field>
              <Button type="submit">Reset Password</Button>
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
