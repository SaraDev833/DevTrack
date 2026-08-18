const notifications = [
  {
    id: 1,
    userId: 1, // Rafi Ahmed
    type: "task",
    title: "New task assigned",
    message: "You have been assigned 'Build login API' by Hasan Mahmud.",
    time: "10 minutes ago",
    isRead: false,
  },

  {
    id: 2,
    userId: 1,
    type: "deadline",
    title: "Task deadline approaching",
    message: "'Design homepage' is due tomorrow.",
    time: "1 hour ago",
    isRead: true,
  },

  {
    id: 3,
    userId: 2, // Hasan
    type: "completed",
    title: "Task completed",
    message: "Rafi Ahmed completed 'Build login API'.",
    time: "3 hours ago",
    isRead: false,
  },

  {
    id: 4,
    userId: 1,
    type: "project",
    title: "Project updated",
    message: "Mobile Banking App progress is now 45%.",
    time: "Yesterday",
    isRead: true,
  },
];

export default notifications;