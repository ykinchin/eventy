import { Button } from 'antd';

type Props = {
    children: React.ReactNode;
    type?: 'dashed' | 'default' | 'primary' | 'link' | 'text';
    block?: boolean;
    size?: 'large' | 'middle' | 'small';
    onClick: () => void;
    backgroundColor?: string;
    className?: string;
};

const CustomButton = ({
    children,
    type = 'primary',
    block = false,
    size,
    onClick,
    backgroundColor,
    className,
}: Props) => (
    <Button
        className={className}
        style={{ backgroundColor }}
        type={type}
        block={block}
        size={size}
        onClick={onClick}
    >
        {children}
    </Button>
);

export default CustomButton;
