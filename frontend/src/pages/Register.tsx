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

interface RegistrationFormData {
  nome: string;
  cognome: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export default function RegistrationForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationFormData>();

  const password = watch("password");

  const onSubmit = async (data: RegistrationFormData) => {
    try {
      console.log("Dati registrazione:", data);

      // Simulazione chiamata API
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Registrazione completata con successo!");
    } catch (error) {
      toast.error("Errore durante la registrazione");
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Crea un account</CardTitle>
        <CardDescription>Inserisci i tuoi dati per registrarti</CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* NOME + COGNOME */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nome">Nome</Label>
              <Input
                id="nome"
                placeholder="Mario"
                {...register("nome", {
                  required: "Il nome è obbligatorio",
                  minLength: { value: 2, message: "Minimo 2 caratteri" },
                })}
                className={errors.nome ? "border-red-500" : ""}
              />
              {errors.nome && (
                <p className="text-sm text-red-500">{errors.nome.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="cognome">Cognome</Label>
              <Input
                id="cognome"
                placeholder="Rossi"
                {...register("cognome", {
                  required: "Il cognome è obbligatorio",
                  minLength: { value: 2, message: "Minimo 2 caratteri" },
                })}
                className={errors.cognome ? "border-red-500" : ""}
              />
              {errors.cognome && (
                <p className="text-sm text-red-500">{errors.cognome.message}</p>
              )}
            </div>
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

          {/* TELEFONO */}
          <div className="space-y-2">
            <Label htmlFor="phone">Telefono</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+39 123 456 7890"
              {...register("phone", {
                required: "Il numero di telefono è obbligatorio",
                pattern: {
                  value: /^[\d\s+()-]+$/,
                  message: "Numero non valido",
                },
              })}
              className={errors.phone ? "border-red-500" : ""}
            />
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone.message}</p>
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
              <p className="text-sm text-red-500">{errors.password.message}</p>
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
            <a href="#" className="text-blue-600 hover:underline">
              Accedi
            </a>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
