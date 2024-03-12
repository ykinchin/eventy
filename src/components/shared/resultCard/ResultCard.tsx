import { Card, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../customButton/CustomButton';
import s from './resultCard.module.scss';

type Props = {
    status: 'success' | 'error';
    title: string;
    subtitle?: string;
    btnTitle: string;
    link: string;
};

const ResultCard = ({ status, subtitle, title, btnTitle, link }: Props) => {
    const navigate = useNavigate();
    const handleOnClick = () => navigate(link, { replace: true });

    return (
        <Card className={s.card}>
            <Result status={status} title={title} subTitle={subtitle} />
            <CustomButton
                size="large"
                block
                backgroundColor="#1677FF"
                onClick={handleOnClick}
            >
                {btnTitle}
            </CustomButton>
        </Card>
    );
};

export default ResultCard;
