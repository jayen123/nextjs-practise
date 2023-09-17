import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Header = () => {
  return (
    <>
            <div className='absolute w-full py-4'>
                <nav className='flex items-center justify-between px-4 sm:px-6 lg:px-8 '>
                  <div>
                      <Link href='/'>
                      <Image 
                        src="/next.svg"
                        alt='vercel-logo'
                        width={100}
                        height={24}
                      />
                      </Link>
                  </div>
                  <div>
                      <ul className='flex gap-5'>
                      <li className='nav_link'><Link href='/' >Home</Link></li>
                      <li className='nav_link'><Link href='/Story' >Story</Link></li>
                      <li className='nav_link'><Link href='/Service' >Service</Link></li>
                      <li className='nav_link'><Link href='/Work' >Work</Link></li>
                      <li className='nav_link'><Link href='/Career' >Career</Link></li>
                      <li className='nav_link'><Link href='/Contact' >Contact</Link></li>
                      </ul>
                      
                  </div>
                </nav>
            </div>
    </>
  )
}

export default Header