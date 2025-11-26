import { MetaProvider } from '@solidjs/meta';
import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { ErrorBoundary, Suspense } from 'solid-js';
import './app.css';
import RootError from './routes/error';

export default function App() {
  return (
    <MetaProvider>
      <ErrorBoundary fallback={(err) => <RootError error={err} />}>
        <Router root={(props) => <Suspense>{props.children}</Suspense>}>
          <FileRoutes />
        </Router>
      </ErrorBoundary>
    </MetaProvider>
  );
}
