import ResultCard from '../../components/shared/resultCard/ResultCard';
import { PATHS } from '../../shared/constants/paths';

const ErrorUserExistResult = () => {
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
