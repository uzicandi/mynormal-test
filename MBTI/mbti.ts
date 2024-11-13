import * as readline from 'readline';

interface Question {
  disagree: string;
  agree: string;
  text: string;
}

interface Score {
  E: number;
  I: number;
  S: number;
  N: number;
  F: number;
  T: number;
  P: number;
  J: number;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;

const questions: Question[] = [
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

const totalQuestions = questions.length;

const responseScores: { [key: string]: number } = {
  '매우 아니다': -2,
  아니다: -1,
  보통: 0,
  그렇다: 1,
  '매우 그렇다': 2,
};

const responses: string[] = [];

console.log(questions[count].text);
console.log(
  '매우 아니다, 아니다, 보통, 그렇다, 매우 그렇다 중 하나를 입력하세요.'
);

function main(answers: string[], questions: Question[]): string {
  const score: Score = { E: 0, I: 0, S: 0, N: 0, F: 0, T: 0, P: 0, J: 0 };

  answers.forEach((answer, index) => {
    const scoreValue = responseScores[answer];
    const targetType =
      scoreValue >= 0 ? questions[index].agree : questions[index].disagree;
    score[targetType as keyof Score] += Math.abs(scoreValue);
  });

  return calculateMBTI(score);
}

function calculateMBTI(score: Score): string {
  return [
    score.E >= score.I ? 'E' : 'I',
    score.N >= score.S ? 'N' : 'S',
    score.F >= score.T ? 'F' : 'T',
    score.P >= score.J ? 'P' : 'J',
  ].join('');
}

rl.on('line', function (input: string) {
  if (!responseScores.hasOwnProperty(input)) {
    console.log(
      '잘못된 입력입니다. 다시 입력하세요: 매우 아니다, 아니다, 보통, 그렇다, 매우 그렇다 중 하나를 입력하세요.'
    );
    return;
  }

  responses.push(input);
  count += 1;

  if (count < totalQuestions) {
    console.log(questions[count].text);
    console.log(
      '매우 아니다, 아니다, 보통, 그렇다, 매우 그렇다 중 하나를 입력하세요.'
    );
  } else {
    rl.close();
  }
}).on('close', function () {
  const result = main(responses, questions);
  console.log('당신의 MBTI 결과는:', result);
});
