import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Navigate } from "react-router";


// Type for React functional component with children
interface RouteProps {
  children: React.ReactNode;
}
const PublicRoute = ({ children }: RouteProps) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};

export default PublicRoute;