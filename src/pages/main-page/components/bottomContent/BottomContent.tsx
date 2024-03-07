import { Flex } from 'antd';
import { FC } from 'react';
import CustomButton from '../../../../components/shared/customButton/CustomButton';
import s from './bottomContent.module.scss';

const BottomContent: FC = () => {
    return (
        <Flex className={s.wrapper} justify="space-between" align="flex-end">
            <Flex className={s.part} gap={10}>
                <CustomButton>Заглушечка</CustomButton>
                <CustomButton>Заглушечка</CustomButton>
            </Flex>
            <Flex className={s.part} gap={5} vertical>
                <CustomButton>Заглушечка</CustomButton>
                <CustomButton>Заглушечка</CustomButton>
            </Flex>
        </Flex>
    );
};

export default BottomContent;
