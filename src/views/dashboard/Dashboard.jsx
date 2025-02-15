import { Outlet } from "react-router";
import Menu from "../../components/dashboard/menu/Menu";
import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <div className="dashboard">
        <div className="sidebar">
          <Menu />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
