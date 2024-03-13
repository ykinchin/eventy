import { Navigate } from 'react-router-dom';
import Loader from '../../components/shared/loader/Loader';
import { useAuth } from '../../hooks/useAuth';
import { PATHS } from '../../shared/constants/paths';
import AuthCard from './components/authCard/AuthCard';

const AuthPage = () => {
    const { currentUser, isLoading } = useAuth();

    if (currentUser) return <Navigate to={PATHS.main} replace />;

    return isLoading ? <Loader /> : <AuthCard />;
};

export default AuthPage;
