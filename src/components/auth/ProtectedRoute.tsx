import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Navigate } from "react-router";

// Type for React functional component with children
interface RouteProps {
  children: React.ReactNode;
}
const ProtectedRoute = ({ children }: RouteProps) => {
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);

    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;