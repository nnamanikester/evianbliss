import { AuthT } from "../types";

interface CanProps {
  role: AuthT["auth"]["role"];
}

export const Can: React.FC<CanProps> = ({ role }) => {
  return null;
};
