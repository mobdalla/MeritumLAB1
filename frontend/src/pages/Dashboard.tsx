// src/pages/Dashboard.tsx
import React, { useEffect, useState } from "react";
import { api } from "../api";
//import { IQuiz, IUser } from "../types";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const [me, setMe] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [scoreInput, setScoreInput] = useState<number | "">("");
  const [assignQuizId, setAssignQuizId] = useState("");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const load = async () => {
    setLoading(true);
    try {
      const data = await api<IUser>("/quiz/me");
      setMe(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const saveScore = async () => {
    if (scoreInput === "") return;
    await api<IUser>("/quiz/score", {
      method: "PUT",
      body: JSON.stringify({ score: scoreInput }),
    });
    await load();
    setScoreInput("");
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
    <div style={{ maxWidth: 720 }}>
      <h2>Dashboard</h2>
      <button onClick={logout}>Logout</button>

      <section style={{ marginTop: 20 }}>
        <h3>Il tuo profilo</h3>
        <p>
          <strong>Email:</strong> {me?.email}
        </p>
        <p>
          <strong>Score:</strong> {me?.score ?? "non ancora"}
        </p>

        <h4>Quiz assegnato</h4>
        {me?.quiz ? (
          typeof me.quiz === "string" ? (
            <p>Quiz ID: {me.quiz}</p>
          ) : (
            <>
              <p>
                <strong>{(me.quiz as IQuiz).title}</strong>
              </p>
              <p>{(me.quiz as IQuiz).description}</p>
            </>
          )
        ) : (
          <p>Nessun quiz assegnato</p>
        )}
      </section>

      <section style={{ marginTop: 20 }}>
        <h4>Assegna un quiz (simulazione)</h4>
        <input
          placeholder="quizId"
          value={assignQuizId}
          onChange={(e) => setAssignQuizId(e.target.value)}
        />
        <button onClick={assignQuiz}>Assegna</button>
      </section>

      <section style={{ marginTop: 20 }}>
        <h4>Registra punteggio</h4>
        <input
          type="number"
          placeholder="score"
          value={scoreInput}
          onChange={(e) => setScoreInput(Number(e.target.value))}
        />
        <button onClick={saveScore}>Salva score</button>
      </section>
    </div>
  );
};

export default Dashboard;
