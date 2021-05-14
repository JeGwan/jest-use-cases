# Tdd를 위한 Jest use cases!

## pre-requisite

참고 : [jest getting started](https://jestjs.io/docs/getting-started#additional-configuration)

이 프로젝트에는 아래의 세팅이 이미 다 포함되어있습니다.
아에 처음부터 made from scratch 로 하실 분들, 그리고 저 자신의 기억을 위해 순서를 적어놓습니다.

1. 필요한 패키지들을 설치해주세요.

```sh
# jest 설치
yarn add --dev jest
yarn add --dev @types/jest
# babel 및 typescript 적용
yarn add --dev babel-jest @babel/core @babel/preset-env
yarn add --dev @babel/preset-typescript
```

2. jest 설정을 만들어주세요

```sh
npx jest --init
```

대화형 상자에 응답으로 다음과 같이 해줍니다.

Would you like to use Typescript for the configuration file? > no

ts파일을 ts-node로 실행해줘야 바로 실행할 수 있어요. 아니면 결국 tsc로 컴파일 해줘야 하므로 js파일로 만듭니다.

Choose the test environment that will be used for testing › node

-> node 환경 위해서 테스트할 것이므로 node를 선택합니다.

Do you want Jest to add coverage reports? › no

커버리지 리포트인데 일단은 no로 합시다 (실험삼아 yes로 해보세요)

Which provider should be used to instrument code for coverage? › babel

우리가 테스트로 작성한 코드들을 사용하게 해줄 공급자로 뭘 택할 것인가 인데요. babel이 기본값이고 v8 옵션도 있는데
v8은 node.js 자체로 처리하는 건데 실험적이에요. 다음과 같은 이슈가 있습니다.

```
Note that using v8 is considered experimental. This uses V8's builtin code coverage rather than one based on Babel. It is not as well tested, and it has also improved in the last few releases of Node. Using the latest versions of node (v14 at the time of this writing) will yield better results.
```

따라서 babel을 씁시다.

3. `babel.config.js` 를 작성해주세요.

```js
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
  ],
};
```

4. 마지막으로 `package.json` 파일에 script를 하나 추가해줍시다

```json
{
  ...,
  "scripts": {
    ...,
    "test": "jest"
  },
  ...
}
```

이렇게 하면 `yarn test` 라는 명령어로 jest를 실행할 수 있습니다.

😀 모든 준비가 끝났습니다. 테스트 하러 고고씽!

## 몇 가지 사실

### 1. test, expect를 선언한 적이 없는데 타입스크립트에서 에러가 안나는 이유?

`@types/jest` 에서 해당하는 함수를 글로벌 스코프에 선언된 타입으로 만들어주었기 때문입니다.

```ts
declare var test: jest.It;
declare const expect: jest.Expect;
```
