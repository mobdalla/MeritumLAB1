import { User } from "lucide-react";

interface NavItemProps {
  label: string;
  active?: boolean;
  onClick: () => void;
}

function NavItem({ label, active, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full px-6 py-4 text-left font-bold text-sm transition-all ${
        active
          ? "bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg"
          : "bg-gradient-to-r from-amber-800 to-amber-700 text-white hover:from-orange-600 hover:to-orange-500"
      }`}
      style={{
        boxShadow: active
          ? "inset 0 2px 4px rgba(0,0,0,0.2)"
          : "inset 0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      {label}
    </button>
  );
}

interface LeftSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function LeftSidebar({
  activeSection,
  onSectionChange,
  user,
}: LeftSidebarProps) {
  return (
    <aside className="w-40 bg-gray-200 flex flex-col h-screen">
      {/* PROFILO */}
      <div className="bg-gray-300 p-4 flex flex-col items-center border-b border-gray-400">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg mb-2">
          <User size={40} className="text-gray-800" />
        </div>

        {user && (
          <div className="text-center text-xs">
            <p className="font-bold text-gray-800">
              {user.nome} {user.cognome}
            </p>
            <p className="text-gray-600 break-all">{user.email}</p>
          </div>
        )}
      </div>
      <nav className="flex-1 flex flex-col">
        <NavItem
          label="DASHBOARD"
          active={activeSection === "dashboard"}
          onClick={() => onSectionChange("dashboard")}
        />
        <NavItem
          label="CANDIDATI"
          active={activeSection === "candidati"}
          onClick={() => onSectionChange("candidati")}
        />
        <NavItem
          label="CHAT"
          active={activeSection === "chat"}
          onClick={() => onSectionChange("chat")}
        />
        <NavItem
          label="STATISTICS"
          active={activeSection === "statistics"}
          onClick={() => onSectionChange("statistics")}
        />
        <NavItem
          label="QUIZ"
          active={activeSection === "quiz"}
          onClick={() => onSectionChange("quiz")}
        />
        <NavItem
          label="ALLEGATI"
          active={activeSection === "allegati"}
          onClick={() => onSectionChange("allegati")}
        />
        <NavItem
          label="IMPOSTAZIONI"
          active={activeSection === "impostazioni"}
          onClick={() => onSectionChange("impostazioni")}
        />
      </nav>
    </aside>
  );
}
