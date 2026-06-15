import React from 'react';

interface Props {
    title?: string;
    titleClassName?: string;
    color?: string;
    mainClassName?: string;
    onClick?: () => void;
}

const Button = ({
    title,
    titleClassName,
    mainClassName,
    onClick,
}: Props) => {
    return (
        <div
            onClick={onClick}
            className={`${mainClassName} w-52 h-16 flex items-center justify-center rounded-xl cursor-pointer`}
        >
            <p className={`${titleClassName} text-lg text-textColor`}>
                {title}
            </p>
        </div>
    );
};

export default Button;