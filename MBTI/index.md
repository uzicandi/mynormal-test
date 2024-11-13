## 문제

MBTI를 계산해 콘솔에 출력하는 콘솔 프로그램을 작성해주세요.

아래 questions 배열은 MBTI를 계산하기 위한 문항들입니다.
모든 문항에 대한 선택지는 다섯개로 동일하며 다음과 같습니다.

> 매우 아니다, 아니다, 보통이다, 그렇다, 매우 그렇다

```ts
const questions = [
  {
    disagree: 'E',
    agree: 'I',
    text: `다이어트는 주변인의 시선보다는 자기만족을 위해 하는 거라고 생각한다.`,
  },
  {
    disagree: 'S',
    agree: 'N',
    text: `다이어트에 성공한 미래의 내 모습을 상상해보면 동기부여가 된다.`,
  },
  {
    disagree: 'T',
    agree: 'F',
    text: `살쪘다고 고민하는 친구들을 보면 나만 그런 게 아니구나 싶어 위로가 된다.`,
  },
  {
    disagree: 'J',
    agree: 'P',
    text: `다이어트 방법을 고를 때 선택지가 다양한 편이 좋다.`,
  },
  {
    disagree: 'E',
    agree: 'I',
    text: `사람이 붐비는 맛집에 가는 것보다 집에서 배달 음식을 시켜먹는 게 좋다.`,
  },
  {
    disagree: 'S',
    agree: 'N',
    text: `다이어트를 할 때 세세한 식단 계획은 별로 중요하지 않다고 생각한다.`,
  },
  {
    disagree: 'T',
    agree: 'F',
    text: `다이어트 중이지만 지인이 음식을 권하면 미안한 마음에 거절하기가 어렵다.`,
  },
  {
    disagree: 'J',
    agree: 'P',
    text: `그때그때 즉흥적으로 끌리는 메뉴를 선택해서 식사하는 게 좋다.`,
  },
];
```

```cs
선택지에 따라 다음과 같이 점수를 부여합니다.
매우 아니다는 disagree 타입에 2점
아니다는 disagree 타입에 1점
보통이다는 양쪽에 0점
그렇다는 agree 타입에 1점
매우 그렇다는 agree 타입에 2점
```

예를 들어 첫 번째 문항인 `다이어트는 주변인의 시선보다는 자기만족을 위해 하는 거라고 생각한다.`에
매우 아니다라고 답하면 E 타입에 2점
아니다라고 답하면 E 타입에 1점
보통이다라고 답하면 양쪽에 0점
그렇다라고 답하면 I 타입에 1점
매우 그렇다라고 답하면 I 타입에 2점을 부여합니다.

자리가 같은 두 알파벳의 점수가 같은 경우 다음과 같이 처리합니다.

```cs
E == I: E
S == N: N
F == T: F
P == J: P
```

**따라서 모든 항목에 보통이다라고 답하면 결과는 ENFP가 됩니다.**

입력값에 오류는 없다고 가정합니다.

필요하다면 questions 변수의 내용을 임의로 바꾸셔도 괜찮습니다.

언어는 자바스크립트나 타입스크립트 모두 무방합니다.

## 예시 시나리오

- 프로그램이 시작되면 첫 번째 질문을 출력하고, 사용자는 매우 아니다, 아니다, 보통, 그렇다, 매우 그렇다 중 하나를 입력합니다.
- 사용자가 응답을 입력할 때마다 responseScores 객체에서 해당 점수를 찾아 score 객체에 추가합니다.
- 모든 질문이 끝나면, calculateMBTI 함수가 score 객체를 바탕으로 MBTI 결과를 계산하여 출력합니다.

## 코드 구성과 주요 기능 설명

1. 질문 및 응답 데이터 설정

- questions 배열에는 각 질문과 관련된 MBTI 성향 (agree, disagree)가 있습니다.
- input으로 답변을 받아 responses로 저장합니다.
- count는 0으로 시작하여 질문에 입력이 완료되면 1씩 증가하고, 질문 개수에 맞춰 질문을 하며 count를 올립니다.

2. 응답 점수 매핑

- responseScores 객체는 각 응답에 대해 점수를 매핑합니다.

3. main 로직 함수

- 점수로 만들 score 객체를 생성합니다.
- answers 배열(사용자가 입력한 응답)을 순회하며 각 응답을 점수로 변환하여 score 객체에 누적합니다.
  - scoreValue는 응답에 따른 점수로, scoreValue가 양수이면 agree 점수가 증가하고 음수이면 disagree 점수가 증가합니다.
- 이 함수는 calculateMBTI 함수를 호출하여 최종 MBTI 유형을 반환합니다.

4. MBTI 유형 계산 (calculateMBTI)

- calculateMBTI 함수는 score 값을 비교하고 동일한 점수인 경우를 고려하여 MBTI를 결정합니다.

## 개선점

1. 입력값에 오류가 있다면? (에러핸들링)
2. typescript로 바꾼다면?
3. 질문 랜덤화: 질문을 순서대로 출력하지 않고, 랜덤하게 섞어서 제공할 수 있습니다. 이를 통해 사용자가 질문 순서에 영향을 받지 않도록 할 수 있습니다.

4. 결과 해석 추가: calculateMBTI 함수에서 반환하는 MBTI 결과에 대해 추가적인 해석을 제공하여 사용자가 자신의 MBTI 유형을 더욱 쉽게 이해할 수 있도록 합니다.

5. 테스트 코드 작성: TypeScript의 장점인 타입 안정성을 활용해 테스트 코드를 작성하여 함수의 동작을 자동으로 확인할 수 있습니다. jest 같은 테스트 프레임워크를 활용하면 보다 체계적인 테스트가 가능합니다.

6. 입력 유효성 검사 강화: 입력값의 대소문자 구분 없이 유효성을 검사하고, 입력이 예상한 값이 아닌 경우 프로그램이 중단되지 않고 친절한 메시지를 출력합니다.