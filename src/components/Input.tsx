import clsx from "clsx";

type InputProps = {
  className?: string;
  placeholder?: string;
};

export default function Input({ className, placeholder }: InputProps) {
  return (
    <div
      className={clsx(
        "group flex items-center space-x-2 px-2 bg-tanblack rounded-md border border-gray-600 focus-within:ring-2 ring-offset-0.5 ring-offset-gray-600 ring-gray-900 !outline-none",
        className
      )}
    >
      <input
        placeholder={placeholder}
        className="flex-1 bg-transparent p-2 !outline-none input input-bordered"
      />
    </div>
  );
}
