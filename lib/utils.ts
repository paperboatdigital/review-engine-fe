import { toast } from '@/components/ui/toast'
import { AxiosError } from 'axios'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function handleApiError(error: unknown) {
  if (error instanceof AxiosError) {
    toast.add({
      type: 'error',
      description: error.response?.data.error,
    })
  } else if (error instanceof Error) {
    toast.add({
      type: 'error',
      description: error.message,
    })
  } else {
    toast.add({
      type: 'error',
      description: 'An unknown error occurred.',
    })
  }
}
