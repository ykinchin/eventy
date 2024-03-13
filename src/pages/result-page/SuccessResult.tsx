import { Navigate, useLocation } from 'react-router-dom';
import ResultCard from '../../components/shared/resultCard/ResultCard';
import { PATHS } from '../../shared/constants/paths';

const SuccessResult = () => {
    const location = useLocation();

    if (location.state?.prevPath !== PATHS.registration) {
        return <Navigate to={PATHS.auth} />;
    }

    return (
        <ResultCard
            status="success"
            title="Success! Your account has been created"
            btnTitle="Log In"
            link={PATHS.main}
        />
    );
};

export default SuccessResult;
