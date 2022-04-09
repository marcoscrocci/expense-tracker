import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLElement> {
    label: string;
}

const InputText = ({ label, ...props }: Props) => {
    return (
        <label className="flex flex-col w-full">
            <span>{label}</span>
            <input {...props} className="border border-gray-200 px-2 h-9" />
        </label>
    );
};

export default InputText;