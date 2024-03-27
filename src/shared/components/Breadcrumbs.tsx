import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const Breadcrumb = () => {
  const location = useLocation();
  console.log(location);

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <div key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });

  console.log(crumbs);
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" color="secondary" />}
      aria-label="breadcrumb"
      color="primary"
      sx={{ textTransform: "uppercase", fontWeight: 700 }}
    >
      {crumbs}
    </Breadcrumbs>
  );
};
