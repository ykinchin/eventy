import { RiseLoader } from 'react-spinners';
import s from './loader.module.scss';

const Loader = () => (
    <div className={s.wrapper} data-test-id="loader">
        <RiseLoader color="#3fc1c9" loading margin={0} size={25} />
    </div>
);

export default Loader;
