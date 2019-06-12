import React, { Suspense, LazyExoticComponent } from 'react';

const LazyLoader = (LazyComponent: LazyExoticComponent<any>) => (
  props: any
) => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazyComponent {...props} />
  </Suspense>
);

export default LazyLoader;
