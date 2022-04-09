import React, { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}


const Button = ({ children, ...props }: Props) => {
  return (
    <button {...props}
        className={`
            bg-blue-700 
            h-10 
            text-white 
            rounded 
            hover:bg-blue-800 
            cursor-pointer 
            disabled:cursor-not-allowed 
            disabled:bg-gray-200 
        `}
    >
        {children}
    </button>
  )
}

export default Button