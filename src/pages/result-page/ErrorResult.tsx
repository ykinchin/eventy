import ResultCard from '../../components/shared/resultCard/ResultCard';
import { PATHS } from '../../shared/constants/paths';

const ErrorResult = () => {
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
