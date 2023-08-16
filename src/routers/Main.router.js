import DashboardPages from "../pages/admin/Dashboard.page";
import MainLayout from "../layouts/Main.layout";
import NotFoundPage from "../pages/not-found/Not.found.page";
import ShippingCompsPage from '../pages/admin/shipping-comps'
import Middleware from "./Middleware.router";

const MainRouters = [
    {
        path: "/",
        element: <Middleware page={<MainLayout />} />,
        children: [
			{ index: true, element: <DashboardPages /> },
			{
				path: "/dashboard",
				element: <DashboardPages />
			},
            {
				path: "/shipping-comps",
				element: <ShippingCompsPage />
			},
			{ path: "*", element: <NotFoundPage /> },
        ],
    },
]

export default MainRouters;