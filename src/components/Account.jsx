/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../contextapi/AppContext";
import Button from "./Button";

function Account() {
  const { user, handleDeleteUser } = useContext(AppContext);
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center space-y-4">
          <div className="text-6xl">🔒</div>
          <p className="text-2xl text-amber-400 font-semibold">
            Please log in to view account settings.
          </p>
          <Button onClick={() => navigate("/login")}>
            Go to Login
          </Button>
        </div>
      </div>
    );
  }

  const handleDeleteAndNavigate = async () => {
    try {
      await handleDeleteUser(user.id);
      navigate("/");
    } catch (err) {
      console.error("Failed to delete user:", err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-12 p-8 space-y-8">
      <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent mb-8">
        Account Settings
      </h1>
      
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl border-2 border-amber-500/20">
        <h2 className="text-2xl font-semibold text-amber-400 mb-6">👤 User Information</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg border border-gray-700">
            <span className="text-gray-400 font-semibold">Username:</span>
            <span className="text-white font-bold text-lg">{user.username}</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg border border-gray-700">
            <span className="text-gray-400 font-semibold">Email:</span>
            <span className="text-white font-bold text-lg">{user.email}</span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-red-900/30 to-red-800/30 p-8 rounded-2xl shadow-xl border-2 border-red-500/50">
        <h2 className="text-2xl font-semibold text-red-400 mb-4 flex items-center gap-2">
          ⚠️ Danger Zone
        </h2>
        <p className="text-gray-300 mb-6 bg-red-900/20 p-4 rounded-lg border border-red-500/30">
          ⚠️ <strong>Warning:</strong> Deleting your account is permanent and cannot be undone. 
          All your data, including your card collection and price alerts, will be permanently deleted.
        </p>
        <Button
          onClick={handleDeleteAndNavigate}
          variant="danger"
          className="w-full md:w-auto"
        >
          🗑️ Delete Account Permanently
        </Button>
      </div>
    </div>
  );
}

export default Account;
