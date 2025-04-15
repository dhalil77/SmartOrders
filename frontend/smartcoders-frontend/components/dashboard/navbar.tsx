'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import UserDropdown from './UserDropdown';
import { useSession } from 'next-auth/react';


const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { data: session } = useSession();

    return (
        <nav className="bg-white shadow-md fixed top-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <div className="text-xl font-bold text-gray-800">Smart Orders</div>

                {/* Desktop links */}
                <div className="hidden md:flex items-center space-x-6">
                    <Link href="/" className="text-gray-600 hover:text-blue-600">Accueil</Link>
                    <Link href="/about" className="text-gray-600 hover:text-blue-600">À propos</Link>
                    <Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>

                    {session?.user && (
                        <UserDropdown
                            name={session.user.name || 'Utilisateur'}
                            email={session.user.email || ''}
                            image={session.user.image || undefined}
                        />
                    )}
                </div>

                {/* Mobile toggle */}
                <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-gray-700"
                >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

        {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2">
                    <Link href="/" className="block text-gray-600 hover:text-blue-600">Accueil</Link>
                    <Link href="/about" className="block text-gray-600 hover:text-blue-600">À propos</Link>
                    <Link href="/contact" className="block text-gray-600 hover:text-blue-600">Contact</Link>
                    {session?.user && (
                        <UserDropdown
                            name={session.user.name || 'Utilisateur'}
                            email={session.user.email || ''}
                            image={session.user.image || undefined}
                        />
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
