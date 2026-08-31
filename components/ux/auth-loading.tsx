import { Spinner } from '@/components/ui/spinner'

export function AuthLoading() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center">
      <Spinner />
    </main>
  )
}
