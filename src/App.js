import './App.css';
import ThemeRouters from './routers';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeRouters />
        </QueryClientProvider>
    );
}

export default App;
