import { Card } from "@/components/ui/Card";

type SummaryCardProps = {
  title: string;
  amount: string;
  percentChange: number;
  icon: React.ReactNode;
};

const SummaryCard = ({ title, amount, percentChange, icon }: SummaryCardProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="p-6">
        <div className="flex items-center">
          <div className="rounded-md bg-primary-100 p-3 dark:bg-primary-900/20">
            {icon}
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-muted-foreground truncate">
                {title}
              </dt>
              <dd>
                <div className="text-lg font-medium text-foreground">
                  {amount}
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div className={`px-6 py-2 ${
        percentChange >= 0 
          ? "bg-category-food/30 dark:bg-category-food/10" 
          : "bg-category-health/30 dark:bg-category-health/10"
      }`}>
        <div className="text-sm flex items-center">
          {percentChange >= 0 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-green-600 dark:text-green-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m18 15-6-6-6 6" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-red-500 dark:text-red-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          )}
          <span
            className={`ml-1 font-medium ${
              percentChange >= 0 
                ? "text-green-700 dark:text-green-400" 
                : "text-red-600 dark:text-red-400"
            }`}
          >
            {Math.abs(percentChange)}% from last month
          </span>
        </div>
      </div>
    </Card>
  );
};

export default function SummaryCards() {
  // Ces données seraient normalement récupérées depuis la base de données
  const summaryData = [
    {
      title: "Total Expenses",
      amount: "$4,890.84",
      percentChange: 12,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-primary-600 dark:text-primary-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      title: "Budget Remaining",
      amount: "$2,109.16",
      percentChange: -8,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-primary-600 dark:text-primary-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6H4c-1 0-2 .5-2 2v10c0 1.5 1 2 2 2h16c1 0 2-.5 2-2V8c0-1.5-1-2-2-2Z" />
          <path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          <path d="M17 16a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2" />
        </svg>
      ),
    },
    {
      title: "Upcoming Payments",
      amount: "$750.00",
      percentChange: 0,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-primary-600 dark:text-primary-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="14" x="2" y="5" rx="2" />
          <line x1="2" x2="22" y1="10" y2="10" />
        </svg>
      ),
    },
    {
      title: "Monthly Savings",
      amount: "$1,250.00",
      percentChange: 5,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-primary-600 dark:text-primary-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 11v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z" />
          <path d="M21 13V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16v-3" />
        </svg>
      ),
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {summaryData.map((card, index) => (
        <SummaryCard
          key={index}
          title={card.title}
          amount={card.amount}
          percentChange={card.percentChange}
          icon={card.icon}
        />
      ))}
    </div>
  );
}