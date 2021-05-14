import sum from "./sum";

/**
 * expect 함수는 그 자체만으로는 쓰이지 않고 matcher 라부르는 chain method를 통해 값을 테스트합니다.
 */

/**
 * .toBe() from Docs
 * Use .toBe to compare primitive values or to check referential identity of object instances.
 * 원시값이나 객체 인스턴스 레퍼런스가 같은지(즉 같은 객체를 가리키는지) 체크합니다.
 * Object.is 랑 같습니다.
 * === 보단 나아요.
 * 이를 테면 NaN !== NaN 이지만(그래서 Number.isNaN 으로 체크하죠?)
 * 여기서는 expect(NaN).toBe(NaN) 해도 true 가 됩니다.
 */
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

/**
 * .toEqual() from Docs
 * Use .toEqual to compare recursively all properties of object instances (also known as "deep" equality).
 * It calls Object.is to compare primitive values.
 * 재귀적으로 객체 인스턴스의 모든 프로퍼티의 값이 같은지 검사합니다. 그리고 각 프로퍼티의 동일성 검사는 toBe처럼 Object.is를 사용합니다.
 * key value pair 의 Map 자로형을 비교한다고 보시면되요.
 * 그래서 value가 원시값이나 Map 자료형이 아니게 되면 즉 함수 따위가 들어가게 되면 동치가 되지 않습니다.
 */

test("to objects have same properties", () => {
  const A = { name: "J", age: 1 };
  const B = { name: "J", age: 1 };
  const C = { name: "D", age: 2, say: () => "😃" };
  const D = { name: "D", age: 2, say: () => "😃" };
  const say = () => "😃";
  const E = { name: "D", age: 2, say };
  const F = { name: "D", age: 2, say };
  expect(A).toEqual(B);
  expect(A).not.toBe(B);
  expect(C).not.toEqual(D);
  // Object.is는 서로 다르게 선언된 두 say를 검사할 것이고.
  // 각자 객체가 참조하는 메모리가 다르므로 다르다고 인식합니다.
  expect(E).toEqual(F);
  // 위의 것은 Equal이 되는데 Object.is는 같은 객체를 가리키면 true를 리턴하기 때문입니다.
});
