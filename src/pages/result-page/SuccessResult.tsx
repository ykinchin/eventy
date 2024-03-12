import ResultCard from '../../components/shared/resultCard/ResultCard';
import { PATHS } from '../../shared/constants/paths';

const SuccessResult = () => {
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
