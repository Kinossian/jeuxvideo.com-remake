
import Link from "next/link";
import { useCallback } from "react";

const Button = ({ content, className, onClick, href, icon }) => {
    const handleClick = useCallback(onClick, [onClick]);
    return (
        <button
            onClick={handleClick}
            className={`min-w-max rounded-full border text-xs mr-2 text-gray-100 py-1 px-2 hover:text-blue-400 hover:border-blue-400 ease-in-out duration-300 ${className}`}
        >
            <Link className="flex items-center" href={href}>
                {content} {icon}
            </Link>
        </button >
    );
};

export default Button;