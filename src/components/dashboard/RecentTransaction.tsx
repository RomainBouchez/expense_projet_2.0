import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

type CategoryType = "food" | "entertainment" | "transportation" | "shopping" | "health" | "office" | "dining" | "other";

type Transaction = {
  id: string;
  description: string;
  amount: number;
  date: string;
  category: {
    name: string;
    type: CategoryType;
  };
};

export default function RecentTransactions() {
  // Ces données seraient normalement récupérées depuis la base de données
  const transactions: Transaction[] = [
    {
      id: "1",
      description: "Grocery Shopping",
      amount: 87.65,
      date: "2025-04-02",
      category: {
        name: "Food",
        type: "food",
      },
    },
    {
      id: "2",
      description: "Netflix Subscription",
      amount: 15.99,
      date: "2025-04-01",
      category: {
        name: "Entertainment",
        type: "entertainment",
      },
    },
    {
      id: "3",
      description: "Uber Ride",
      amount: 24.50,
      date: "2025-03-31",
      category: {
        name: "Transportation",
        type: "transportation",
      },
    },
    {
      id: "4",
      description: "Office Supplies",
      amount: 35.28,
      date: "2025-03-28",
      category: {
        name: "Office",
        type: "office",
      },
    },
    {
      id: "5",
      description: "Restaurant Dinner",
      amount: 78.92,
      date: "2025-03-27",
      category: {
        name: "Dining",
        type: "dining",
      },
    },
  ];

  // Formater la date au format lisible
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("fr-FR", {
      month: "short",
      day: "numeric",
    }).format(date);
  };

  // Obtenir la couleur variable en fonction de la catégorie
  const getCategoryColor = (category: CategoryType) => {
    const colorMap: Record<CategoryType, string> = {
      food: "var(--category-food)",
      entertainment: "var(--category-entertainment)",
      transportation: "var(--category-transportation)",
      shopping: "var(--category-shopping)",
      health: "var(--category-health)",
      office: "var(--category-other)",
      dining: "var(--category-food)",
      other: "var(--category-other)",
    };
    
    return colorMap[category] || colorMap.other;
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Transactions</CardTitle>
        <a href="/expenses" className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
          View all
        </a>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <div
                  className="rounded-full w-10 h-10 flex items-center justify-center text-white dark:text-gray-900"
                  style={{ backgroundColor: getCategoryColor(transaction.category.type) }}
                >
                  {transaction.category.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-foreground">
                    {transaction.description}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {transaction.category.name} • {formatDate(transaction.date)}
                  </p>
                </div>
              </div>
              <span className="text-sm font-medium text-foreground">
                -${transaction.amount.toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}