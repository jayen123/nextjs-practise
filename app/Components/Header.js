import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../Image/logo.png'
const Header = () => {
  return (
    <>
            <nav className='flex justify-between items-center py-5'>
                <div>
                    <Link href='/'>
                        <Image src={Logo} alt='logo' />
                    </Link>
                </div>
                <div className='flex gap-5 text-xl text-blue-500 font-semibold'>
                    <Link href='/' >Home</Link>
                    <Link href='/Story' >Story</Link>
                    <Link href='/Service' >Service</Link>
                    <Link href='/Work' >Work</Link>
                    <Link href='/Career' >Career</Link>
                    <Link href='/Contact' >Contact</Link>
                </div>
            </nav>
    </>
  )
}

export default Header