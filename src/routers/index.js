import { useRoutes } from 'react-router-dom';

import MainRouters from './Main.router';
import PublicRouters from './Public.router';
import AuthRouters from './Auth.router';

const ThemeRouters = () => {
    return useRoutes([...MainRouters, ...PublicRouters, ...AuthRouters]);
}

export default ThemeRouters