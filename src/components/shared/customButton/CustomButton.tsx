import { Button } from 'antd';

type Props = {
    children: React.ReactNode;
    type?: 'dashed' | 'default' | 'primary' | 'link' | 'text';
};

const CustomButton = ({ children, type = 'primary' }: Props) => {
    return <Button type={type}>{children}</Button>;
};

export default CustomButton;
