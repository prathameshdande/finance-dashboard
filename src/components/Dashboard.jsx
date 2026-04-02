import SummaryCards from "./SummaryCards";
import Charts from "./Charts";
import Transactions from "./Transaction";
import Insights from "./Insights";

export default function Dashboard() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <SummaryCards />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Charts />
        </div>
        <div className="lg:col-span-1">
          <Insights />
        </div>
      </div>
      <Transactions />
    </div>
  );
}