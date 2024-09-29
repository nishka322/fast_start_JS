import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import BrowserOnly from '@docusaurus/BrowserOnly';

const SwaggerUIComponent = () => {
  return (
    <BrowserOnly>
      {() => {
        // Проверяем среду, чтобы использовать правильный URL
        const isProduction = window.location.hostname === 'nishka322.github.io';
        const apiUrl = isProduction
          ? 'https://nishka322.github.io/corgisaurus/swagger/api.yaml'
          : '/swagger/api.yaml';

        return <SwaggerUI url={apiUrl} />;
      }}
    </BrowserOnly>
  );
};

export default SwaggerUIComponent;
