import Link from 'next/link'

export function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200">
      <p className="text-xs text-[#64748B]">© 2024 Packzen. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs text-[#64748B] hover:text-blue-600 transition-colors" href="/legal/terms">
          Terms of Service
        </Link>
        <Link className="text-xs text-[#64748B] hover:text-blue-600 transition-colors" href="/legal/privacy">
          Privacy Policy
        </Link>
        <Link className="text-xs text-[#64748B] hover:text-blue-600 transition-colors" href="/legal/cookies">
          Cookie Policy
        </Link>
        <Link className="text-xs text-[#64748B] hover:text-blue-600 transition-colors" href="/about">
          About Us
        </Link>
        <Link className="text-xs text-[#64748B] hover:text-blue-600 transition-colors" href="/sustainability">
          Sustainability
        </Link>
      </nav>
    </footer>
  )
}
