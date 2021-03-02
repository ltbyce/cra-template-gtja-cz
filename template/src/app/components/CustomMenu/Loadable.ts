/**
 *
 * Asynchronously loads the component for CustomMenu
 *
 */

import { lazyLoad } from 'utils/loadable';

export const CustomMenu = lazyLoad(
  () => import('./index'),
  module => module.CustomMenu,
);
