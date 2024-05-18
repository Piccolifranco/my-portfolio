'use client'
import React from 'react'
import { useTheme } from 'next-themes'
import { MdLightMode, MdDarkMode } from 'react-icons/md'

export default function DarkModeSwitch() {
    const {theme, setTheme, systemTheme}= useTheme()
    const currentTheme = theme === 'system' ? systemTheme : theme
    console.log(currentTheme)
  return (
    <div>
        {
            currentTheme === 'dark' ? (
            <MdLightMode onClick={() => setTheme('light')}
             className='text-xl cursor-pointer hover:text-indigo-500'/>
        ) : (
        <MdDarkMode onClick={() => setTheme('dark')} 
        className='text-xl cursor-pointer hover:text-indigo-500'/>
    )
        }
    </div>
  )
}
