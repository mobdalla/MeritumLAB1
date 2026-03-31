// src/pages/Dashboard.tsx
import React, { useEffect, useState } from "react";
import { api } from "../api";
import { LeftSidebar } from "../components/dash/Leftbar";
import { StatsProgressCard } from "../components/dash/StatsProgressCard.tsx";
import { SubscriptionCard } from "../components/dash/SubscriptionCard.tsx";
import { CircularStatsCard } from "../components/dash/CircularStatsCard.tsx";
import { SkillsBarChart } from "../components/dash/SkillsBarChart.tsx";
import { HistoryChart } from "../components/dash/HistoryChart";
import { TopNavbar } from "../components/dash/TopNavbar";
import { CandidatesList } from "../pages/Candidati.tsx";
//import { IQuiz, IUser } from "../types";
import { useNavigate } from "react-router-dom";

import { QuizPage } from "../components/dash/QuizPage";
const Dashboard: React.FC = () => {
  const [me, setMe] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [scoreInput, setScoreInput] = useState<number | "">("");
  const [assignQuizId, setAssignQuizId] = useState("");
  const navigate = useNavigate();

  const [profile, setProfile] = useState<{
    nome: string;
    cognome: string;
    email: string;
    role: string;
  } | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const [activeSection, setActiveSection] = useState("dashboard");
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const load = async () => {
    setLoading(true);
    try {
      const userProfile = await api<{
        user: {
          nome: string;
          cognome: string;
          email: string;
          role: string;
          id: string;
        };
      }>("/auth/profile");
      setProfile(userProfile.user);
      console.log(userProfile.user._id);
      localStorage.setItem("role", userProfile.user.role);
      if (userProfile.user.role == "candidato") {
        localStorage.setItem("userId", userProfile.user._id);
        localStorage.setItem("nome", userProfile.user.nome);
        localStorage.setItem("email", userProfile.user.email);
        localStorage.setItem("cognome", userProfile.user.cognome);
      } else {
        localStorage.setItem("aziendaId", userProfile.user._id);
        localStorage.setItem("nome", userProfile.user.nome);
        localStorage.setItem("email", userProfile.user.email);
        localStorage.setItem("cognome", " ");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    if (activeSection === "dashboard") {
      fetchdata();
    }
  }, [activeSection]);
  const Az = localStorage.getItem("aziendaId");

  const fetchdata = async () => {
    const UserUrl = "http://localhost:8081/api/form-submit/update";

    try {
      const response = await fetch(UserUrl, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ aziendaId: Az }),
      });
    } catch (error) {
      console.log("errore durante il fetch dei dati");
    }
  };
  const tu = {
    nome: localStorage.getItem("nome"),
    cognome: localStorage.getItem("cognome"),
    email: profile?.email,
  };
  const assignQuiz = async () => {
    if (!assignQuizId) return;
    await api<IUser>("/quiz/assign", {
      method: "PUT",
      body: JSON.stringify({ quizId: assignQuizId }),
    });
    await load();
    setAssignQuizId("");
  };

  if (loading) return <p>Loading...</p>;
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 overflow-hidden">
        <LeftSidebar
          user={tu}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />

        <main
          className="flex-1 overflow-y-auto p-8"
          style={{
            background:
              "linear-gradient(135deg, #f5e6d3 0%, #f0d9b5 50%, #e8c896 100%)",
          }}
        >
          {activeSection === "dashboard" && (
            <div className="max-w-7xl mx-auto">
              <div className="bg-gradient-to-br from-yellow-50/90 to-orange-50/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <SubscriptionCard />
                  <CircularStatsCard />
                  <SkillsBarChart />

                  <StatsProgressCard />

                  <HistoryChart />
                </div>
              </div>
            </div>
          )}

          {activeSection === "quiz" && <QuizPage />}
          {activeSection === "candidati" && <CandidatesList />}
          {activeSection === "chat" && (
            <div className="max-w-7xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold text-gray-900">Chat</h2>
                <p className="text-gray-600 mt-4">Sezione Chat in arrivo...</p>
              </div>
            </div>
          )}

          {activeSection === "statistics" && (
            <div className="max-w-7xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold text-gray-900">
                  Statistiche
                </h2>
                <p className="text-gray-600 mt-4">
                  Sezione Statistiche in arrivo...
                </p>
              </div>
            </div>
          )}

          {activeSection === "allegati" && (
            <div className="max-w-7xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold text-gray-900">Allegati</h2>
                <p className="text-gray-600 mt-4">
                  Sezione Allegati in arrivo...
                </p>
              </div>
            </div>
          )}

          {activeSection === "impostazioni" && (
            <div className="max-w-7xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold text-gray-900">
                  Impostazioni
                </h2>
                <p className="text-gray-600 mt-4">
                  Sezione Impostazioni in arrivo...
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
