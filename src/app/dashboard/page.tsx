import SummaryCards from "@/components/dashboard/SummaryCards";
import RecentTransactions from "@/components/dashboard/RecentTransaction";
import BudgetProgress from "@/components/dashboard/BudgetProgress";
import ExpenseCategoriesChart from "@/components/dashboard/ExpenseCategoriesChart";
import UpcomingPayments from "@/components/dashboard/UpcomingPayments";
import QuickAddExpense from "@/components/dashboard/QuickAddExpense";

export const metadata = {
  title: "Dashboard - Expense Tracker",
  description: "View your expense summaries and financial overview",
};

export default async function DashboardPage() {
  // Ici, tu pourrais récupérer des données depuis ta base de données
  // en utilisant des Server Actions ou des API routes
  
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
        Dashboard
      </h1>
      
      {/* Summary Cards */}
      <SummaryCards />
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Left Column */}
        <div className="space-y-8 lg:col-span-2">
          {/* Budget Progress */}
          <BudgetProgress />
          
          {/* Recent Transactions */}
          <RecentTransactions />
        </div>
        
        {/* Right Column */}
        <div className="space-y-8">
          {/* Quick Add Expense */}
          <QuickAddExpense />
          
          {/* Expense Categories Chart */}
          <ExpenseCategoriesChart />
          
          {/* Upcoming Payments */}
          <UpcomingPayments />
        </div>
      </div>
    </div>
  );
}