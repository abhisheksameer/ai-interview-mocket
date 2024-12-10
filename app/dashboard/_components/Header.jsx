"use client";

import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'

function Header() {

    const path=usePathname();


  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-sm ' >
        <Image src="/logo.svg" width={160} height={100} alt="logo" />
        <ul className='flex gap-6'>
            <ul className='hover:text-primary hover:font-bold transition-all cursor-pointer'>Dashboard</ul>
            <ul className='hover:text-primary hover:font-bold transition-all cursor-pointer'>Questions</ul>
            <ul className='hover:text-primary hover:font-bold transition-all cursor-pointer'>Upgarde</ul>
            <ul className='hover:text-primary hover:font-bold transition-all cursor-pointer'>How it wordks ? </ul>
        </ul>
        <UserButton/>

    </div>
  )
}

export default Header