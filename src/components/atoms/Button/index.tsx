import React, { ButtonHTMLAttributes, ReactNode } from "react";
import tw from "tailwind-styled-components";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'ghost'
}

const Button = ({ children, variant, ...props }: Props) => {
    if (variant === 'ghost') return (
        <GhostButton {...props}>
            {children}
        </GhostButton>
    )
    return (
        <MainButton {...props}>
            {children}
        </MainButton>
    );
};

export default Button;

export const BaseButton = tw.button`
    h-10
    text-white
    rounded
    cursor-pointer
    disabled:cursor-not-allowed
    disabled:bg-gray-200
    px-6
`;

export const MainButton = tw(BaseButton)`
    bg-blue-700
    hover:bg-blue-800
`;

export const GhostButton = tw(BaseButton)`
    bg-transparent
    hover:bg-gray-200
    text-blue-700
`;