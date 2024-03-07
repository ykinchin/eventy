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
                    },
                },
            }}
        >
            {children}
        </ConfigProvider>
    );
};

export default AntdProvider;
