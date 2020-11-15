import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "User One",
    email: "u1@example.com",
    password: bcrypt.hashSync("123456", 10),
    password: "xxxx",
  },
  {
    name: "User Two",
    email: "u2@example.com",
    password: bcrypt.hashSync("123456", 10),
    password: "xxxx",
  },
];

export default users;
