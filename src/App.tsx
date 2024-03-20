import './assets/styles/_variablex.scss';
import './assets/styles/index.css';
import AppErrorBoundary from './components/errorBoundary/AppErrorBoundary';
import AppRouter from './routes/AppRouter';

function App() {
    return (
        <AppErrorBoundary>
            <AppRouter />
        </AppErrorBoundary>
    );
}

export default App;
