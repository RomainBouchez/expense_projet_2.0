import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

type Payment = {
  id: string;
  name: string;
  amount: number;
  date: string;
  type: "entertainment" | "health" | "other";
  logoUrl?: string;
};

export default function UpcomingPayments() {
  // Ces données seraient normalement récupérées depuis la base de données
  const payments: Payment[] = [
    {
      id: "1",
      name: "Netflix",
      amount: 15.99,
      date: "2025-04-05",
      type: "entertainment"
    },
    {
      id: "2",
      name: "Spotify",
      amount: 9.99,
      date: "2025-04-12",
      type: "entertainment"
    },
    {
      id: "3",
      name: "Gym Membership",
      amount: 49.99,
      date: "2025-04-15",
      type: "health"
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

  // Calculer le nombre de jours restants
  const getDaysRemaining = (dateString: string) => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const paymentDate = new Date(dateString);
    paymentDate.setHours(0, 0, 0, 0);
    
    const diffTime = paymentDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays;
  };
  
  // Obtenir la couleur de fond pour l'indicateur de jours restants
  const getDaysRemainingColor = (days: number) => {
    if (days <= 3) return "bg-category-health/30 text-category-health dark:bg-category-health/20 dark:text-category-health/90";
    if (days <= 7) return "bg-category-transportation/30 text-category-transportation dark:bg-category-transportation/20 dark:text-category-transportation/90";
    return "bg-category-food/30 text-category-food dark:bg-category-food/20 dark:text-category-food/90";
  };

  // Obtenir la couleur variable en fonction du type
  const getTypeColor = (type: string) => {
    return `var(--category-${type})`;
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Upcoming Payments</CardTitle>
        <a
          href="/memberships"
          className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
        >
          View all
        </a>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {payments.map((payment) => {
            const daysRemaining = getDaysRemaining(payment.date);
            
            return (
              <div key={payment.id} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div 
                    className="flex h-10 w-10 items-center justify-center rounded-full text-white dark:text-gray-900"
                    style={{ backgroundColor: getTypeColor(payment.type) }}
                  >
                    {payment.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-foreground">
                      {payment.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      ${payment.amount.toFixed(2)} • {formatDate(payment.date)}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getDaysRemainingColor(daysRemaining)}`}
                  >
                    {daysRemaining === 0
                      ? "Today"
                      : daysRemaining === 1
                      ? "Tomorrow"
                      : `${daysRemaining} days`}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}