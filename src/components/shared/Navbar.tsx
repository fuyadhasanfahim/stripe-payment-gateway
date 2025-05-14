import { AxeIcon } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
    return (
        <header className="py-4 border-b-2">
            <nav className="container flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <AxeIcon />
                    <span className='text-xl font-semibold'>eStore</span>
                </div>

                <ul className="flex items-center gap-10">
                    <li className="hover:text-primary">
                        <Link href={'/products'}>Products</Link>
                    </li>
                    <li className="hover:text-primary">
                        <Link href={'/about'}>About</Link>
                    </li>
                    <li className="hover:text-primary">
                        <Link href={'/contact-us'}>Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
