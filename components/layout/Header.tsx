'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Package, Phone, Menu, X } from 'lucide-react';
import Clarity from '@microsoft/clarity';
// import { useSession } from "next-auth/react";
// import { useRouter } from 'next/navigation';
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
} from "@/components/ui/dropdown-menu";

// Header component with responsive sidebar for mobile view
export function Header() {
  // const { data: session } = useSession();
  // const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header className="fixed top-0 left-0 flex items-center justify-between p-4 bg-white shadow w-full z-50">
      {/* Logo and brand name */}
      <Link className="flex items-center" href="/">
        <Package className="h-6 w-6 text-blue-600" />
        <span className="ml-2 text-xl font-bold">
          <span className="font-extrabold">PACK</span>
          <span className="text-blue-600">EEZE</span>
        </span>
      </Link>

      {/* Hamburger icon for mobile */}
      <div className="sm:hidden">
        <button onClick={toggleSidebar} className="p-2 rounded-full">
          {sidebarOpen ? <X className="h-6 w-6 text-blue-600" /> : <Menu className="h-6 w-6 text-blue-600" />}
        </button>
      </div>

      {/* Full navigation on desktop */}
      <nav className="hidden sm:flex items-center gap-6 ml-auto">
        <DropdownMenu>
          <DropdownMenuTrigger className="text-sm font-medium text-[#64748B] hover:text-blue-600">
            <Link href="/pages/products">Products</Link>
          </DropdownMenuTrigger>
        </DropdownMenu>

        <DropdownMenu> 
          <DropdownMenuTrigger className="text-sm font-medium text-[#64748B] hover:text-blue-600">
            <Link href="/pages/about">About Us</Link>
          </DropdownMenuTrigger> 
        </DropdownMenu>

        <Button 
          onClick={() => window.open('https://calendly.com/meatdaraz/30min', '_blank')} 
          className="bg-blue-600 text-white hover:bg-blue-700 flex items-center rounded-lg py-2 px-4">
          <Phone className="h-4 w-4 mr-2" />
          <span>Book A Video Consultation</span>
        </Button>
      </nav>

      {/* Sidebar for mobile view */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 sm:hidden" onClick={toggleSidebar}>
          <div className="fixed inset-y-0 left-0 w-3/4 bg-white p-6 transition-all transform duration-300 ease-in-out">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <Package className="h-6 w-6 text-blue-600" />
                <span className="ml-2 text-xl font-bold">PACKEEZE</span>
              </div>
              <button onClick={toggleSidebar} className="p-2 rounded-full">
                <X className="h-6 w-6 text-blue-600" />
              </button>
            </div>

            <nav className="flex flex-col space-y-4">
              <DropdownMenu>
                <DropdownMenuTrigger className="text-lg font-medium text-[#64748B] hover:text-blue-600">
                  <Link href="/pages/products">Products</Link>
                </DropdownMenuTrigger>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="text-lg font-medium text-[#64748B] hover:text-blue-600">
                  <Link href="/pages/about">About Us</Link>
                </DropdownMenuTrigger>
              </DropdownMenu>

              {/* Button to book a consultation, opens Calendly in a new tab */}
              <div className="flex justify-center w-full mt-6">
                <Button 
                  onClick={() => window.open('https://calendly.com/meatdaraz/30min', '_blank')} 
                  className="bg-blue-600 text-white hover:bg-blue-700 w-full py-3 rounded-lg">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>Book A Video Consultation</span>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
