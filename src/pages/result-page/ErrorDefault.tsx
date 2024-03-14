import { Navigate, useLocation } from 'react-router-dom';
import ResultCard from '../../components/shared/resultCard/ResultCard';
import { PATHS } from '../../shared/constants/paths';

const ErrorDefault = () => {
    const location = useLocation();

    if (location.state?.prevPath !== PATHS.auth) {
        return <Navigate to={PATHS.main} />;
    }

    return (
        <ResultCard
            status="error"
            title="Oops! Something went wrong. Please try again later"
            btnTitle="Back"
            link={PATHS.main}
        />
    );
};

export default ErrorDefault;
