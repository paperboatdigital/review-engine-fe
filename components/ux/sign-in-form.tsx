'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { useSignInMutationOptions } from '@/hooks/useSignInMutation'
import { cn, handleApiError } from '@/lib/utils'
import { signInPayloadSchema, SignInPayloadSchemaType } from '@/schemas/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  IconBrandAppleFilled,
  IconBrandGoogleFilled,
  IconBrandMeta,
} from '@tabler/icons-react'
import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import { Controller, useForm } from 'react-hook-form'

export function SignInForm({
  className,
  ...props
}: React.ComponentProps<'div'> & { size?: 'default' | 'sm' }) {
  const { mutateAsync, isPending } = useMutation(useSignInMutationOptions())

  const signInForm = useForm<SignInPayloadSchemaType>({
    resolver: zodResolver(signInPayloadSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    disabled: isPending,
  })

  async function onSubmit(data: SignInPayloadSchemaType) {
    try {
      await mutateAsync(data)
      signInForm.reset()
    } catch (error) {
      handleApiError(error)
    }
  }

  return (
    <Card className={cn('overflow-hidden p-0', className)} {...props}>
      <CardContent className="grid p-0 md:grid-cols-2">
        <form
          id="sign-in-form"
          className="p-6 md:p-8"
          onSubmit={signInForm.handleSubmit(onSubmit)}
        >
          <FieldGroup>
            <div className="flex flex-col items-center gap-2 text-center">
              <h1 className="text-2xl font-bold">Welcome back</h1>
              <p className="text-balance text-muted-foreground">
                Login to your Review Engine account
              </p>
            </div>

            <Controller
              name="email"
              control={signInForm.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="sign-in-email">Email</FieldLabel>
                  <Input
                    {...field}
                    type="email"
                    id="sign-in-email"
                    placeholder="m@example.com"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="password"
              control={signInForm.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <div className="flex items-center">
                    <FieldLabel htmlFor="sign-in-password">Password</FieldLabel>
                    <Link
                      href="/forgot-password"
                      className="ml-auto text-sm underline-offset-2 hover:underline"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                  <Input
                    {...field}
                    type="password"
                    id="sign-in-password"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Field>
              <Button type="submit" disabled={isPending}>
                Sign In
              </Button>
            </Field>

            <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
              Or continue with
            </FieldSeparator>

            <Field className="grid grid-cols-3 gap-4">
              <Button variant="outline" type="button" disabled>
                <IconBrandAppleFilled className="size-5" />
                <span className="sr-only">Login with Apple</span>
              </Button>
              <Button variant="outline" type="button" disabled>
                <IconBrandGoogleFilled className="size-5" />
                <span className="sr-only">Login with Google</span>
              </Button>
              <Button variant="outline" type="button" disabled>
                <IconBrandMeta className="size-5" />
                <span className="sr-only">Login with Meta</span>
              </Button>
            </Field>

            <FieldDescription className="text-center">
              Don&apos;t have an account? <Link href="/sign-up">Sign up</Link>
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
