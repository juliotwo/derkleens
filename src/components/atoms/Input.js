import { twJoin } from "tailwind-merge";

const Input = ({ className, disabled, ...rest }) => {
  return (
    <input
      disabled={disabled}
      className={twJoin(
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-primary focus:border-primary block w-full p-2.5",
        `${disabled && "opacity-50"}`,
        className
      )}
      {...rest}
    />
  );
};

export default Input;
