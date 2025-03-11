import React from 'react';

const GTMNoScript: React.FC = () => {
  return (
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-MZNC2SFX"
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  );
};

export default GTMNoScript;