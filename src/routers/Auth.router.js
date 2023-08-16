import AuthLayout from "../layouts/Auth.layout";
import LoginPage from "../pages/auth/Login.page";

const AuthRouters = [
    {
        path: "/",
        element: <AuthLayout />,
        children: [
			{
				path: "/login",
				element: <LoginPage />
			}
        ],
    },
]

export default AuthRouters;