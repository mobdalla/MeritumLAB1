import { useEffect, useState } from "react";
import CompleteProfileDialog from "./completeProfile.tsx";

export default function CompleteProfilePage() {
  const [open, setOpen] = useState(false);
  console.log("PAGE LOADED");
  // 🔍 controllo utente dopo login
  useEffect(() => {
    const checkUser = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log(token)
        if (!token) {
          console.error("Token mancante");
          return;
        }

        const res = await fetch("http://localhost:3000/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const user = await res.json();

        console.log("USER:", user);

        // 🔥 se manca qualcosa → apri dialog
        if (!user.role || !user.settore) {
          setOpen(true);
        } else {
          window.location.href = "/dashboard";
        }

      } catch (err) {
        console.error("Errore profile:", err);
      }
    };

    checkUser();
  }, []);

  // ✅ salva dati nel backend
  const handleComplete = async (data: {
    name: string;
    role: string;
    sector: string;
  }) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("Token mancante");
        return;
      }

      await fetch("http://localhost:3000/complete-profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          role: data.role,
          settore: data.sector, // ⚠️ mapping importante
        }),
      });

      console.log("Profilo completato");

      setOpen(false);

      // 🔥 redirect finale
      window.location.href = "/dashboard";

    } catch (err) {
      console.error("Errore salvataggio:", err);
    }
  };

  return (
    <div>
      <CompleteProfileDialog
        isOpen={open}
        onComplete={handleComplete}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}
