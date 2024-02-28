import { CSSProperties } from 'react'

type ButtonProps = {
    label: string | number;
    icon?: string;
    style?: CSSProperties;
    onClick?: () => void;
    disabled?: boolean;
}

export const Button = ({ icon, label, style, onClick, disabled }: ButtonProps) => {
    return (
        <button
            className='min-w-[12rem] border-2 px-6 py-2 rounded-md shadow-sm'
            style={{
                ...style,
                cursor: disabled ? "not-allowed" : 'pointer'
            }}
            onClick={onClick}
            disabled={disabled}>
            <span>
                {label}
            </span>
            <span>
                {icon}
            </span>
        </button>
    )
}
