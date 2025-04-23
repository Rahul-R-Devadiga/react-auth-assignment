import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-medium transition cursor-pointer"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {["Users", "Orders", "Revenue"].map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl p-6 shadow-md hover:scale-105 transition-all"
          >
            <h2 className="text-xl font-semibold mb-2">{item}</h2>
            <p className="text-3xl font-bold">
              {Math.floor(Math.random() * 1000)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
