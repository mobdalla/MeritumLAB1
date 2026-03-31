import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

interface CompleteProfileDialogProps {
  isOpen: boolean;
  onComplete: (data: { name: string; role: string; sector: string }) => void;
  onClose: () => void;
}

export default function CompleteProfileDialog({
  isOpen,
  onComplete,
  onClose,
}: CompleteProfileDialogProps) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [settore, setSector] = useState("");
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault(); // Prevent form default submission first

  // Validate fields
  if (name.trim() && role.trim() && settore.trim()) {
    const token = localStorage.getItem("token");

    try {
      // Send POST request
      const response = await fetch("http://localhost:3000/auth/complete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ role, settore }),
      });

      if (!response.ok) {
        throw new Error("Failed to complete profile");
      }

      // Call the callback after successful POST
      onComplete({ name, role, settore });

      // Update local state
      setName(name);
      setRole(role);
      setSector(settore);

      // Redirect
      window.location.href = "/dashboard";
    } catch (error) {
      console.error(error);
      alert("There was an error completing your profile.");
    }
  } else {
    alert("Please fill in all fields.");
  }
};
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-xl border border-gray-200 p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            Completa il tuo profilo
          </DialogTitle>
          <DialogDescription>
            Inserisci le tue informazioni per completare la registrazione
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome completo *</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Mario Rossi"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="role">Ruolo *</Label>
            <Input
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="HR Manager"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="sector">Settore *</Label>
            <Input
              id="sector"
              value={settore}
              onChange={(e) => setSector(e.target.value)}
              placeholder="IT"
              required
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Annulla
            </Button>
            <Button
              type="submit"
              disabled={!name || !role || !settore}
            >
              Completa Profilo
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
