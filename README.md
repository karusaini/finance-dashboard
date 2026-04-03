# Finance Dashboard

A modern, responsive **Finance Dashboard** built with **Next.js 13**, **TypeScript**, and **Tailwind CSS**.  
This dashboard allows users to track income and expenses, visualize trends, filter transactions, and manage data with admin privileges.

---

## 🔹 Features

- **User Roles**
  - `viewer`: Can only view transactions and charts.
  - `admin`: Can add, edit, and delete transactions.
- **Dark Mode Toggle**
- **Dashboard Components**
  - Summary Cards (Income, Expense, Balance)
  - Balance Trend Line Chart
  - Spending Breakdown Pie Chart
- **Transaction Management**
  - Add / Edit / Delete transactions (admin only)
  - Search and filter transactions by type and category
- **Responsive UI**
  - Fully mobile-friendly
  - Grid layout for cards and charts on large screens
  - Collapsible tables and modals on small screens
- **Animations & Hover Effects**
  - Modal animations
  - Hover highlight for table rows
  - Smooth UI transitions

---

## 🔹 Tech Stack

- **Next.js** (App Router, React Server Components)
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Recharts** for charts
- **Zustand** for state management
- **Radix UI / Base UI** for accessible components

---

## 🔹 Installation

1. Clone the repository:

```bash
git clone https://github.com/karusaini/finance-dashboard.git
cd finance-dashboard

Install dependencies:
npm install
# or
yarn install
Run the development server:
npm run dev
# or
yarn dev

Open http://localhost:3000
 in your browser.


 Project Structure
src/
 ├─ app/
 │   ├─ dashboard/       # Dashboard page with summary cards & charts
 │   ├─ transactions/    # Transactions page with filters & table
 ├─ components/
 │   ├─ ui/              # Reusable UI components (Button, Card, Dialog, Table)
 │   ├─ shared/          # Navbar, ThemeToggle, RoleSwitcher
 │   └─ transactions/    # TransactionForm, AddTransactionModal, EditTransactionModal, Filters
 ├─ store/
 │   └─ useTransactionStore.ts  # Zustand store for transactions & roles
 ├─ types/
 │   └─ transaction.ts          # Transaction type
 └─ data/
     └─ transactions.ts         # Mock transaction data


usage

Role Switching
Use the role switcher in the navbar to toggle between viewer and admin.
Add Transaction (Admin Only)
Click Add Transaction on the Transactions page.
Fill in amount, category, and type (Income/Expense).
Edit/Delete Transaction (Admin Only)
Use Edit and Delete buttons in the transactions table.
Filtering & Searching
Filter by type or category using the dropdowns.
Search transactions by category or amount using the search input.
Dashboard
View balance trends and spending breakdown in charts.
Summary cards show total income, total expense, and balance.



Future Improvements**


Connect to a real backend (Next.js API routes / Supabase / Firebase).
User authentication and persistent storage.
Export transactions as CSV or PDF.
Advanced analytics: monthly reports, recurring expenses, etc.
More chart types (bar charts, area charts, etc.).
Smooth animations for card counters.


License

This project is licensed under the MIT License.

Built with ❤️ using Next.js, Tailwind CSS, and React.
```
