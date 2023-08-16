import PublicLayout from "../layouts/Public.layout";
import ProfilePage from "../pages/public/Profile.page";

const PublicRouters = [
    {
        path: "/",
        element: <PublicLayout />,
        children: [
			{
				path: "/profile",
				element: <ProfilePage />
			},
        ],
    },
]

export default PublicRouters;