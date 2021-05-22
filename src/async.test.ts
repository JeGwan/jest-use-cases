interface User {
  id: number;
  name: string;
  email: string;
}
function fetchUser(id: number, cb: (user: User) => void) {
  setTimeout(() => {
    console.log("wait 0.1 sec.");
    const user = {
      id: id,
      name: "User" + id,
      email: id + "@test.com",
    };
    cb(user);
  }, 100);
}

test("fetch a user", (done) => {
  fetchUser(1, (user) => {
    expect(user).toEqual({
      id: 1,
      name: "User1",
      email: "1@test.com",
    });
    done();
  });
});

function promiseFetchUser(id: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("wait 0.1 sec.");
      const user = {
        id: id,
        name: "User" + id,
        email: id + "@test.com",
      };
      resolve(user);
    }, 100);
  });
}

test("fetch a user", () => {
  return promiseFetchUser(1).then((user) => {
    expect(user).toEqual({
      id: 1,
      name: "User1",
      email: "1@test.com",
    });
  });
});

test("fetch a user", async () => {
  const user = await promiseFetchUser(1);
  expect(user).toEqual({
    id: 1,
    name: "User1",
    email: "1@test.com",
  });
});

export {};
