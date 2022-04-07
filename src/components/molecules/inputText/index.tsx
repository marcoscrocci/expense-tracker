import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLElement> {
    label: string;
}

const InputText = ({ label, ...props }: Props) => {
    return (
        <label>
            <span>{label}</span>
            <input type="email" {...props} />
        </label>
    );
};

export default InputText;