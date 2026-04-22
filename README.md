# ShopLD E-commerce

A full-stack e-commerce web application built with ASP.NET Core, React, and PostgreSQL. The platform supports product browsing, user authentication with JWT, role-based authorization (Admin/Customer), and a complete admin dashboard for product management.

## Tech Stack

| Layer     | Technology                                      |
|-----------|--------------------------------------------------|
| Frontend  | React 18, Vite, Vanilla CSS, Axios, React Router |
| Backend   | ASP.NET Core 8 Web API, Entity Framework Core    |
| Database  | PostgreSQL (via Npgsql)                           |
| Auth      | JWT Bearer Tokens, BCrypt password hashing        |

## Key Features

- **Product Catalog** — Browse, search, and filter 27+ products across 5 categories.
- **Product Detail** — View full product information with custom quantity selection.
- **Shopping Cart** — Add, adjust quantity, remove items, and view real-time totals.
- **User Authentication** — Register and login with hashed passwords and JWT tokens.
- **Role-Based Authorization** — Admin and Customer roles. Write endpoints are protected.
- **Admin Dashboard** — Full CRUD interface for managing products (create, edit, delete).
- **Responsive Design** — Optimized for desktop, tablet, and mobile viewports.
- **Environment Variables** — API base URL configured via `.env` for flexible deployment.

## Project Structure

```
ecommerceweb/
├── Backend/                   # ASP.NET Core Web API
│   ├── Controllers/           # ProductsController, AuthController
│   ├── Data/                  # AppDbContext (EF Core)
│   ├── DTOs/                  # RegisterDto, LoginDto
│   ├── Models/                # Product, User entities
│   ├── Migrations/            # EF Core migrations
│   ├── Program.cs             # App configuration (JWT, CORS, EF Core)
│   └── appsettings.json       # Connection string, JWT settings
├── Front-end/                 # React + Vite SPA
│   ├── src/
│   │   ├── components/        # Header, ProductCard, ProductDetail, etc.
│   │   ├── context/           # AuthContext (global auth state)
│   │   ├── pages/             # Login, Register, AdminDashboard, About, Contact
│   │   ├── services/          # apiServices.js (Axios API layer)
│   │   ├── App.jsx            # Routing and layout
│   │   └── Home.css           # All styles
│   └── .env                   # VITE_API_BASE_URL
└── README.md
```

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [PostgreSQL](https://www.postgresql.org/download/) (running on `localhost:5432`)
- [EF Core CLI](https://learn.microsoft.com/en-us/ef/core/cli/dotnet) — install globally:
  ```bash
  dotnet tool install --global dotnet-ef
  ```

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd ecommerceweb
```

### 2. Configure the database

Open `Backend/appsettings.json` and verify the connection string matches your PostgreSQL setup:

```json
"ConnectionStrings": {
  "DefaultConnection": "Host=localhost;Port=5432;Database=shopLD;Username=postgres;Password=postgres"
}
```

Create the database in PostgreSQL if it does not exist:

```sql
CREATE DATABASE "shopLD";
```

### 3. Run database migrations

```bash
cd Backend
dotnet ef database update
```

This creates the `Products` and `Users` tables, and seeds 27 products.

### 4. Start the backend

```bash
dotnet run --urls http://localhost:5146
```

Verify the API is running by visiting: `http://localhost:5146/api/products`

### 5. Set up and start the frontend

Open a new terminal:

```bash
cd Front-end
npm install
```

Verify the `.env` file exists with the correct API URL:

```
VITE_API_BASE_URL=http://localhost:5146/api
```

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## Admin Setup

All new users are assigned the `Customer` role by default. To promote a user to Admin, run the following SQL command in PostgreSQL:

```sql
UPDATE "Users" SET "Role" = 'Admin' WHERE "Email" = 'your-email@example.com';
```

After updating the role, **log out and log back in** so the frontend receives a new JWT token containing the updated role claim. The admin dashboard button will then appear in the navigation bar.

## API Endpoints

| Method | Endpoint                  | Auth Required | Description              |
|--------|---------------------------|---------------|--------------------------|
| GET    | `/api/products`           | No            | List all products        |
| GET    | `/api/products/{id}`      | No            | Get product by ID        |
| POST   | `/api/products`           | Admin         | Create a new product     |
| PUT    | `/api/products/{id}`      | Admin         | Update an existing product |
| DELETE | `/api/products/{id}`      | Admin         | Delete a product         |
| POST   | `/api/auth/register`      | No            | Register a new user      |
| POST   | `/api/auth/login`         | No            | Login and receive JWT    |

## License

This project is for educational purposes.
