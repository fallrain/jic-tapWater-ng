import {routerAy} from './routerMap';
import {routersPath} from './routersPath';

routersPath.forEach((v, i) => {
  v.component = routerAy[i];
});
export const routers = routersPath;
