import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { ProjectCard } from '@/components/layouts/project-card';
import { Button } from '@/components/ui/button';

const stack = ['React.js', 'Next.js', 'Java', 'Spring Boot', 'Full Stack'];

export default function Home() {
  return (
    <main className="w-full ">
      <div className="flex w-full flex-col  gap-4 border-b pb-2">
        <p className="w-full text-sm md:w-[500px]">
          I&apos;m a <span className="font-semibold">Software Engineer</span>{' '}
          with 4+ years of hands-on experience designing, developing, and
          implementing applications and solutions using a range of technologies
          and programming languages in both frontend and backend. Seeking to
          leverage broad development experience and hands-on technical expertise
          in a challenging way.
        </p>
        <Button
          variant="outline"
          size="sm"
          className="w-max transition-all duration-300 ease-in-out hover:scale-105 hover:bg-background hover:shadow dark:hover:shadow-emerald-500/[0.1]"
        >
          <Link
            href="mailto:nunatass@gmail.com"
            className="flex items-center justify-center"
          >
            Contact me
            <ArrowUpRight className="size-4 transition-all duration-300 ease-in-out group-hover:translate-x-0.5 group-hover:scale-105" />
          </Link>
        </Button>
        <div className="hidden w-full items-end justify-end gap-2 md:flex">
          {stack.map((item) => (
            <Button
              variant="outline"
              size="sm"
              className="animate-background-shine bg-[linear-gradient(110deg,#f8f9fa,45%,#e9ecef,55%,#f8f9fa)] bg-[length:200%_100%] px-6 font-medium text-gray-600 transition-all dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)]"
              key={item}
            >
              {item}
            </Button>
          ))}
        </div>
      </div>
      <div className="mt-20 flex w-full flex-wrap items-start gap-x-8">
        <ProjectCard
          title="Spotify UI Clone"
          description="This project is Spotify UI clone, built using Next.js 13, Tailwind CSS, and Spotify's Web API"
          repositoryUrl="https://github.com/nunatass/spotify-clone"
          liveUrl="https://spotify-clone-nine-weld.vercel.app/"
          bannerUrl="https://raw.githubusercontent.com/nunatass/spotify-clone/main/public/screenshot-1.png"
          className="-mt-24"
        />
        <ProjectCard
          title="Stella Stone Store"
          description="This project is an online store built with Next.js 14, React Query, and Stripe for the frontend, and a backend developed using Spring Boot."
          repositoryUrl="https://github.com/nunatass/luna-store"
          liveUrl="https://www.stellastone.store/"
          bannerUrl="https://github.com/nunatass/animated-gradients/blob/main/public/Screenshot%202024-04-25%20at%2001.19.34.png?raw=true"
          className="-mt-24"
        />
        <ProjectCard
          title="Animated Gradients"
          description="UI Cloning with Next.js and Tailwindcss: Creating a Dribbble-Inspired Carousel"
          repositoryUrl="https://github.com/nunatass/animated-gradients"
          liveUrl="https://animated-gradients.vercel.app/"
          bannerUrl="https://raw.githubusercontent.com/nunatass/animated-gradients/main/public/Screenshot%202024-05-26%20at%2023.25.28.png"
          className="-mt-32"
        />
      </div>
    </main>
  );
}
