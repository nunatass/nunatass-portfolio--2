'use client';

import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { ProjectCard } from '@/components/layouts/project-card';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';

const stack = ['React.js', 'Next.js', 'Java', 'Spring Boot', 'Full Stack'];

export default function Home() {
  return (
    <main className="w-full ">
      <div className="flex w-full flex-col  gap-4 border-b pb-2">
        <p className="w-full text-sm md:w-[500px]">
          I&apos;m a <span className="font-semibold">Software Engineer</span>{' '}
          with 5+ years of hands-on experience designing, developing, and
          implementing innovative applications and solutions. Seeking to
          leverage extensive development expertise and technical skills to
          tackle challenging opportunities. Proficient in working with diverse
          technologies and frameworks, ensuring scalable and eﬃcient systems.
          Experienced in collaborating with small and large teams across
          multiple projects and organizations, consistently delivering quality
          results.
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
              className="animate-background-shine cursor-default bg-[linear-gradient(110deg,#f8f9fa,45%,#e9ecef,55%,#f8f9fa)] bg-[length:200%_100%] px-6 font-medium text-gray-600 transition-all dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)]"
              key={item}
            >
              {item}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex w-full flex-col gap-2">
        <span className="mt-1">Projects</span>
        <div className="mt-20 flex w-full flex-wrap items-start gap-x-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              repositoryUrl={project.repositoryUrl}
              liveUrl={project.liveUrl}
              bannerUrl={project.bannerUrl}
              className="-mt-32"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
