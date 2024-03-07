import { ConfigProvider } from 'antd';

const AntdProvider = ({ children }: { children: React.JSX.Element }) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    borderRadius: 2,
                },
                components: {
                    Menu: {
                        itemColor: '#d9d9d9',
                        horizontalItemSelectedColor: '#3fc1c9',
                    },
                    Button: {
                        defaultBg: '#ffffff28',
                        colorPrimary: '#3fc1c9',
                        colorPrimaryActive: '#3fc1c9',
                        colorPrimaryHover: '#3fc1c9',
                        primaryColor: 'black',
                    },
                },
            }}
        >
            {children}
        </ConfigProvider>
    );
};

export default AntdProvider;
