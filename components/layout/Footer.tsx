import Link from 'next/link'

export function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200">
      <p className="text-xs text-[#64748B]">© 2024 packeeze. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs text-[#64748B] hover:text-blue-600 transition-colors" href="/pages/contact">
          Contact Us
        </Link>
        <Link className="text-xs text-[#64748B] hover:text-blue-600 transition-colors" href="/pages/legal/privacy">
          Privacy Policy
        </Link>
        <Link className="text-xs text-[#64748B] hover:text-blue-600 transition-colors" href="/pages/sitemap">
          Sitemap
        </Link>
        <Link className="text-xs text-[#64748B] hover:text-blue-600 transition-colors" href="/pages/about">
          About Us
        </Link>
        <Link className="text-xs text-[#64748B] hover:text-blue-600 transition-colors" href="/pages/sustainability">
          Sustainability
        </Link>
      </nav>
    </footer>
  )
}
