import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Loader } from './components/Loader';
import AppRouter from './routes/components/App.Routes';
import AppLayout from './layout/AppLayout';
import AuthRoute from './routes/components/Auth.Routes';

const DefaultApp = () => {
  return (
    <AuthProvider>
      <ToastContainer />
      <Suspense fallback={<Loader />}>
        <AppLayout>
          <AppRouter />
        </AppLayout>
      </Suspense>
    </AuthProvider>
  );
};

function App() {
  const { user, tokens } = useAuth();

  if (!(user && tokens)) {
    return <DefaultApp />;
  } else {
    return (
      <Suspense fallback={<Loader />}>
        <AuthRoute />
      </Suspense>
    );
  }
}

export default App;
