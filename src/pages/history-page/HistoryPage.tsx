import { Empty, Flex, Typography } from 'antd';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Loader from '../../components/shared/loader/Loader';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { useAuth } from '../../hooks/useAuth';
import { PATHS } from '../../shared/constants/paths';
import { useGetHistoryQuery } from '../../store/historySlice/historyApi';
import { getHistoryList } from '../../store/historySlice/historySlice';
import HistoryList from './components/historyList/HistoryList';
const { Title } = Typography;

const HistoryPage = () => {
    const dispatch = useAppDispatch();
    const { currentUser } = useAuth();
    const { data, isLoading, isError } = useGetHistoryQuery(currentUser, {
        skip: !currentUser,
    });

    useEffect(() => {
        if (data) {
            dispatch(getHistoryList(data));
        }
    }, [data, dispatch]);

    if (!currentUser && !isLoading) {
        return <Navigate to={PATHS.main} replace />;
    }

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    {isError && data?.length === 0 ? (
                        <Empty />
                    ) : (
                        <Flex vertical gap={40}>
                            <Title level={3}>Search history</Title>
                            <HistoryList history={data} />
                        </Flex>
                    )}
                </>
            )}
        </>
    );
};

export default HistoryPage;
