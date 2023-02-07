import { PlusIcon } from '@/components/elements/Icon'
import Navbar from '@/components/elements/Navbar'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='header text-red-400 w-full container'>
            Header

            <div className="div text">
                <PlusIcon />
            </div>

            <Link href="/task">Task</Link>
            <Link href="/">Home</Link>
            <Navbar />
        </header>
    )
}

export default Header