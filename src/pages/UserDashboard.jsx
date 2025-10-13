import MyNavbar from "../components/MyNavbar.jsx";
import Welcome from "../components/Profile/Welcome.jsx";
import LastOrders from "../components/Profile/LastOrders.jsx";

export default function UserDashboard() {
    return (
        <div style={{backgroundColor: '#06205B', minHeight: '100vh', color: 'white'}}>
            <MyNavbar />
            <Welcome />
            <LastOrders />
        </div>

    )
}