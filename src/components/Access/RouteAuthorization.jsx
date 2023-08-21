/**route wrapper to check if user is logged in.  They will be directed to the log in page if they land on a
 * page that needs authentication, but are not logged in.
 */
import { Navigate, Outlet } from "react-router-dom";
const RouteAuthorization = (token) => {
  if (token.token == null) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default RouteAuthorization;
