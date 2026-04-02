import { useApp } from "../context/AppContext";

export default function SummaryCards() {
  const { transactions } = useApp();
  const income = transactions.filter(t => t.type === "income").reduce((a, b) => a + b.amount, 0);
  const expense = transactions.filter(t => t.type === "expense").reduce((a, b) => a + b.amount, 0);
  const balance = income - expense;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
      <Card title="Current Balance" value={balance} color="text-slate-900" sub="Available to spend" />
      <Card title="Total Income" value={income} color="text-emerald-600" sub="+12% from last month" />
      <Card title="Total Expenses" value={expense} color="text-rose-600" sub="Keep it under budget" />
    </div>
  );
}

const Card = ({ title, value, color, sub }) => (
  <div className="p-5 md:p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{title}</p>
    <h2 className={`text-2xl md:text-3xl font-black mt-1 ${color}`}>₹{value.toLocaleString()}</h2>
    <p className="text-[10px] text-slate-400 mt-2 italic font-medium">{sub}</p>
  </div>
);