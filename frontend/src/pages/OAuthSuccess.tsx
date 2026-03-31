import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
export default function OAuthSuccess() {
  
  const navigate = useNavigate();
  useEffect(() => {
    const handleLogin = async () => {
      const params = new URLSearchParams(window.location.search);
      const token = params.get("token");

      if (!token) return;

      // 🔥 salva token
      localStorage.setItem("token", token);

      // 🔥 prendi dati utente
      const res = await fetch("http://localhost:3000/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const user = await res.json();
      console.log(user)
      // 🔥 DECISIONE
      if (!user.role || !user.settore) {
        navigate("/complete-profile");
      } else {
        navigate("/dashboard");
      }
    };

    handleLogin();
  }, []);

  return <div>Loading...</div>;
}
