import { FileText } from 'lucide-react';
import Link from 'next/link';

import { ThemeModeToggle } from './theme-mode-toggle';

export function Header() {
  return (
    <header className="fixed left-0 top-0 z-20 flex h-14 w-screen items-center justify-between border-b bg-background px-20 lg:pl-56">
      <div className="flex w-full shrink-0 items-center gap-8 text-sm text-gray-500 transition-colors duration-300 ease-in-out">
        <Link
          href="/"
          className="shrink-0 text-foreground transition-colors duration-300 ease-in-out"
        >
          Nuno Andrade
        </Link>
        <Link
          href="/resume.pdf"
          className="flex items-center gap-1 transition-colors duration-300 ease-in-out hover:text-foreground"
        >
          <FileText className="size-4" />
          Resume
        </Link>
        <Link
          href="mailto:nunatass@gmail.com"
          target="_blank"
          className="transition-colors duration-300 ease-in-out hover:text-foreground"
        >
          Connect
        </Link>
      </div>
      <div className="hidden lg:flex">
        <ThemeModeToggle />
      </div>
    </header>
  );
}
