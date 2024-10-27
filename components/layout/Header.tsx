'use client';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Package, Phone } from 'lucide-react';
import { signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuItem,
  DropdownMenuPortal
} from "@/components/ui/dropdown-menu";

// Header component displayed on all pages
// Contains main navigation, logo, and call-to-action buttons
// Used in the root layout to provide consistent navigation
export function Header() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleAuthAction = async () => {
    if (session) {
      await signOut({ redirect: true, callbackUrl: '/' });
    } else {
      router.push('/auth/signin');
    }
  };

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow">
      {/* Logo and brand name */}
      <Link className="flex items-center justify-center" href="/">
        <Package className="h-6 w-6 text-blue-600" />
        <span className="ml-2 text-xl font-bold">
          <span className="font-extrabold">PAC</span>
          <span className="text-blue-600">KZEN</span>
        </span>
      </Link>
      
      {/* Main navigation and CTA buttons */}
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center relative">
        {/* Product Dropdown Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center text-sm font-medium text-[#64748B] hover:text-blue-600 transition-colors">
            Products
          </DropdownMenuTrigger>
          <DropdownMenuPortal>
            <DropdownMenuContent className="w-48">
              <DropdownMenuItem asChild>
                <Link href="/products/product1" className="block px-4 py-2 text-sm hover:bg-gray-100">Product 1</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/products/product2" className="block px-4 py-2 text-sm hover:bg-gray-100">Product 2</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/products/product3" className="block px-4 py-2 text-sm hover:bg-gray-100">Product 3</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenuPortal>
        </DropdownMenu>

        {/* Resources Dropdown Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center text-sm font-medium text-[#64748B] hover:text-blue-600 transition-colors">
            Resources
          </DropdownMenuTrigger>
          <DropdownMenuPortal>
            <DropdownMenuContent className="w-48">
              <DropdownMenuItem asChild>
                <Link href="/resources/blog" className="block px-4 py-2 text-sm hover:bg-gray-100">Blog</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/resources/guides" className="block px-4 py-2 text-sm hover:bg-gray-100">Guides</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/resources/case-studies" className="block px-4 py-2 text-sm hover:bg-gray-100">Case Studies</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenuPortal>
        </DropdownMenu>

        {/* Company Dropdown Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center text-sm font-medium text-[#64748B] hover:text-blue-600 transition-colors">
            Company
          </DropdownMenuTrigger>
          <DropdownMenuPortal>
            <DropdownMenuContent className="w-48">
              <DropdownMenuItem asChild>
                <Link href="/company/about" className="block px-4 py-2 text-sm hover:bg-gray-100">About Us</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/company/careers" className="block px-4 py-2 text-sm hover:bg-gray-100">Careers</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/company/contact" className="block px-4 py-2 text-sm hover:bg-gray-100">Contact</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenuPortal>
        </DropdownMenu>

        {/* Getting Started Dropdown Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center text-sm font-medium text-[#64748B] hover:text-blue-600 transition-colors">
            Getting Started
          </DropdownMenuTrigger>
          <DropdownMenuPortal>
            <DropdownMenuContent className="w-48">
              <DropdownMenuItem asChild>
                <Link href="/pages/getting-started/compare" className="block px-4 py-2 text-sm hover:bg-gray-100">Compare</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/pages/getting-started/estimator" className="block px-4 py-2 text-sm hover:bg-gray-100">Estimator</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/pages/getting-started/planner" className="block px-4 py-2 text-sm hover:bg-gray-100">Planner</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenuPortal>
        </DropdownMenu>

        {/* Auth button */}
        <div className="flex items-center">
          {status === 'loading' ? (
            <Button disabled className="bg-gray-300">
              Loading...
            </Button>
          ) : session ? (
            <Button 
              onClick={handleAuthAction}
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              Sign Out
            </Button>
          ) : (
            <Button 
              onClick={handleAuthAction}
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              Sign In
            </Button>
          )}
        </div>

        {/* Contact information */}
        <div className="hidden sm:flex items-center text-blue-600">
          <Phone className="h-4 w-4 mr-2" />
          <span className="text-sm font-medium">1-800-PACKZEN</span>
        </div>
      </nav>
    </header>
  )
}
