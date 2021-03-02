/**
 *
 * Asynchronously loads the component for HeaderAvatar
 *
 */

import { lazyLoad } from 'utils/loadable';

export const HeaderAvatar = lazyLoad(
  () => import('./index'),
  module => module.HeaderAvatar,
);
