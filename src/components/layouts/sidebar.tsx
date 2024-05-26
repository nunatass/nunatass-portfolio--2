import { InstagramIcon, LinkedinIcon, MailIcon, XIcon } from '../icons';
import { Button } from '../ui/button';

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-30 flex h-screen w-14 flex-col items-center gap-2 border-r bg-white py-4">
      <Button variant="outline" size="icon" className="size-8">
        <XIcon className="size-4" />
      </Button>
      <Button variant="outline" size="icon" className="size-8">
        <InstagramIcon className="size-4" />
      </Button>
      <Button variant="outline" size="icon" className="size-8">
        <LinkedinIcon className="size-4" />
      </Button>
      <Button variant="outline" size="icon" className="size-8">
        <MailIcon className="size-4" />
      </Button>
    </aside>
  );
}
