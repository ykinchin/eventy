import { Flex, Typography } from 'antd';
import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
}

const { Title, Text } = Typography;

class AppErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
    };

    public static getDerivedStateFromError(): State {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <Flex vertical align="center">
                    <Title level={3}>An Error occured</Title>
                    <Text type="secondary">
                        Sorry.. there was an error. Try ty refresh the page or
                        follow next button
                    </Text>
                </Flex>
            );
        }

        return this.props.children;
    }
}

export default AppErrorBoundary;
