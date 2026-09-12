const list = [
  // React cơ bản & Todo App
  { id: 1, text: "JSX Basics", completed: true },
  { id: 2, text: "Components", completed: true },
  { id: 3, text: "Props", completed: true },
  { id: 4, text: "Event Handling", completed: true },
  { id: 5, text: "useState", completed: true },
  { id: 6, text: "Controlled Input", completed: true },
  { id: 7, text: "Array State", completed: true },
  { id: 8, text: "Todo Object", completed: true },
  { id: 9, text: "Add Todo", completed: true },
  { id: 10, text: "Delete Todo", completed: true },
  { id: 11, text: "TodoItem Component", completed: true },
  { id: 12, text: "Toggle Complete", completed: true },
  { id: 13, text: "Edit Todo", completed: true },
  { id: 14, text: "TodoForm Component", completed: true },
  { id: 15, text: "TodoList Component", completed: true },
  { id: 16, text: "Todo Statistics", completed: true },
  { id: 17, text: "Filter Todo", completed: true },
  { id: 18, text: "localStorage", completed: true },

  // React Hooks & Core
  { id: 19, text: "Custom Hook", completed: true },
  { id: 20, text: "useEffect nâng cao", completed: true },
  { id: 21, text: "useRef", completed: true },
  { id: 22, text: "useMemo", completed: true },
  { id: 23, text: "useCallback", completed: true },
  { id: 24, text: "React.memo", completed: true },
  { id: 25, text: "Context API", completed: true },
  { id: 26, text: "Error Handling", completed: true },
  { id: 27, text: "Loading State", completed: true },
  { id: 28, text: "React Router", completed: false },
  { id: 29, text: "Fetch API", completed: true },
  { id: 30, text: "Axios", completed: false },

  // React nâng cao
  { id: 31, text: "CRUD với API", completed: false },
  { id: 32, text: "Form nâng cao", completed: false },
  { id: 33, text: "Form Validation", completed: false },
  { id: 34, text: "Search", completed: false },
  { id: 35, text: "Sort", completed: false },
  { id: 36, text: "Pagination", completed: false },
  { id: 37, text: "Authentication", completed: false },
  { id: 38, text: "Protected Routes", completed: false },
  { id: 39, text: "Redux Toolkit", completed: false },
  { id: 40, text: "Zustand", completed: false },
  { id: 41, text: "TanStack Query / React Query", completed: false },

  // CSS / UI / UX
  { id: 42, text: "CSS nâng cao", completed: false },
  { id: 43, text: "Responsive Design", completed: false },
  { id: 44, text: "Tailwind CSS", completed: false },
  { id: 45, text: "UI Component Library", completed: false },
  { id: 46, text: "UX/UI cơ bản", completed: false },

  // Development Tools
  { id: 47, text: "Git", completed: false },
  { id: 48, text: "GitHub", completed: false },
  { id: 49, text: "ESLint", completed: false },
  { id: 50, text: "Prettier", completed: false },
  { id: 51, text: "Clean Code", completed: false },
  { id: 52, text: "Project Structure", completed: false },

  // Testing
  { id: 53, text: "Testing", completed: false },
  { id: 54, text: "React Testing Library", completed: false },
  { id: 55, text: "Vitest", completed: false },

  // Next.js
  { id: 56, text: "Next.js cơ bản", completed: false },
  { id: 57, text: "App Router", completed: false },
  { id: 58, text: "Layout", completed: false },
  { id: 59, text: "Dynamic Routes", completed: false },
  { id: 60, text: "Server Components", completed: false },
  { id: 61, text: "Client Components", completed: false },
  { id: 62, text: "Data Fetching", completed: false },
  { id: 63, text: "Server Actions", completed: false },
  { id: 64, text: "API Routes", completed: false },
  { id: 65, text: "Middleware", completed: false },
  { id: 66, text: "Authentication với Next.js", completed: false },
  { id: 67, text: "SEO", completed: false },
  { id: 68, text: "Deployment", completed: false },

  // Project React / Next.js
  { id: 69, text: "Hoàn thiện Todo App", completed: false },
  { id: 70, text: "Project sử dụng API", completed: false },
  { id: 71, text: "Project có Authentication", completed: false },
  { id: 72, text: "Project React/Next.js hoàn chỉnh", completed: false },
  { id: 73, text: "GitHub Portfolio", completed: false },
  { id: 74, text: "Deploy Project", completed: false },
  { id: 75, text: "Portfolio / CV", completed: false },

  // Backend - Node.js
  { id: 76, text: "Node.js cơ bản", completed: false },
  { id: 77, text: "npm & package.json nâng cao", completed: false },
  { id: 78, text: "Express.js", completed: false },
  { id: 79, text: "REST API", completed: false },
  { id: 80, text: "Middleware Backend", completed: false },
  { id: 81, text: "Error Handling Backend", completed: false },
  { id: 82, text: "Environment Variables", completed: false },

  // Database
  { id: 83, text: "Database cơ bản", completed: false },
  { id: 84, text: "PostgreSQL", completed: false },
  { id: 85, text: "SQL cơ bản", completed: false },
  { id: 86, text: "Database CRUD", completed: false },
  { id: 87, text: "Prisma ORM", completed: false },
  { id: 88, text: "Database Relationships", completed: false },

  // Backend Authentication & Security
  { id: 89, text: "Backend Authentication", completed: false },
  { id: 90, text: "JWT", completed: false },
  { id: 91, text: "Authorization", completed: false },
  { id: 92, text: "Password Hashing", completed: false },
  { id: 93, text: "API Security", completed: false },
  { id: 94, text: "CORS", completed: false },
  { id: 95, text: "Rate Limiting", completed: false },

  // Backend nâng cao
  { id: 96, text: "File Upload", completed: false },
  { id: 97, text: "API Pagination", completed: false },
  { id: 98, text: "API Filtering & Search", completed: false },
  { id: 99, text: "API Validation", completed: false },
  { id: 100, text: "Backend Testing", completed: false },

  // Fullstack Integration
  { id: 101, text: "Kết nối React với Backend", completed: false },
  { id: 102, text: "Kết nối Next.js với Backend", completed: false },
  { id: 103, text: "Fullstack Authentication", completed: false },
  { id: 104, text: "Fullstack CRUD", completed: false },
  { id: 105, text: "Frontend State + Server State", completed: false },

  // Deployment
  { id: 106, text: "Docker cơ bản", completed: false },
  { id: 107, text: "Deploy Frontend", completed: false },
  { id: 108, text: "Deploy Backend", completed: false },
  { id: 109, text: "Deploy Database", completed: false },
  { id: 110, text: "Environment Production", completed: false },

  // Fullstack Projects
  { id: 111, text: "Fullstack Todo App", completed: false },
  { id: 112, text: "Fullstack Project với Authentication", completed: false },
  { id: 113, text: "Fullstack Project có Database", completed: false },
  { id: 114, text: "Fullstack Project hoàn chỉnh", completed: false },
  { id: 115, text: "Deploy Fullstack Project", completed: false },
  { id: 116, text: "GitHub Fullstack Portfolio", completed: false },
  { id: 117, text: "Fullstack Portfolio / CV", completed: false },
];

export default list;
