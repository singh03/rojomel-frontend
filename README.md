
---

## ✅ `/frontend/README.md`

```markdown
# Rojomel Frontend - React + MUI

This is the frontend for the Rojomel app — a personal finance tracker that supports income, expense, and passbook-like balance tracking per customer.

---

## 🛠 Tech Stack

- React + TypeScript
- Material UI (MUI)
- Axios (for API calls)
- Day.js (for date handling)

---

## 🚀 Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/rojomel-frontend.git
cd rojomel-frontend
```

### 2. Install dependencies
bash
```
npm install
# or
yarn install
```
### 3. Run the app
bash
```
npm start
# or
yarn start
```
App runs at http://localhost:5173 and connects to the backend at http://localhost:9000

## 🔄 Features
### 💼 Select existing customer or create a new one

### 💰 Add income or expense entries with date

### 📘 Auto-calculates running outstanding balance

### 📋 Paginated views for:

  All entries
  
  Only income entries
  
  Only expense entries
  
  All customers

### 📂 Folder Highlights
  components/ – UI components like IncomeExpenseForm, SelectCustomer

  api/ – Axios-based API service files

  types/ – Shared types (e.g., FinanceDto, CustomerOptionType)

  pages/ – Paginated tables (income/expense/customer views)

