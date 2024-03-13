import { Navigate, useLocation } from 'react-router-dom';
import ResultCard from '../../components/shared/resultCard/ResultCard';
import { PATHS } from '../../shared/constants/paths';

const ErrorUserExistResult = () => {
    const location = useLocation();

    if (location.state?.prevPath !== PATHS.registration) {
        return <Navigate to={PATHS.auth} />;
    }
    return (
        <ResultCard
            status="error"
            title="This email is already registered. Please log in or use a different email address"
            btnTitle="Back to Registration"
            link={PATHS.auth}
        />
    );
};

export default ErrorUserExistResult;
