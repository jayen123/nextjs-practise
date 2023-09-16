import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../Image/logo.png'
const Header = () => {
  return (
    <>
        <div className='container'>
            <div className='flex justify-between items-center py-5'>
                <div>
                    <Link href='/'>
                        <Image src={Logo} alt='logo' />
                    </Link>
                </div>
                <div className='flex gap-5 text-xl text-blue-500 font-semibold'>
                    <Link href='/' >Home</Link>
                    <Link href='/About' >About</Link>
                    <Link href='/Service' >Service</Link>
                    <Link href='/Course' >Course</Link>
                    <Link href='/Gallary' >Gallary</Link>
                    <Link href='/Contact' >Contact</Link>
                </div>
                <div>
                    <button className='px-5 py-2 bg-blue-600 text-white rounded-md font-semibold'>Sign Up</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header