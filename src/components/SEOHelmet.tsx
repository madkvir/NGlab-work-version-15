import { Helmet } from 'react-helmet-async';
import { memo, useEffect, useState } from 'react';

interface SEOHelmetProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

const SEOHelmet = memo(({ title, description, children }: SEOHelmetProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {children}
    </Helmet>
  );
});

SEOHelmet.displayName = 'SEOHelmet';

export default SEOHelmet;