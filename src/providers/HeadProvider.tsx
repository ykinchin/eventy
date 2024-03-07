import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../store/store';
import AntdProvider from './AntdProvider';

const HeadProvider = ({ children }: { children: React.JSX.Element }) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AntdProvider>{children}</AntdProvider>
            </BrowserRouter>
        </Provider>
    );
};

export default HeadProvider;
