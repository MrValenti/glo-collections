import React from 'react'
import { twMerge } from 'tailwind-merge';

interface Props {
    children: React.ReactNode;
    className?: string;
}

const ContainerBanner = ({ children, className }: Props) => {
    const newClassName = twMerge("flex flex-row p-4 max-w-screen-xl mx-auto lg:px-0 relative", className
    );
    return (
        <div className={newClassName}>{children}</div>
    )
}

export default ContainerBanner