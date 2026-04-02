import Dashboard from "./components/Dashboard";
import RoleSwitcher from "./components/RoleSwitcher";

export default function App() {
  return (
    // min-h-screen ensures the background covers the whole page
    // bg-slate-50 gives it a modern, soft "SaaS" look
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
      
      {/* Sticky Header with shadow and blur effect */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Simple Logo Icon placeholder */}
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">₹</span>
            </div>
            <h1 className="text-xl font-extrabold tracking-tight text-slate-800">
              Finance<span className="text-blue-600">Dash</span>
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-slate-500 hidden sm:block">Switch Role:</span>
            <RoleSwitcher />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Dashboard />
      </main>
      
      {/* Simple Footer */}
      <footer className="py-6 text-center text-slate-400 text-xs">
        © 2026 FinanceDash Internal Tool
      </footer>
    </div>
  );
}