'use client'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldError,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import {
  IconBrandAppleFilled,
  IconBrandGoogleFilled,
  IconBrandMeta,
} from '@tabler/icons-react'
import Link from 'next/link'

import * as z from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const signUpFormSchema = z
  .object({
    email: z.email('Please enter a valid email address.'),
    password: z.string().min(8, 'Password must be at least 8 characters.'),
    confirmPassword: z.string().min(1, 'Please confirm your password.'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match.',
  })

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<'div'> & { size?: 'default' | 'sm' }) {
  const signUpForm = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  function onSubmit(data: z.infer<typeof signUpFormSchema>) {
    // Do something with the form values.
    console.log(data)
  }

  return (
    <Card className={cn('overflow-hidden p-0', className)} {...props}>
      <CardContent className="grid p-0 md:grid-cols-2">
        <form
          className="p-6 md:p-8"
          onSubmit={signUpForm.handleSubmit(onSubmit)}
        >
          <FieldGroup>
            <div className="flex flex-col items-center gap-2 text-center">
              <h1 className="text-2xl font-bold">Create your account</h1>
              <p className="text-sm text-balance text-muted-foreground">
                Enter your info below to create Review Engine account
              </p>
            </div>

            <Controller
              name="email"
              control={signUpForm.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="sign-up-email">Email</FieldLabel>
                  <Input
                    {...field}
                    type="email"
                    id="sign-up-email"
                    placeholder="m@example.com"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid ? (
                    <FieldError errors={[fieldState.error]} />
                  ) : (
                    <FieldDescription>
                      We&apos;ll use this to contact you.
                    </FieldDescription>
                  )}
                </Field>
              )}
            />

            <Controller
              name="password"
              control={signUpForm.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="sign-up-password">Password</FieldLabel>
                  <Input
                    {...field}
                    type="password"
                    id="sign-up-password"
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
              control={signUpForm.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="sign-up-confirm-password">
                    Confirm Password
                  </FieldLabel>
                  <Input
                    {...field}
                    type="password"
                    id="sign-up-confirm-password"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Field>
              <Button type="submit">Create Account</Button>
            </Field>

            <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
              Or continue with
            </FieldSeparator>

            <Field className="grid grid-cols-3 gap-4">
              <Button variant="outline" type="button" disabled>
                <IconBrandAppleFilled className="size-5" />
                <span className="sr-only">Sign up with Apple</span>
              </Button>
              <Button variant="outline" type="button" disabled>
                <IconBrandGoogleFilled className="size-5" />
                <span className="sr-only">Sign up with Google</span>
              </Button>
              <Button variant="outline" type="button" disabled>
                <IconBrandMeta className="size-5" />
                <span className="sr-only">Sign up with Meta</span>
              </Button>
            </Field>

            <FieldDescription className="text-center">
              Already have an account? <Link href="/sign-in">Sign in</Link>
            </FieldDescription>
          </FieldGroup>
        </form>

        <div className="relative hidden bg-muted md:block">
          <img
            alt="Image"
            src="/placeholder.svg"
            className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </CardContent>
    </Card>
  )
}
