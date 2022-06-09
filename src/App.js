import AppRoutes from './routes';
import AppProvider from './hooks';

function App() {
 
  return (
    <AppProvider>
      <AppRoutes/>
    </AppProvider>
  );
}

export default App;
