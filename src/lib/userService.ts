import data, { User } from "./data";

export default {
  findOne(id: number) {
    return data.users.find((user) => user.id === id);
  },
  findAll() {
    return data.users;
  },
  create(user: User) {
    data.users.push(user);
  },
  destroy(id: number) {
    data.users.splice(
      data.users.findIndex((user) => user.id === id),
      1
    );
  },
  update(id: number, user: User) {
    data.users[data.users.findIndex((user) => user.id === id)] = user;
  },
};
