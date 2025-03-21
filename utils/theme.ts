// Theme utility functions
export const getSystemTheme = (): 'dark' | 'light' => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  return 'light' // Default to light if not in browser
}

export const applyTheme = (theme: 'dark' | 'light'): void => {
  if (typeof window !== 'undefined') {
    const root = window.document.documentElement
    root.classList.remove('dark', 'light')
    root.classList.add(theme)
  }
}
