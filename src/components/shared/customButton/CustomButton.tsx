import { Button } from 'antd';

type Props = {
    children: React.ReactNode;
    type?: 'dashed' | 'default' | 'primary' | 'link' | 'text';
    block?: boolean;
    size?: 'large' | 'middle' | 'small';
    onClick?: () => void;
};

const CustomButton = ({
    children,
    type = 'primary',
    block = false,
    size,
    onClick,
}: Props) => {
    return (
        <Button type={type} block={block} size={size} onClick={onClick}>
            {children}
        </Button>
    );
};

export default CustomButton;
