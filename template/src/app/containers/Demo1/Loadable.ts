/**
 *
 * Asynchronously loads the component for Demo1
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Demo1 = lazyLoad(
  () => import('./index'),
  module => module.Demo1,
);
