import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

type BudgetItem = {
  id: string;
  name: string;
  current: number;
  total: number;
  category: "food" | "entertainment" | "transportation" | "shopping" | "health" | "other";
};

export default function BudgetProgress() {
  // Ces données seraient normalement récupérées depuis la base de données
  const budgets: BudgetItem[] = [
    {
      id: "1",
      name: "Food & Groceries",
      current: 480,
      total: 600,
      category: "food",
    },
    {
      id: "2",
      name: "Entertainment",
      current: 250,
      total: 200,
      category: "entertainment",
    },
    {
      id: "3",
      name: "Transportation",
      current: 120,
      total: 300,
      category: "transportation",
    },
    {
      id: "4",
      name: "Shopping",
      current: 350,
      total: 400,
      category: "shopping",
    },
  ];

  // Calculer le pourcentage de progression
  const calculatePercentage = (current: number, total: number) => {
    return Math.min(Math.round((current / total) * 100), 100);
  };

  // Déterminer la couleur de la barre de progression
  const getProgressBarColor = (current: number, total: number, category: string) => {
    const percentage = calculatePercentage(current, total);
    if (percentage >= 90) return "bg-category-health dark:bg-category-health/80";
    if (percentage >= 75) return "bg-category-transportation dark:bg-category-transportation/80";
    return `bg-category-${category} dark:bg-category-${category}/80`;
  };

  // Obtenir la couleur variable en fonction de la catégorie
  const getCategoryColor = (category: string) => {
    return `var(--category-${category})`;
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Budget Progress</CardTitle>
        <a
          href="/budgets"
          className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
        >
          Manage budgets
        </a>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {budgets.map((budget) => (
            <div key={budget.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className="h-3 w-3 rounded-full mr-2"
                    style={{ backgroundColor: getCategoryColor(budget.category) }}
                  ></div>
                  <span className="text-sm font-medium text-foreground">
                    {budget.name}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">
                  ${budget.current} / ${budget.total}
                </span>
              </div>
              <div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary dark:bg-muted">
                <div
                  className={`absolute h-2 rounded-full transition-all duration-500 ease-in-out ${getProgressBarColor(
                    budget.current,
                    budget.total,
                    budget.category
                  )}`}
                  style={{
                    width: `${calculatePercentage(budget.current, budget.total)}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}