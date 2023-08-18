'use client'

import Link from 'next/link';
import { ModeToggle } from './ModeToggle';
function Navbar() {
    const handleLogout = () => {
        localStorage.removeItem('userId');
    }
    return (
        <div className='flex justify-between'>
            <div className='flex'>
                {
                    localStorage.getItem('userId') ? (
                        <div>
                            <Link href="/room">room</Link>
                            <button onClick={handleLogout}>logout</button>
                        </div>
                    ) : (
                        <div>
                            <Link href="/login">login</Link>
                            <Link href="/signup">signup</Link>
                        </div>
                    )
                }
            </div>
            <div className='p-2'>
                <ModeToggle />
            </div>
        </div>
    )
}

export default Navbar 