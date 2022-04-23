import { Outlet } from "react-router";

const DashboardLayout = () => {
    return (
        <div>
            <nav>
                DASHBOARD
            </nav>
         
            <Outlet />

            <footer>
                FOOTER
            </footer>

        </div>
    );
}

export default DashboardLayout;