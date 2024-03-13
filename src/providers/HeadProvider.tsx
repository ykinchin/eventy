import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../store/store';
import AntdProvider from './AntdProvider';
import { AuthProvider } from './AuthContext';

const HeadProvider = ({ children }: { children: React.JSX.Element }) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AuthProvider>
                    <AntdProvider>{children}</AntdProvider>
                </AuthProvider>
            </BrowserRouter>
        </Provider>
    );
};

export default HeadProvider;
