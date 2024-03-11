import { Input } from 'antd';

type Props = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const LoginInput = ({ onChange }: Props) => {
    return <Input placeholder="email" size="large" onChange={onChange} />;
};

export default LoginInput;
