import { useApp } from "../context/AppContext";

export default function Transactions() {
  const { transactions, filter, setFilter, role, setTransactions } = useApp();

  const filtered = transactions.filter(t =>
    t.category.toLowerCase().includes(filter.toLowerCase())
  );

  const addTransaction = () => {
    const newTx = { id: Date.now(), date: "2026-04-01", amount: 1000, category: "Misc", type: "expense" };
    setTransactions([...transactions, newTx]);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden mt-8">
      {/* Header section stacks on mobile */}
      <div className="p-4 md:p-6 border-b border-slate-50 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="relative w-full sm:w-80">
          <input
            placeholder="Search transactions..."
            className="w-full pl-4 pr-4 py-2 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 text-sm transition-all"
            onChange={e => setFilter(e.target.value)}
          />
        </div>

        {role === "admin" && (
          <button 
            onClick={addTransaction} 
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all active:scale-95 shadow-md shadow-blue-200"
          >
            + Add New
          </button>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-slate-50/50 text-slate-500 text-[10px] md:text-xs uppercase tracking-widest">
              <th className="px-6 py-4 font-bold">Date</th>
              <th className="px-6 py-4 font-bold">Category</th>
              <th className="px-6 py-4 font-bold text-right">Amount</th>
              <th className="px-6 py-4 font-bold text-center">Type</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {filtered.map(t => (
              <tr key={t.id} className="hover:bg-blue-50/30 transition-colors group">
                <td className="px-6 py-4 text-sm text-slate-500">{t.date}</td>
                <td className="px-6 py-4 text-sm font-semibold text-slate-800">{t.category}</td>
                <td className="px-6 py-4 text-sm text-right font-black text-slate-900">₹{t.amount.toLocaleString()}</td>
                <td className="px-6 py-4 text-center">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${t.type === 'income' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                    {t.type}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}