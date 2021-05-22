import data from "./lib/data";

beforeEach(() => {
  data.users.push(
    { id: 1, email: "user1@test.com" },
    { id: 2, email: "user2@test.com" },
    { id: 3, email: "user3@test.com" }
  );
});

afterEach(() => {
  data.users.splice(0);
});

// test("findOne returns what axios get returns", async () => {
//   axios.get = jest.fn().mockResolvedValue({
//     data: {
//       id: 1,
//       name: "Dale Seo",
//     },
//   });

//   const user = await userService.findOne(1);
//   expect(user).toHaveProperty("id", 1);
//   expect(user).toHaveProperty("name", "Dale Seo");
// });

test("spyon", () => {
  const calculator = {
    add: (a: number, b: number) => a + b,
  };

  const spyFn = jest.spyOn(calculator, "add");

  const result = calculator.add(2, 3);

  expect(spyFn).toBeCalledTimes(1);
  expect(spyFn).toBeCalledWith(2, 3);
  expect(result).toBe(5);
});
