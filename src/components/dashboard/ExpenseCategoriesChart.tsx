"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

type CategoryType = "food" | "entertainment" | "transportation" | "shopping" | "health" | "other";

type CategoryData = {
  id: string;
  name: string;
  amount: number;
  type: CategoryType;
  percentage: number;
};

export default function ExpenseCategoriesChart() {
  // Ces données seraient normalement récupérées depuis la base de données
  const categories: CategoryData[] = [
    {
      id: "1",
      name: "Food & Groceries",
      amount: 480,
      type: "food",
      percentage: 30,
    },
    {
      id: "2",
      name: "Entertainment",
      amount: 250,
      type: "entertainment",
      percentage: 15,
    },
    {
      id: "3",
      name: "Transportation",
      amount: 120,
      type: "transportation",
      percentage: 8,
    },
    {
      id: "4",
      name: "Shopping",
      amount: 350,
      type: "shopping",
      percentage: 22,
    },
    {
      id: "5",
      name: "Other",
      amount: 410,
      type: "other",
      percentage: 25,
    },
  ];

  // État pour les animations du graphique
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Déclencher l'animation après le rendu initial
    setAnimate(true);
  }, []);

  // Tri des catégories par montant décroissant
  const sortedCategories = [...categories].sort((a, b) => b.amount - a.amount);

  // Obtenir la couleur variable en fonction de la catégorie
  const getCategoryColor = (category: CategoryType) => {
    return `var(--category-${category})`;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Expense Categories</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative h-60 mx-auto">
          {/* Graphique en anneau */}
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="var(--secondary)"
              strokeWidth="20"
              className="dark:opacity-20"
            />
            
            {/* Segments du graphique */}
            {sortedCategories.map((category, index) => {
              // Calculer les positions sur le cercle
              const circumference = 2 * Math.PI * 40;
              let offset = 0;
              
              // Calculer le décalage pour chaque segment
              for (let i = 0; i < index; i++) {
                offset += (sortedCategories[i].percentage / 100) * circumference;
              }
              
              const strokeDasharray = `${(category.percentage / 100) * circumference} ${circumference}`;
              const strokeDashoffset = circumference - offset;
              
              return (
                <circle
                  key={category.id}
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke={getCategoryColor(category.type)}
                  strokeWidth="20"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={animate ? -strokeDashoffset : circumference}
                  className="transition-all duration-1000 ease-in-out"
                  transform="rotate(-90 50 50)"
                />
              );
            })}
            
            {/* Cercle central */}
            <circle cx="50" cy="50" r="30" fill="var(--card)" />
            
            {/* Total au centre */}
            <text
              x="50"
              y="48"
              textAnchor="middle"
              className="text-3xl font-bold fill-foreground"
              dominantBaseline="middle"
            >
              ${sortedCategories.reduce((sum, cat) => sum + cat.amount, 0).toFixed(0)}
            </text>
            <text
              x="50"
              y="58"
              textAnchor="middle"
              className="text-xs fill-muted-foreground"
              dominantBaseline="middle"
            >
              total spent
            </text>
          </svg>
        </div>
        
        {/* Légende */}
        <div className="mt-6 space-y-2">
          {sortedCategories.map((category) => (
            <div key={category.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <div
                  className="h-3 w-3 rounded-full mr-2"
                  style={{ backgroundColor: getCategoryColor(category.type) }}
                ></div>
                <span className="text-sm text-muted-foreground">
                  {category.name}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-foreground">
                  ${category.amount}
                </span>
                <span className="text-sm text-muted-foreground">
                  ({category.percentage}%)
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}