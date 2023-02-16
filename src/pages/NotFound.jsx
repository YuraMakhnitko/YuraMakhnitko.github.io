import { useNavigate } from "react-router";
import { useEffect } from "react";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return <p>Page not found...</p>;
};
export default NotFound;
