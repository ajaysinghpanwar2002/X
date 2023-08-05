import Link from 'next/link';

function Navbar() {
    return (
        <div>
            <Link href="/signup">signup</Link>
            <Link href="/login">login</Link>
            <Link href="/room">room</Link>
        </div>
    )
}

export default Navbar