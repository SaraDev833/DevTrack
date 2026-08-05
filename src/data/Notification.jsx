// src/data/notifications.js

const notifications = [
  {
    id: 1,
    type: "task",
    title: "New task assigned",
    message: "Hasan assigned “Build login API” to Rafi Ahmed.",
    time: "10 minutes ago",
    isRead: false,
  },
  {
    id: 2,
    type: "deadline",
    title: "Task deadline approaching",
    message: "“Design homepage” is due tomorrow.",
    time: "1 hour ago",
    isRead: true,
  },
  {
    id: 3,
    type: "completed",
    title: "Task completed",
    message: "Maham completed “Create homepage wireframe”.",
    time: "3 hours ago",
    isRead: false,
  },
  {
    id: 4,
    type: "project",
    title: "Project updated",
    message: "The progress of “Mobile Banking App” is now 45%.",
    time: "Yesterday",
    isRead: true,
  },
  {
    id: 5,
    type: "team",
    title: "Invitation accepted",
    message: "Nusrat Jahan joined your workspace.",
    time: "2 days ago",
    isRead: true,
  },
];

export default notifications;