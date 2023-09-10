import { useNavigate } from "react-router";
import "./BackNavigation.css";

export const BackNavigation = () => {
  const navigate = useNavigate();
  return (
    <button className="back-navigation" onClick={() => navigate(-1)}>
      Back
    </button>
  );
};
