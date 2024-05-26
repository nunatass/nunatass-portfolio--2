type XIconProps = {
  className?: string;
};

export function XIcon({ className }: XIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      strokeWidth="1.5"
      color="currentColor"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        stroke="currentColor"
        d="M16.82 20.768L3.753 3.968A.6.6 0 014.227 3h2.48a.6.6 0 01.473.232l13.067 16.8a.6.6 0 01-.474.968h-2.48a.6.6 0 01-.473-.232z"
      />
      <path stroke="currentColor" strokeLinecap="round" d="M20 3L4 21" />
    </svg>
  );
}
