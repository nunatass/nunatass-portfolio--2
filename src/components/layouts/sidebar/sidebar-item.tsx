'use client';

import { useMouse } from '@uidotdev/usehooks';
import type { TargetAndTransition } from 'framer-motion';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { type ElementType, useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';

const initialAnimationState = {
  opacity: 0,
  scale: 0,
  x: 10,
  y: 10,
};

type SidebarItemProps = {
  icon: ElementType;
  tooltip?: string;
  href?: string;
};

export function SidebarItem({ icon: Icon, tooltip, href }: SidebarItemProps) {
  const [mouse, ref] = useMouse();

  const [animation, setAnimation] = useState<TargetAndTransition>({
    x: mouse.elementX,
    y: mouse.elementY,
    opacity: 1,
    scale: 1,
  });

  useEffect(() => {
    setAnimation((prev) => ({
      ...prev,
      x: mouse.elementX % 20,
      y: mouse.elementY % 20,
    }));
  }, [mouse, setAnimation]);

  return (
    <div className="group relative">
      <motion.div>
        <Button
          ref={ref as React.RefObject<HTMLButtonElement>}
          variant="outline"
          size="icon"
          className="size-8 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white hover:shadow-md"
          asChild
        >
          <Link href={href ?? '/'} target="_blank">
            <Icon className="size-4" />
          </Link>
        </Button>
      </motion.div>
      <AnimatePresence initial>
        {tooltip && (
          <motion.div
            className="absolute left-8 top-0 z-40 hidden items-center gap-2 rounded-full border bg-white px-2 py-1 text-sm opacity-0 shadow-md group-hover:flex"
            initial={initialAnimationState}
            animate={animation}
            exit={initialAnimationState}
            transition={{
              ease: 'easeInOut',
              duration: 0.2,
            }}
          >
            <div className=" relative flex items-center justify-center rounded-full border">
              <Plus className="size-4" />
              <div className="absolute left-[-12.5px] top-1/2 z-10 size-2 -translate-y-1/2 rotate-45 rounded-[2px] border bg-white" />
              <div className="absolute left-[-9px] top-1/2 z-10 h-2.5 w-1.5 -translate-y-1/2 rounded-[1.5px] bg-white" />
            </div>
            {tooltip}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
