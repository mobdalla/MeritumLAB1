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
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { api } from "../api";
import { useNavigate } from "react-router-dom";
interface RegistrationFormData {
  nome: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export default function RegistrationForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationFormData>();

  const password = watch("password");
  const navigate = useNavigate();

  const onSubmit = async (data: RegistrationFormData) => {
    setError(null);

    try {
      await api("/auth/register", {
        method: "POST",
        body: JSON.stringify({
          nome: data.nome,
          email: data.email,
          phone: data.phone,
          password: data.password,
          role: "azienda"
        }),
      });
      toast.success("Registrazione completata!");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (err: any) {
      setError(err?.message ?? "Errore");
      toast.error("Registrazione Non completata!");
    }
  };
  /*  const onSubmit = async (data: RegistrationFormData) => {
    try {
      console.log("Dati registrazione:", data);

      // Simulazione chiamata API
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Registrazione completata con successo!");
    } catch (error) {
      toast.error("Errore durante la registrazione");
    }
  }; */

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Crea un account</CardTitle>
          <CardDescription>
            Inserisci i tuoi dati per registrarti
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
           <div className="space-y-2">
              <Label htmlFor="nome">Nome Societa</Label>
              <Input
                id="nome"
                {...register("nome", {
                  required: "IL nome Della Societa e obbligatorio",
                })}
                className={errors.NomeSocieta ? "border-red-500" : ""}
              />
              {errors.NomeSocieta && (
                <p className="text-sm text-red-500">
                  {errors.NomeSocieta.message}
                </p>
              )}
            </div>
            {/* EMAIL */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="mario.rossi@example.com"
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
                  placeholder="••••••••"
                  {...register("password", {
                    required: "La password è obbligatoria",
                    minLength: { value: 8, message: "Minimo 8 caratteri" },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                      message: "Serve una maiuscola, minuscola e numero",
                    },
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
            {/* CONFERMA PASSWORD */}
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Conferma Password</Label>

              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  {...register("confirmPassword", {
                    required: "Conferma la password",
                    validate: (value) =>
                      value === password || "Le password non corrispondono",
                  })}
                  className={
                    errors.confirmPassword ? "border-red-500 pr-10" : "pr-10"
                  }
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>

              {errors.confirmPassword && (
                <p className="text-sm text-red-500">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            {/* SUBMIT */}
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Registrazione in corso..." : "Registrati"}
            </Button>
            <p className="text-center text-sm text-gray-600">
              Hai già un account?{" "}
              <a href="/login" className="text-blue-600 hover:underline">
                Accedi
              </a>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
