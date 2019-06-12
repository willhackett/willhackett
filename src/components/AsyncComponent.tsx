import React, { useState, useEffect } from "react";

export default (importComponent: () => Promise<any>) => {
  const AsyncComponent = props => {
    const [Component, setComponent] = useState();
    useEffect(() => {
      (async () => {
        const esModule = await importComponent();
        setComponent(esModule.default);
      })();
    }, []);

    return Component ? <Component {...props} /> : <div>Loading...</div>;
  };

  return AsyncComponent;
};
