
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Settings, 
  Package,
  FileText,
  CreditCard
} from 'lucide-react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

function NavItem({ icon, label, active }: NavItemProps) {
  return (
    <button
      className={`flex items-center gap-3 px-4 py-3 rounded-lg w-full transition-colors ${
        active
          ? 'bg-blue-50 text-blue-600'
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}

export function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
      </div>
      
      <nav className="flex-1 p-4 space-y-1">
        <NavItem icon={<LayoutDashboard size={20} />} label="Overview" active />
        <NavItem icon={<BarChart3 size={20} />} label="Analytics" />
        <NavItem icon={<ShoppingCart size={20} />} label="Orders" />
        <NavItem icon={<Package size={20} />} label="Products" />
        <NavItem icon={<Users size={20} />} label="Customers" />
        <NavItem icon={<FileText size={20} />} label="Reports" />
        <NavItem icon={<CreditCard size={20} />} label="Billing" />
        <NavItem icon={<Settings size={20} />} label="Settings" />
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <div className="bg-blue-50 rounded-lg p-4">
          <h4 className="text-sm font-medium text-gray-900 mb-1">Upgrade to Pro</h4>
          <p className="text-xs text-gray-600 mb-3">Unlock premium features</p>
          <button className="w-full bg-blue-600 text-white text-sm py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Upgrade Now
          </button>
        </div>
      </div>
    </aside>
  );
}
