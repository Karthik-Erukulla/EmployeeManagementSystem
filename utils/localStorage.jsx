
const employees = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    password: "123",
    taskCount: {
      newTasks: 1,
      activeTasks: 1,
      completedTasks: 1,
      failedTasks: 1
    },
    tasks: [
      {
        title: "Design Landing Page",
        description: "Create a responsive UI for the landing page.",
        date: "2025-06-05",
        category: "UI/UX",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Update Logo Assets",
        description: "Replace old logos with new branding.",
        date: "2025-06-01",
        category: "Branding",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix Footer Bug",
        description: "Footer overlaps with content on mobile screens.",
        date: "2025-06-02",
        category: "Bugfix",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    password: "123",
    taskCount: {
      newTasks: 1,
      activeTasks: 2,
      completedTasks: 1,
      failedTasks: 1
    },
    tasks: [
      {
        title: "Write Blog Post",
        description: "Draft a blog post on our new AI feature.",
        date: "2025-06-03",
        category: "Content",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "SEO Audit",
        description: "Run SEO checks on homepage.",
        date: "2025-06-01",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Social Media Plan",
        description: "Outline the next 7 days of posts.",
        date: "2025-06-02",
        category: "Social Media",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Engagement Metrics",
        description: "Collect analytics from recent campaigns.",
        date: "2025-06-04",
        category: "Analytics",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    name: "Charlie Lee",
    email: "charlie@example.com",
    password: "123",
    taskCount: {
      newTasks: 1,
      activeTasks: 2,
      completedTasks: 1,
      failedTasks: 2
    },
    tasks: [
      {
        title: "Backend Refactor",
        description: "Clean up legacy API code.",
        date: "2025-06-02",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Database Migration",
        description: "Move user data to new schema.",
        date: "2025-06-03",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Token Expiry Bug",
        description: "Fix session timeout inconsistency.",
        date: "2025-06-01",
        category: "Bugfix",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Test Cases",
        description: "Write unit tests for billing module.",
        date: "2025-06-04",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Security Patch",
        description: "Apply new security update for JWT.",
        date: "2025-06-05",
        category: "Security",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 4,
    name: "Diana Prince",
    email: "diana@example.com",
    password: "123",
    taskCount: {
      newTasks: 1,
      activeTasks: 2,
      completedTasks: 1,
      failedTasks: 1
    },
    tasks: [
      {
        title: "Customer Feedback Review",
        description: "Analyze customer reviews and report pain points.",
        date: "2025-06-01",
        category: "Customer Support",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Help Desk Tickets",
        description: "Resolve 10+ pending support tickets.",
        date: "2025-06-02",
        category: "Support",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Live Chat Supervision",
        description: "Monitor live chat interactions during launch.",
        date: "2025-06-03",
        category: "Customer Success",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Client Call Summary",
        description: "Prepare notes from Monday's client meeting.",
        date: "2025-06-05",
        category: "Meetings",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    name: "Eve Torres",
    email: "eve@example.com",
    password: "123",
    taskCount: {
      newTasks: 1,
      activeTasks: 2,
      completedTasks: 1,
      failedTasks: 0
    },
    tasks: [
      {
        title: "Sprint Planning",
        description: "Organize sprint goals and assign tasks.",
        date: "2025-06-04",
        category: "Project Management",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Team Standup",
        description: "Prepare agenda for daily standup meeting.",
        date: "2025-06-01", 
        category: "Team Sync",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Progress Report",
        description: "Summarize progress for weekly manager sync.",
        date: "2025-06-02",
        category: "Reporting",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    name: "Frank Castle",
    email: "frank@example.com",
    password: "123"
  }
];



export const setLocalStorage = () => {
  if (!localStorage.getItem("employees")) {
    localStorage.setItem("employees", JSON.stringify(employees));
  }
  if (!localStorage.getItem("admin")) {
    localStorage.setItem("admin", JSON.stringify(admin));
  }
};


export const getLocalStorage = () => {
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))
    return {employees,admin}
}
