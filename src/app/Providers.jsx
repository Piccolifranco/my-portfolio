'use client'
import { ThemeProvider } from 'next-themes'

import React from 'react'

export default function Providers({children}) {
  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
    <div className='text-gray-800 dark:text-gray-200 bg-indigo-200 dark:bg-[#080F18] min-h-screen select-none transition-colors duration-300'>
        {children}
    </div>
    </ThemeProvider>
  )
}
