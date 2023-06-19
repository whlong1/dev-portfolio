export const handleErrorMsg = (error: unknown, stateSetter: (error: string) => void) => {
  if (error instanceof Error && typeof error?.message === 'string') {
    stateSetter(error.message)
  }
}