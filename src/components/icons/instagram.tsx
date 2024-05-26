type InstagramIconProps = {
  className?: string;
};

export function InstagramIcon({ className }: InstagramIconProps) {
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
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 16a4 4 0 100-8 4 4 0 000 8z"
      />
      <path
        stroke="currentColor"
        d="M3 16V8a5 5 0 015-5h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.5 6.51l.01-.011"
      />
    </svg>
  );
}
