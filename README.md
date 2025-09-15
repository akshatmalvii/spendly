# Spendly - AI-Powered Expense Tracker 💰

Spendly is a modern, full-stack web application designed to help users track their expenses, manage budgets, and gain financial clarity through AI-powered insights. It leverages a powerful tech stack to provide a seamless, secure, and intelligent user experience.

---

## Key Features ✨

* **AI-Powered Insights**: Get personalized financial advice and analysis of your spending patterns. The app uses an AI model to generate actionable tips and warnings.
* **Smart Categorization**: Automatically suggests categories for new expenses based on their description, powered by AI.
* **Interactive AI Q&A**: Ask questions about your spending habits and receive detailed, context-aware answers from the AI.
* **Interactive Dashboard**: Visualize your financial data with an interactive bar chart and key statistics like your highest, lowest, and average spending.
* **Secure Authentication**: User authentication is handled securely by Clerk, including sign-up, sign-in, and protected routes.
* **Full CRUD Functionality**: Users can easily add, view, and delete their expense records.
* **Responsive Design with Dark Mode**: The application is fully responsive and includes a beautiful, persistent dark mode for user comfort.

---

## Tech Stack 🛠️

| Category | Technology |
| :--- | :--- |
| **Frontend** | Next.js (App Router), React, TypeScript, Tailwind CSS, Chart.js |
| **Backend** | Next.js (Server Actions), Prisma ORM |
| **Database** | PostgreSQL |
| **AI** | OpenRouter (via `openai` SDK) with Deepseek Model |
| **Auth** | Clerk |
| **Linting** | ESLint |

---

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* Node.js (v18 or later)
* npm, yarn, or pnpm
* A PostgreSQL database

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/spendly.git](https://github.com/your-username/spendly.git)
    cd spendly
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a file named `.env.local` in the root of your project and add the following variables.

    ```env
    # PostgreSQL Database URL from your hosting provider
    DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"

    # Clerk Authentication Keys (get from your Clerk dashboard)
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
    CLERK_SECRET_KEY=sk_test_...

    # OpenRouter API Key
    OPENROUTER_API_KEY=sk-or-v1-...

    # Your app's base URL
    NEXT_PUBLIC_APP_URL="http://localhost:3000"
    ```

4.  **Push the database schema:**
    Run the Prisma command to sync your schema with your PostgreSQL database.
    ```bash
    npx prisma migrate dev
    ```

5.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
