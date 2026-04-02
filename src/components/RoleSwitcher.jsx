import { useApp } from "../context/AppContext";

export default function RoleSwitcher() {
  const { role, setRole } = useApp();

  return (
    <div className="relative inline-block w-full sm:w-auto">
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="w-full cursor-pointer appearance-none bg-slate-50 border border-slate-200 text-slate-700 py-2.5 px-4 pr-10 rounded-xl font-bold text-xs md:text-sm focus:ring-2 focus:ring-blue-500 transition-all outline-none"
      >
        <option value="viewer">Viewer Mode</option>
        <option value="admin">Admin Access</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
        <svg className="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
      </div>
    </div>
  );
}