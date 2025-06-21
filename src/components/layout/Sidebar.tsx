'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Home, BarChart3 } from 'lucide-react';
import ThemeToggle from '@/components/ui/ThemeToggle';

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    {
      name: 'Home',
      href: '/',
      icon: Home,
    },
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: BarChart3,
    },
  ];

  return (
    <div className="w-64 bg-white dark:bg-gray-900 shadow-lg h-full border-r border-gray-200 dark:border-gray-700 flex flex-col">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-center">          <Image
            src="/assets/images/tuniform.png"
            alt="Tuniform Logo"
            width={120}
            height={0}
            className="object-contain"
            style={{ height: 'auto' }}
            priority
          />
        </div>
      </div>
      
      <nav className="mt-6 flex-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-6 py-3 text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 border-r-2 border-blue-700 dark:border-blue-500'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              {item.name}
            </Link>
          );
        })}
      </nav>
      
      {/* Theme Toggle */}
      <div className="p-6 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-center">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;