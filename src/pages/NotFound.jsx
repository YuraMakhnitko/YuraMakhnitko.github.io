import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, []);

  return <p>Page not found...</p>;
};
export default NotFound;
