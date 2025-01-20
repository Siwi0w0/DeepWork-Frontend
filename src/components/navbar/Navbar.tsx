import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAvatar } from "../../content/AvatarContext";

function Navbar() {
  const navigate = useNavigate();
  const { avatarUrl } = useAvatar();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    alert("You have been logged out.");
    navigate("/");
  };

  const [isFirstLogin, setIsFirstLogin] = useState<boolean>(false);

  useEffect(() => {
    // Check if it's the user's first login
    const firstLogin = localStorage.getItem("isFirstLogin");

    if (firstLogin === "true") {
      setIsFirstLogin(true); // If it's the first login, show the "New" badge
    }
  }, []);

  const handleLogin = () => {
    // This can be triggered after the user logs in for the first time
    localStorage.setItem("isFirstLogin", "false"); // Set it to false after login
  };

  const goToHome = () => {
    navigate("/home");
  };

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <button onClick={goToHome} className="btn btn-ghost text-xl">
            Deep Work
          </button>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={
                    avatarUrl ||
                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link
                  to="/profile"
                  className="justify-between"
                  onClick={handleLogin}
                >
                  Profile
                  {isFirstLogin && <span className="badge">New</span>}
                </Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
