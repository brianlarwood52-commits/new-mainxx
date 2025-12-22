'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark'

interface ThemeContextType {
  theme: Theme
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Always apply dark mode
    const root = document.documentElement
    const body = document.body
    
    root.classList.add('dark')
    root.classList.remove('light')
    body.classList.add('dark')
    body.classList.remove('light')
  }, [])

  return (
    <ThemeContext.Provider value={{ theme: 'dark' }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
