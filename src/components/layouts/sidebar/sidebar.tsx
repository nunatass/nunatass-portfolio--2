'use client';

import Image from 'next/image';

import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  XIcon,
} from '../../icons';
import { SidebarItem } from './sidebar-item';

export function Sidebar() {
  return (
    <aside className="fixed  left-0 top-0 z-30 flex h-screen w-14 flex-col items-center gap-[12px] border-r bg-white py-4 text-gray-400">
      <div className="mb-8 flex items-center justify-center brightness-95 transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-100">
        <Image src="/logo.svg" alt="logo" width={32} height={32} />
      </div>
      <SidebarItem
        icon={XIcon}
        tooltip="twitter/nunatass"
        href="https://twitter.com/nunatass"
      />
      <SidebarItem
        icon={InstagramIcon}
        tooltip="instagram/nunatass"
        href="https://www.instagram.com/nunatass"
      />
      <SidebarItem
        icon={LinkedinIcon}
        tooltip="linkedin/nunatass"
        href="https://www.linkedin.com/in/nunatass/"
      />
      <SidebarItem
        icon={MailIcon}
        tooltip="nunatass@gmail.com"
        href="mailto:nunatass@gmail.com"
      />
      <SidebarItem
        icon={GithubIcon}
        tooltip="github/nunatass"
        href="https://github.com/nunatass"
      />
    </aside>
  );
}
