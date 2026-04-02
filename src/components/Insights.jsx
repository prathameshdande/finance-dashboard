import { useApp } from "../context/AppContext";

export default function Insights() {
  const { transactions } = useApp();

  const expenses = transactions.filter((t) => t.type === "expense");

  const topCategory = Object.entries(
    expenses.reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {}),
  ).sort((a, b) => b[1] - a[1])[0];

  return (
    <div className="bg-gradient-to-br from-indigo-600 to-blue-700 p-6 rounded-2xl shadow-lg text-white">
      <h3 className="font-bold opacity-80 mb-4">Smart Insights</h3>
      {topCategory ? (
        <div>
          <p className="text-sm opacity-90">You're spending most on</p>
          <p className="text-2xl font-bold mt-1">{topCategory[0]}</p>
          <div className="mt-4 p-3 bg-white/10 rounded-xl border border-white/20">
            <p className="text-xs">Total: ₹{topCategory[1]}</p>
          </div>
        </div>
      ) : (
        <p>Analyzing your data...</p>
      )}
    </div>
  );
}
