import { useState } from 'react';
import Image from 'next/image';
import { signOut } from 'next-auth/react';
import { ChevronDown } from 'lucide-react';

const UserDropdown: React.FC<{ name: string; email: string; image?: string }> = ({ name, email, image }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative">
        <button
            onClick={() => setOpen(!open)}
            className="flex items-center space-x-2 hover:text-blue-600 focus:outline-none"
        >
            {image ? (
            <Image src={image} alt="Profil" width={32} height={32} className="rounded-full" />
            ) : (
            <div className="h-8 w-8 bg-indigo-400 text-white rounded-full flex items-center justify-center font-semibold">
                {name[0] ?? 'U'}
            </div>
            )}
            <span className="text-sm font-medium hidden md:block">{name}</span>
            <ChevronDown size={18} />
        </button>

        {open && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-50">
            <div className="p-3">
                <p className="text-sm font-semibold text-gray-700">{name}</p>
                <p className="text-xs text-gray-500">{email}</p>
            </div>
            <hr />
            <button
                onClick={() => signOut({ callbackUrl: '/' })}
                className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50"
            >
                Se déconnecter
            </button>
            </div>
        )}
        </div>
    );
};

export default UserDropdown;
