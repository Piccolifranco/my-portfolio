import Link from 'next/link'
import React from 'react'

export default function NavbarItem({title, address, Icon, show=true}) {
  return (
    show ? (<Link  className='flex gap-5 justify-center hover:text-indigo-500 hover:underline underline-offset-8 decoration-4 dark:decoration-white decoration-black transition duration-300' href={address}>
   <Icon className='text-2xl sm:hidden'/>
   <p className=' text-xl font-semibold uppercase'>{title}</p>
   </Link>) : null
  )
}
