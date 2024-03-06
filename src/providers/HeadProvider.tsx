import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../store/store';

const HeadProvider = ({ children }: { children: React.JSX.Element }) => {
    return (
        <Provider store={store}>
            <BrowserRouter>{children}</BrowserRouter>
        </Provider>
    );
};

export default HeadProvider;
