const users = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];

const usersOnlineNames = users
  .map((user) => {
    if (user.status === "online") return user.username;
  })
  .filter(Boolean);

alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`);
