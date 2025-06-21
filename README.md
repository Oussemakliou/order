# 🎯 Tuniform Order Management System

**Full Stack Developer Intern – Practical Test Implementation**

A modern order management dashboard built with **Next.js**, **shadcn/ui**, and **MySQL**.

---

## ✨ Features

- 🏠 **Home Page** - Welcome message with Tuniform logo
- 📊 **Dashboard** - Display orders in a structured table
- ➕ **Add Orders** - Modal form using shadcn/ui Dialog
- 🗄️ **MySQL Integration** - Persistent data storage
- 🎨 **Dark/Light Mode** - Theme switching capability
- 📱 **Responsive Design** - Works on all devices

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 15** | React framework with App Router |
| **shadcn/ui** | UI components (Tables, Dialogs, Buttons) |
| **MySQL** | Database for order persistence |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Styling |
| **Lucide React** | Icons |

---

## 📋 Prerequisites

Before running this project, ensure you have:

- **Node.js** (v18 or higher)
- **MySQL** (v8.0 or higher)
- **Git**

---

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd order
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Database Setup
Make sure MySQL is running on your machine:

**Windows:**
```bash
net start mysql
```

**macOS/Linux:**
```bash
sudo systemctl start mysql
# or
brew services start mysql
```

### 4. Environment Configuration
The application will automatically create the database, but you can verify the connection settings in `src/lib/db.ts`:

```typescript
// Default MySQL connection settings
Host: localhost
Port: 3306
User: root
Password: 123456789
Database: tuniform_orders (auto-created)
```

### 5. Run the Application
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
order/
├── src/
│   ├── app/
│   │   ├── api/orders/          # API routes (GET, POST)
│   │   ├── dashboard/           # Dashboard page
│   │   ├── layout.tsx           # Root layout with ThemeProvider
│   │   └── page.tsx             # Home page
│   ├── components/
│   │   ├── layout/
│   │   │   └── Sidebar.tsx      # Navigation sidebar
│   │   ├── order/
│   │   │   └── AddOrderModal.tsx # shadcn/ui Dialog modal
│   │   └── ui/                  # shadcn/ui components
│   │       ├── button.tsx
│   │       ├── dialog.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       └── table.tsx
│   ├── contexts/
│   │   └── ThemeContext.tsx     # Dark/Light mode management
│   ├── lib/
│   │   ├── db.ts                # MySQL connection & queries
│   │   └── utils.ts             # Utilities
│   └── types/
│       └── order.ts             # TypeScript interfaces
├── public/
│   └── image/                   # Tuniform logo
├── components.json              # shadcn/ui configuration
└── README.md
```

---

## 🎯 Test Requirements Compliance

| Requirement | Status | Implementation |
|-------------|--------|----------------|
| **Next.js** | ✅ | Next.js 15 with App Router |
| **shadcn/ui** | ✅ | Table, Dialog, Button, Input, Label |
| **MySQL** | ✅ | Full integration with auto-setup |
| **Sidebar Layout** | ✅ | Fixed navigation (Home, Dashboard) |
| **Home Page** | ✅ | Welcome message + Tuniform logo |
| **Dashboard** | ✅ | Orders table (id, name, email, createdAt) |
| **Add Order Modal** | ✅ | shadcn/ui Dialog with form |
| **Data Persistence** | ✅ | MySQL storage & retrieval |
| **Clean Structure** | ✅ | Well-organized codebase |

---

## 🔌 API Endpoints

### **GET** `/api/orders`
Retrieves all orders from the database.

**Response:**
```json
[
  {
    "id": 1,
    "customer_name": "John Doe",
    "email": "john@example.com",
    "created_at": "2025-06-21T10:30:00.000Z"
  }
]
```

### **POST** `/api/orders`
Creates a new order.

**Request Body:**
```json
{
  "customerName": "Jane Smith",
  "email": "jane@example.com"
}
```

**Response:**
```json
{
  "id": 2,
  "customer_name": "Jane Smith",
  "email": "jane@example.com",
  "created_at": "2025-06-21T10:35:00.000Z"
}
```

---

## 🗄️ Database Schema

The application automatically creates this table structure:

```sql
CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

---

## 🎨 Features Showcase

### 🏠 **Home Page**
- Clean welcome interface
- Tuniform logo display
- Quick navigation to Dashboard
- Dark/Light mode support

### 📊 **Dashboard**
- **shadcn/ui Table** component for orders display
- Real-time data from MySQL
- Responsive design
- Loading states

### ➕ **Add Order Modal**
- **shadcn/ui Dialog** component
- Form validation
- **shadcn/ui Input** and **Label** components
- Success feedback
- Auto-refresh order list

### 🎯 **Additional Features**
- Dark/Light mode toggle
- MySQL auto-setup
- TypeScript type safety
- Clean error handling

---

## 🔧 Commands

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm start           # Start production server

# Database
npm run init-db     # Initialize database manually

# Code Quality
npm run lint        # Run ESLint
```

---

## 🚨 Troubleshooting

### **Database Connection Issues**
1. Ensure MySQL is running: `net start mysql` (Windows)
2. Check MySQL credentials in `src/lib/db.ts`
3. Verify port 3306 is available

### **Build Errors**
1. Clear cache: `rm -rf .next`
2. Reinstall: `rm -rf node_modules && npm install`

### **Port Already in Use**
The application will automatically use an available port (e.g., 3001, 3002).

---

## 📸 Screenshots
![1](https://github.com/user-attachments/assets/155f5940-b336-4ed5-a227-ebe748e02657)
+![3](https://github.com/user-attachments/assets/a3ec77d6-47c5-4996-80c8-4a58a4a25dd4)


![4](https://github.com/user-attachments/assets/c3fe32fc-6710-46e1-a659-af76e016b2d4)

![2](https://github.com/user-attachments/assets/30a00e54-0117-42c9-83bf-f5ee15b565aa)


The application includes:
- **Responsive sidebar** with Home/Dashboard navigation
- **Modern table interface** using shadcn/ui components
- **Professional modal dialogs** for order creation
- **Dark/Light mode** support throughout

---

## 🎯 **Test Completion Summary**

This implementation **fully satisfies** all Tuniform test requirements:

✅ **Next.js** - Modern App Router implementation  
✅ **shadcn/ui** - Professional UI components  
✅ **MySQL** - Robust database integration  
✅ **Complete functionality** - All features working  
✅ **Clean architecture** - Well-structured codebase  
✅ **Professional README** - Comprehensive documentation  

---

**Built with ❤️ for Tuniform**  
*Full Stack Developer Intern Practical Test*

# Installer mysql2
npm install mysql2
