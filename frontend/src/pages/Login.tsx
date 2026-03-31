import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

import { useNavigate } from "react-router-dom";
import { api } from "../api";
import { useForm } from "react-hook-form";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

interface LoginForm {
  email: string;
  password: string;
}

export function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>();
  const navigate = useNavigate();
  const onSubmit = async (e: LoginForm) => {
    try {
      const data = await api<{ token: string; nome: string; email: string }>(
        "/auth/login",
        {
          method: "POST",
          body: JSON.stringify({
            email: e.email,
            password: e.password,
          }),
        },
      );

      console.log("data dal login:", data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (err: any) {
      setError(err?.message ?? "Errore login");
    }
  };

  /*
  const onSubmit = async (data: LoginForm) => {
    try {
      console.log("Login:", data);

      // simulazione API
      await new Promise((r) => setTimeout(r, 1000));

      toast.success("Login effettuato con successo!");
    } catch (err) {
      toast.error("Credenziali non valide");
    }
  };
*/
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Accedi</CardTitle>
          <CardDescription>
            Inserisci le tue credenziali per continuare
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* EMAIL */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                //placeholder="mario.rossi@example.com"
                {...register("email", {
                  required: "L'email è obbligatoria",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Email non valida",
                  },
                })}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* PASSWORD */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>

              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  // placeholder="••••••••"
                  {...register("password", {
                    required: "La password è obbligatoria",
                  })}
                  className={errors.password ? "border-red-500 pr-10" : "pr-10"}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>

              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* SUBMIT */}
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Accesso in corso..." : "Accedi"}
            </Button>

            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={() => {
                window.location.href =
                  "http://localhost:3000/auth/google";
              }}
            >
              Accedi con Google
            </Button>

            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={() => {
                window.location.href =
                  "http://localhost:8080/oauth2/authorization/facebook";
              }}
            >
              Accedi con Facebook
            </Button>
            <p className="text-center text-sm text-gray-600">
              Non hai un account?{" "}
              <a href="/register" className="text-blue-600 hover:underline">
                Registrati
              </a>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
export default Login;
