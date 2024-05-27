import Image from 'next/image';
import Link from 'next/link';

import { GithubIcon } from '../icons';
import { CardBody, CardContainer, CardItem } from '../ui/3d-card';

type ProjectCardProps = {
  title: string;
  description: string;
  liveUrl: string;
  repositoryUrl: string;
  bannerUrl: string;
  className?: string;
};

export function ProjectCard({
  title,
  description,
  liveUrl,
  repositoryUrl,
  bannerUrl,
  className,
}: ProjectCardProps) {
  return (
    <CardContainer className={className}>
      <CardBody className="group/card relative size-auto  rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-secondary dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-secondary-foreground"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="mt-2 max-w-sm text-sm text-secondary-foreground"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="mt-4 w-full">
          <Image
            src={bannerUrl}
            height="1000"
            width="1000"
            className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
            alt={`thumbnail ${title}`}
          />
        </CardItem>
        <div className="mt-20 flex items-center justify-between">
          <CardItem
            translateZ={20}
            as={Link}
            href={liveUrl}
            target="__blank"
            className="rounded-xl px-4 py-2 text-xs font-normal text-secondary-foreground"
          >
            Live Demo
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
          >
            <Link
              href={repositoryUrl}
              target="__blank"
              className="flex items-center justify-center gap-2"
            >
              Repository
              <GithubIcon className="size-4" />
            </Link>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
