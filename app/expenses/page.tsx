// app/expenses/page.tsx → the "/expenses" route.
//
// This is a SERVER component (no "use client" at the top).
// It runs on the server — great for fetching data.
// No interactivity here, so we don't need the browser at all.

import ExpenseCard from "@/components/ExpenseCard";
import { db } from "@/lib/db";

// // Hardcoded for now — we wire this up to a real database in Part 3.
// const expenses = [
//   { id: 1, title: "Lunch with team", amount: 47.5, date: "2026-05-08" },
//   { id: 2, title: "AWS hosting", amount: 120.0, date: "2026-05-01" },
//   { id: 3, title: "Office supplies", amount: 23.99, date: "2026-04-28" },
// ];

type Expense = {
  id: string
  title: string
  amount: number
  date: Date
  createdAt: Date
}

export default async function ExpensesPage() {

  //await new Promise((resolve) => setTimeout(resolve, 2000));
  //throw new Error("Failed to load expenses");

  const expenses = await db.expense.findMany();

  return (
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Expenses</h1>
      {expenses.map((expense) => (
        <ExpenseCard
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </main>
  );
}
