import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  className?: string;
  variant?: "default" | "alternative" | "green" | "red";
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  className,
  onClick,
  children,
  disabled,
}) => {
  let style = "";
  switch (variant) {
    case "alternative":
      style = `grid justify-center items-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 ${
        disabled
          ? ""
          : "hover:bg-gray-100 hover:text-blue-700 dark:hover:text-white dark:hover:bg-gray-700"
      }`;
      break;
    case "green":
      style = `grid justify-center items-center focus:outline-none text-white bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm dark:bg-green-600 dark:focus:ring-green-800 ${
        disabled ? "" : "hover:bg-green-800 dark:hover:bg-green-700"
      }`;
      break;
    case "red":
      style = `grid justify-center items-center focus:outline-none text-white bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm dark:bg-red-600 dark:hover:bg-red-700 ${
        disabled ? "" : "hover:bg-red-800 dark:focus:ring-red-900"
      }`;
      break;
    default:
      style = `grid justify-center items-center text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800 ${
        disabled ? "" : "hover:bg-blue-800 dark:hover:bg-blue-700 "
      }`;
      break;
  }
  return (
    <button
      type="button"
      className={`${className} ${style}`}
      onClick={onClick}
      // @ts-ignore for some reason
      // 'DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>'
      // is not an HTMLButtonElement, so it has no "disabled" attribute.
      // casting it as an HTMLButtonElement does even more harm.
      disabled={disabled ? true : false}
    >
      {children}
    </button>
  );
};

export default Button;
