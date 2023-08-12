import Link from 'next/link';
import { ModeToggle } from '../client/ModeToggle';

function Navbar() {
    return (
        <div className='flex justify-between'>
            <div className='flex'>
                <Link href="/signup">signup</Link>
                <Link href="/login">login</Link>
                <Link href="/room">room</Link>
            </div>
            <div className='p-2'>
                <ModeToggle />
            </div>
        </div>
    )
}

export default Navbar