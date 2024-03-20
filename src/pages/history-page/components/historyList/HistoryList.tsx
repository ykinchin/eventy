import { List } from 'antd';
import { useAuth } from '../../../../hooks/useAuth';
import { HistoryType } from '../../../../shared/types/historyTypes';
import { useRemoveHistoryMutation } from '../../../../store/historySlice/historyApi';
import HistoryItem from '../historyItem/HistoryItem';

type Props = {
    history?: HistoryType[];
};

const HistoryList = ({ history }: Props) => {
    const { currentUser } = useAuth();
    const [removeHistory] = useRemoveHistoryMutation();

    const handleOnRemove = (id: string) => {
        removeHistory({ email: currentUser, historyId: id, history });
    };

    return (
        <List
            style={{ height: '70vh', overflow: 'auto' }}
            dataSource={history}
            renderItem={(item) => (
                <List.Item>
                    <HistoryItem historyItem={item} onRemove={handleOnRemove} />
                </List.Item>
            )}
        />
    );
};

export default HistoryList;
