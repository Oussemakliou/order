import Image from "next/image";
import Link from "next/link";
import Sidebar from "@/components/layout/Sidebar";
import { BarChart3, Plus, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Welcome to Tuniform
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Order Management System
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 border border-gray-200 dark:border-gray-700 mb-8">
              <Image
                src="/assets/images/tuniform_cover.png"
                alt="Tuniform Logo"
                width={200}
                height={0}
                className="mx-auto mb-6"
                style={{ height: 'auto' }}
                priority
              />
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                Manage your orders and customers efficiently from the dashboard
              </p>
              
              <div className="flex justify-center">
                <Link
                  href="/dashboard"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors font-medium"
                >
                  <BarChart3 className="w-5 h-5" />
                  Access Dashboard
                </Link>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Dashboard
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  View all your orders and track activity
                </p>
                <Link
                  href="/dashboard"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                >
                  View Dashboard →
                </Link>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-lg mx-auto mb-4">
                  <Plus className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  New Order
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Create a new customer order quickly and efficiently
                </p>
                <Link
                  href="/dashboard"
                  className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium"
                >
                  Create Order →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
