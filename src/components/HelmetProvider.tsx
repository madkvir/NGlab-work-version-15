import { HelmetProvider as ReactHelmetProvider } from 'react-helmet-async';
import { memo } from 'react';

interface HelmetProviderProps {
  children: React.ReactNode;
}

const helmetContext = {};

const HelmetProvider = memo(({ children }: HelmetProviderProps) => {
  return (
    <ReactHelmetProvider context={helmetContext}>
      {children}
    </ReactHelmetProvider>
  );
});

HelmetProvider.displayName = 'HelmetProvider';

export default HelmetProvider;