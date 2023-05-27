import { MouseEventHandler, ReactNode } from "react";

interface ButtonVariant {
  additionalClasses?: string;
  variant?: "default" | "alternative" | "green" | "red";
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

const Button: React.FC<ButtonVariant> = ({
  variant,
  additionalClasses,
  onClick,
  children,
}) => {
  let style = "";
  switch (variant) {
    case "alternative":
      style =
        "grid justify-center items-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700";
      break;
    case "green":
      style =
        "grid justify-center items-center focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800";
      break;
    case "red":
      style =
        "grid justify-center items-center focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900";
      break;
    default:
      style =
        "grid justify-center items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800";
      break;
  }
  return (
    <button
      type="button"
      className={`${additionalClasses} ${style}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
