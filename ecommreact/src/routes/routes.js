import Dashboard from '../components/dashboard/Dashboard';
import Profile from '../components/dashboard/Profile';

const routes = [
    { path: '/dashboard', exact: true, name: 'Dashboard'},
    { path: '/dashboard/index', exact: true, name: 'Index', element: Dashboard},
    { path: '/dashboard/profile', exact: true, name: 'Profile', element: Profile},
];

export default routes;