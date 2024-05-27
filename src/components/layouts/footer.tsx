import Image from 'next/image';

export function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <footer className="flex w-full items-center justify-between border-t py-8">
      <span className="text-sm">Nunatass © {currentYear}</span>
      <div className="relative size-10 overflow-hidden rounded-full">
        <Image alt="Nuno Andrade Photo" src="/nunatass.jpeg" fill />
      </div>
    </footer>
  );
}
