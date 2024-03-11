import { ConfigProvider } from 'antd';

const AntdProvider = ({ children }: { children: React.JSX.Element }) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    borderRadius: 2,
                },
                components: {
                    List: {
                        itemPadding: '4px 0',
                    },
                    Card: {
                        colorBgContainer: 'rgba(255,255,255,0.6)',
                        paddingLG: 12,
                    },
                    Menu: {
                        itemColor: '#d9d9d9',
                        horizontalItemSelectedColor: '#3fc1c9',
                    },
                    Tabs: {
                        itemColor: '#d9d9d9',
                        itemActiveColor: '#3fc1c9',
                        itemSelectedColor: '#3fc1c9',
                        inkBarColor: '#3fc1c9',
                        fontSize: 16,
                        lineHeight: 2,
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
