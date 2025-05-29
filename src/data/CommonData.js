export const generalLinks = [
  { id: 1, name: "Dashboard", icon: "dashboard", active: true },
  { id: 2, name: "History", icon: "history", active: false },
  { id: 3, name: "Calendar", icon: "calendar", active: false },
  { id: 4, name: "Appointments", icon: "appointments", active: false },
];
export const testLinks = [
  { id: 1, name: "Chat", icon: "chat", active: false },
  { id: 2, name: "Support", icon: "support", active: false },
  { id: 3, name: "Settings", icon: "setting", active: false },
];

export const anatomyIndicators = [
  {
    id: 1,
    name: "Healthy Heart",
    position: { top: "30%", left: "50%" },
    status: "healthy",
    color: "#3b82f6",
  },
  {
    id: 2,
    name: "Healthy Leg",
    position: { bottom: "15%", left: "50%" },
    status: "healthy",
    color: "#06b6d4",
  },
]

export const appointmentCards = [
  {
    id: 1,
    title: "Dentist",
    time: "09:00-11:00",
    doctor: "Dr. Cameron Williamson",
    type: "dentist",
    icon: "🦷",
  },
  {
    id: 2,
    title: "Physiotherapy Appointment",
    time: "11:00-12:00",
    doctor: "Dr. Kevin Djones",
    type: "physiotherapy",
    icon: "🏃",
  },
]
export const calendarData = {
  month: "October 2021",
  days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  dates: [
    { date: 25, appointments: ["10:00", "11:00", "12:00"] },
    { date: 26, appointments: ["08:00", { time: "09:00", selected: true }, "10:00"] },
    { date: 27, appointments: ["12:00", "13:00","--"] },
    { date: 28, appointments: ["10:00", "11:00", "16:00"] },
    { date: 29, appointments: ["14:00", "15:00","--"] },
    { date: 30, appointments: ["12:00", "14:00","--"] },
    { date: 31, appointments: ["09:00", "10:00", "11:00"] },
  ],
};
export const upcomingSchedule = [
  {
    day: "On Thursday",
    appointments: [
      {
        id: 1,
        title: "Health checkup complete",
        time: "11:00 AM",
        icon: "✏️",
      },
      {
        id: 2,
        title: "Ophthalmologist",
        time: "14:00 PM",
        icon: "👁️",
      },
    ],
  },
  {
    day: "On Saturday",
    appointments: [
      {
        id: 3,
        title: "Cardiologist",
        time: "12:00 AM",
        icon: "❤️",
      },
      {
        id: 4,
        title: "Neurologist",
        time: "16:00 PM",
        icon: "🧠",
      },
    ],
  },
]

export const healthData = [
  {
    id: 1,
    name: "Lungs",
    date: "26 Oct 2021",
    status: "warning",
    progress: 65,
    color: "#ef4444",
    icon: "🫁",
  },
  {
    id: 2,
    name: "Teeth",
    date: "26 Oct 2021",
    status: "healthy",
    progress: 85,
    color: "#10b981",
    icon: "🦷",
  },
  {
    id: 3,
    name: "Bone",
    date: "26 Oct 2021",
    status: "warning",
    progress: 45,
    color: "#f97316",
    icon: "🦴",
  },
]
export const activityData = [
  { day: "Mon", values: [60, 80, 40] },
  { day: "Tue", values: [70, 90, 50] },
  { day: "Wed", values: [50, 70, 60] },
  { day: "Thu", values: [80, 60, 70] },
  { day: "Fri", values: [90, 85, 45] },
  { day: "Sat", values: [65, 75, 55] },
  { day: "Sun", values: [75, 65, 50] },
]