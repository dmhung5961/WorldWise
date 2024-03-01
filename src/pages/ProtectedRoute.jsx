import PropTypes from "prop-types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null;
}

ProtectedRoute.propTypes = {
  children: PropTypes.object,
};

export default ProtectedRoute;
