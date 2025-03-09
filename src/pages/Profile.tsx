
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { User, Package, Heart, LogOut, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const Profile = () => {
  // Mock data - would normally come from auth state or API
  const isLoggedIn = false;
  
  const menuItems = [
    { icon: <Package size={20} />, label: 'Orders', path: '/orders' },
    { icon: <Heart size={20} />, label: 'Favorites', path: '/favorites' },
    { icon: <Settings size={20} />, label: 'Settings', path: '/settings' },
    { icon: <LogOut size={20} />, label: 'Logout', path: '/logout' },
  ];
  
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 pb-16 flex items-center justify-center">
          <div className="max-w-md w-full mx-auto p-6 rounded-lg bg-white shadow-sm border">
            <div className="text-center mb-6">
              <User size={64} className="mx-auto mb-4 text-gray-400" />
              <h1 className="text-2xl font-bold mb-2">Sign In to Your Account</h1>
              <p className="text-gray-500">Access your profile, orders, and favorites</p>
            </div>
            
            <div className="space-y-4">
              <button className="w-full py-3 border border-gray-300 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                <span>Sign in with Google</span>
              </button>
              
              <button className="w-full py-3 border border-gray-300 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                <span>Sign in with Email</span>
              </button>
              
              <div className="text-center text-sm text-gray-500">
                <p>Don't have an account? <a href="#" className="text-primary hover:underline">Sign Up</a></p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                <User size={32} />
              </div>
              <div>
                <h1 className="text-2xl font-bold">User Name</h1>
                <p className="text-gray-500">user@example.com</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-1">
                <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                  <ul>
                    {menuItems.map((item, index) => (
                      <li key={index}>
                        <Link
                          to={item.path}
                          className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors border-b last:border-b-0"
                        >
                          {item.icon}
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="col-span-1 md:col-span-2">
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
                  <div className="text-center py-8 text-gray-500">
                    <Package size={48} className="mx-auto mb-4 text-gray-300" />
                    <p>You haven't placed any orders yet</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
