import { Navigate, useLocation } from 'react-router-dom';
import ResultCard from '../../components/shared/resultCard/ResultCard';
import { PATHS } from '../../shared/constants/paths';

const ErrorResult = () => {
    const location = useLocation();

    if (location.state?.prevPath !== PATHS.registration) {
        return <Navigate to={PATHS.auth} />;
    }
    return (
        <ResultCard
            status="error"
            title="Oops! Something went wrong during registration. Please try again later"
            btnTitle="Back to Registration"
            link={PATHS.auth}
        />
    );
};

export default ErrorResult;
