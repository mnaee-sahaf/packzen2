'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Package, Phone, Menu, X } from 'lucide-react';
import { signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuItem,
  DropdownMenuPortal
} from "@/components/ui/dropdown-menu";

// Header component with responsive sidebar for mobile view
export function Header() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleAuthAction = async () => {
    if (session) {
      await signOut({ redirect: true, callbackUrl: '/' });
    } else {
      router.push('/auth/signin');
    }
  };

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
        <button onClick={toggleSidebar}>
          {sidebarOpen ? <X className="h-6 w-6 text-blue-600" /> : <Menu className="h-6 w-6 text-blue-600" />}
        </button>
      </div>

      {/* Full navigation on desktop */}
      <nav className="hidden sm:flex items-center gap-4 ml-auto">
        <DropdownMenu>
          <DropdownMenuTrigger className="text-sm font-medium text-[#64748B] hover:text-blue-600"><Link href="/pages/products">Products</Link></DropdownMenuTrigger>
          {/* <DropdownMenuPortal>
            <DropdownMenuContent className="w-48">
              <DropdownMenuItem asChild><Link href="/Boxes-by-industry/Candle-Boxes">Candle Boxes</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link href="/Boxes-by-industry/Food-Boxes">Food Boxes</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link href="/Boxes-by-industry/Pizza-Boxes">Pizza Boxes</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenuPortal> */}
        </DropdownMenu>

        <DropdownMenu> 
          <DropdownMenuTrigger className="text-sm font-medium text-[#64748B] hover:text-blue-600"><Link href="/about">About Us</Link></DropdownMenuTrigger> 
          {/* <DropdownMenuPortal>
            <DropdownMenuContent className="w-48">
              <DropdownMenuItem asChild><Link href="/Boxes-by-style/Tuck-Boxes">Tuck Boxes</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link href="/Boxes-by-style/Display-Boxes">Display Boxes</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link href="/Boxes-by-style/Globe-Boxes">Globe Boxes</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenuPortal> */}
        </DropdownMenu>
{/* 
        <DropdownMenu>
          <DropdownMenuTrigger className="text-sm font-medium text-[#64748B] hover:text-blue-600">Boxes by Material</DropdownMenuTrigger> */}
          {/* <DropdownMenuPortal>
            <DropdownMenuContent className="w-48">
              <DropdownMenuItem asChild><Link href="/Boxes-by-material/Corrugated">Corrugated</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link href="/Boxes-by-material/Rigid">Rigid</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link href="/Boxes-by-material/Cardboard">Cardboard</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenuPortal> */}
        {/* </DropdownMenu> */}

        <Button 
                onClick={() => window.open('https://calendly.com/meatdaraz/30min', '_blank')} 
                className="bg-blue-600 text-white hover:bg-blue-700">
                Book A Video Consultation
              </Button>
      </nav>

      {/* Sidebar for mobile view */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 sm:hidden" onClick={toggleSidebar}>
          <div className="fixed inset-y-0 left-0 w-3/4 bg-white p-6">
            <nav className="flex flex-col space-y-4">
              <DropdownMenu>
                <DropdownMenuTrigger className="text-sm font-medium text-[#64748B] hover:text-blue-600"><Link href="/pages/products">Products</Link></DropdownMenuTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuContent className="w-full">
                    {/* <DropdownMenuItem asChild><Link href="/products/product1">Product 1</Link></DropdownMenuItem>
                    <DropdownMenuItem asChild><Link href="/products/product2">Product 2</Link></DropdownMenuItem>
                    <DropdownMenuItem asChild><Link href="/products/product3">Product 3</Link></DropdownMenuItem> */}
                  </DropdownMenuContent>
                </DropdownMenuPortal>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="text-sm font-medium text-[#64748B] hover:text-blue-600"><Link href="/about">About Us</Link></DropdownMenuTrigger>
                {/* <DropdownMenuPortal>
                  <DropdownMenuContent className="w-full">
                    <DropdownMenuItem asChild><Link href="/resources/blog">Blog</Link></DropdownMenuItem>
                    <DropdownMenuItem asChild><Link href="/resources/guides">Guides</Link></DropdownMenuItem>
                    <DropdownMenuItem asChild><Link href="/resources/case-studies">Case Studies</Link></DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenuPortal> */}
              </DropdownMenu>

              {/* <DropdownMenu>
                <DropdownMenuTrigger className="text-sm font-medium text-[#64748B] hover:text-blue-600">Company</DropdownMenuTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuContent className="w-full">
                    <DropdownMenuItem asChild><Link href="/company/about">About Us</Link></DropdownMenuItem>
                    <DropdownMenuItem asChild><Link href="/company/careers">Careers</Link></DropdownMenuItem>
                    <DropdownMenuItem asChild><Link href="/company/contact">Contact</Link></DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenuPortal>
              </DropdownMenu> */}

              {/* Button to book a consultation, opens Calendly in a new tab */}
              <div className="flex justify-center w-full">
              <Button 
                onClick={() => window.open('https://calendly.com/meatdaraz/30min', '_blank')} 
                className="bg-blue-600 text-white hover:bg-blue-700 w-1/2">
                Book A Video Consultation
              </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
