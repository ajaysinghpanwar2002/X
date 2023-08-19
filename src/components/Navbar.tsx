'use client'

import Link from 'next/link';
import { ModeToggle } from './ModeToggle';

import { useAppSelector } from "@/redux/store";
import { logOut } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store";
import { useRouter } from 'next/navigation';

import { Button } from "@/components/ui/button"

function Navbar() {
    const dispatch = useDispatch<AppDispatch>();
    const handleLogout = () => {
        dispatch(logOut());
        router.push('/login');
    }
    const router = useRouter(); 
    const isAuth = useAppSelector((state) => state.authReducer.value.isAuth);
    return (
        <div className='flex justify-between'>
            <div className=''>
                {
                    isAuth ? (
                        <div className='flex px-10 py-2 '>
                            <Button variant="outline" onClick={handleLogout} className='ml-4'>logout</Button>
                        </div>
                    ) : (
                        <div className='flex px-10 py-2'>
                            <Button variant="outline">
                                <Link href="/login">login</Link>
                            </Button>
                            <Button variant="outline"  className='ml-4'>
                                <Link href="/signup">signup</Link>
                            </Button>
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