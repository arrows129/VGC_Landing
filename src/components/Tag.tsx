import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Tag(props: HTMLAttributes<HTMLDivElement>) {
    const { className, children, ...otherProps } = props;
    return (
        <div
            className={twMerge(
                "inline-flex border border-[#ffd900] gap-2 text-[#ffd900] px-3 py-1 rounded-full uppercase items-center",
                "text-sm px-3 py-1",                // default size
                "lg:text-xl lg:px-8 lg:py-3",       // larger size for large devices
                className
            )}
            {...otherProps}
        >
            <span>&#10038;{" "}{children}</span>
        </div>
    );
}
