import { useApp } from "../context/AppContext";
import { PieChart, Pie, Tooltip, LineChart, Line, XAxis, YAxis, ResponsiveContainer, Cell } from "recharts";

const COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#f43f5e'];

export default function Charts() {
  const { transactions } = useApp();

  const expenseData = Object.values(
    transactions
      .filter(t => t.type === "expense")
      .reduce((acc, t) => {
        acc[t.category] = acc[t.category] || { name: t.category, value: 0 };
        acc[t.category].value += t.amount;
        return acc;
      }, {})
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
      {/* Spending Breakdown Card */}
      <div className="bg-white p-4 md:p-6 rounded-2xl border border-slate-100 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-4 text-base md:text-lg">Spending Breakdown</h3>
        <div className="h-[250px] md:h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie 
                data={expenseData} 
                dataKey="value" 
                nameKey="name" 
                innerRadius="60%" 
                outerRadius="80%" 
                paddingAngle={5}
              >
                {expenseData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} 
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Trend Card */}
      <div className="bg-white p-4 md:p-6 rounded-2xl border border-slate-100 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-4 text-base md:text-lg">Transaction Trend</h3>
        <div className="h-[250px] md:h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={transactions}>
              <XAxis dataKey="date" stroke="#94a3b8" fontSize={10} tickLine={false} axisLine={false} />
              <YAxis stroke="#94a3b8" fontSize={10} tickLine={false} axisLine={false} />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="amount" 
                stroke="#6366f1" 
                strokeWidth={3} 
                dot={{ r: 3 }} 
                activeDot={{ r: 6 }} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}