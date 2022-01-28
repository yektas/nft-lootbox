import { ButtonHTMLAttributes } from "react";

export default function PrimaryButton(
  props: ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { children, ...rest } = props;
  const className =
    "inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm max-w-fit bg-primary hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-80 disabled:pointer-events-none";

  return (
    <button {...rest} className={className}>
      {children}
    </button>
  );
}
