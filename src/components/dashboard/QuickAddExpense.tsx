"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

type CategoryType = "food" | "entertainment" | "transportation" | "shopping" | "health" | "other";

type Category = {
  id: string;
  name: string;
  type: CategoryType;
};

export default function QuickAddExpense() {
  // Ces données seraient normalement récupérées depuis la base de données
  const categories: Category[] = [
    { id: "1", name: "Food", type: "food" },
    { id: "2", name: "Entertainment", type: "entertainment" },
    { id: "3", name: "Transportation", type: "transportation" },
    { id: "4", name: "Shopping", type: "shopping" },
    { id: "5", name: "Health", type: "health" },
    { id: "6", name: "Other", type: "other" },
  ];

  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  // Obtenir la couleur variable en fonction de la catégorie
  const getCategoryColor = (type: CategoryType) => {
    return `var(--category-${type})`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Ici, tu implémenteras la logique pour sauvegarder la dépense
    console.log({
      amount: parseFloat(amount),
      description,
      categoryId: selectedCategory,
      date,
    });
    
    // Réinitialisation du formulaire
    setAmount("");
    setDescription("");
    setSelectedCategory("");
    setDate(new Date().toISOString().split("T")[0]);
    
    // Afficher une notification de succès (à implémenter plus tard)
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Add Expense</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-foreground"
            >
              Amount ($)
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-muted-foreground sm:text-sm">$</span>
              </div>
              <input
                type="number"
                name="amount"
                id="amount"
                className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-7 pr-12 sm:text-sm border-input bg-background rounded-md py-2 dark:border-input dark:text-foreground"
                placeholder="0.00"
                step="0.01"
                min="0"
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>
          
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-foreground"
            >
              Description
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="description"
                id="description"
                className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-input bg-background rounded-md py-2 px-3 dark:border-input dark:text-foreground"
                placeholder="Grocery shopping, coffee, etc."
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-foreground"
            >
              Category
            </label>
            <div className="mt-1 grid grid-cols-3 gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  className={`flex flex-col items-center justify-center p-2 rounded-md transition-colors ${
                    selectedCategory === category.id
                      ? "ring-2 ring-offset-2 ring-primary-500 dark:ring-offset-background"
                      : "hover:bg-secondary dark:hover:bg-secondary/20"
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <div
                    className="w-8 h-8 rounded-full mb-1 flex items-center justify-center text-dark-background dark:text-background"
                    style={{ backgroundColor: getCategoryColor(category.type) }}
                  >
                    {category.name.charAt(0)}
                  </div>
                  <span className="text-xs text-foreground">
                    {category.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-foreground"
            >
              Date
            </label>
            <div className="mt-1">
              <input
                type="date"
                name="date"
                id="date"
                className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-input bg-background rounded-md py-2 px-3 dark:border-input dark:text-foreground"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:ring-offset-background"
            >
              Add Expense
            </button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}