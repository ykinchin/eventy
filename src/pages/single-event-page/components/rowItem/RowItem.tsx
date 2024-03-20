import { Flex, Typography } from 'antd';
import PropTypes from 'prop-types';

type Props = {
    title: string;
    description?: string;
};

const { Text } = Typography;

const RowItem = ({ title, description }: Props) => {
    return (
        <Flex gap={10} align="baseline">
            <Text style={{ fontSize: 22, fontWeight: 500 }}>{title}</Text>
            <Text style={{ fontSize: 18 }}>{description}</Text>
        </Flex>
    );
};

export default RowItem;

RowItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
};
