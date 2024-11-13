"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var count = 0;
var questions = [
    {
        disagree: 'E',
        agree: 'I',
        text: "\uB2E4\uC774\uC5B4\uD2B8\uB294 \uC8FC\uBCC0\uC778\uC758 \uC2DC\uC120\uBCF4\uB2E4\uB294 \uC790\uAE30\uB9CC\uC871\uC744 \uC704\uD574 \uD558\uB294 \uAC70\uB77C\uACE0 \uC0DD\uAC01\uD55C\uB2E4.",
    },
    {
        disagree: 'S',
        agree: 'N',
        text: "\uB2E4\uC774\uC5B4\uD2B8\uC5D0 \uC131\uACF5\uD55C \uBBF8\uB798\uC758 \uB0B4 \uBAA8\uC2B5\uC744 \uC0C1\uC0C1\uD574\uBCF4\uBA74 \uB3D9\uAE30\uBD80\uC5EC\uAC00 \uB41C\uB2E4.",
    },
    {
        disagree: 'T',
        agree: 'F',
        text: "\uC0B4\uCA98\uB2E4\uACE0 \uACE0\uBBFC\uD558\uB294 \uCE5C\uAD6C\uB4E4\uC744 \uBCF4\uBA74 \uB098\uB9CC \uADF8\uB7F0 \uAC8C \uC544\uB2C8\uAD6C\uB098 \uC2F6\uC5B4 \uC704\uB85C\uAC00 \uB41C\uB2E4.",
    },
    {
        disagree: 'J',
        agree: 'P',
        text: "\uB2E4\uC774\uC5B4\uD2B8 \uBC29\uBC95\uC744 \uACE0\uB97C \uB54C \uC120\uD0DD\uC9C0\uAC00 \uB2E4\uC591\uD55C \uD3B8\uC774 \uC88B\uB2E4.",
    },
    {
        disagree: 'E',
        agree: 'I',
        text: "\uC0AC\uB78C\uC774 \uBD90\uBE44\uB294 \uB9DB\uC9D1\uC5D0 \uAC00\uB294 \uAC83\uBCF4\uB2E4 \uC9D1\uC5D0\uC11C \uBC30\uB2EC \uC74C\uC2DD\uC744 \uC2DC\uCF1C\uBA39\uB294 \uAC8C \uC88B\uB2E4.",
    },
    {
        disagree: 'S',
        agree: 'N',
        text: "\uB2E4\uC774\uC5B4\uD2B8\uB97C \uD560 \uB54C \uC138\uC138\uD55C \uC2DD\uB2E8 \uACC4\uD68D\uC740 \uBCC4\uB85C \uC911\uC694\uD558\uC9C0 \uC54A\uB2E4\uACE0 \uC0DD\uAC01\uD55C\uB2E4.",
    },
    {
        disagree: 'T',
        agree: 'F',
        text: "\uB2E4\uC774\uC5B4\uD2B8 \uC911\uC774\uC9C0\uB9CC \uC9C0\uC778\uC774 \uC74C\uC2DD\uC744 \uAD8C\uD558\uBA74 \uBBF8\uC548\uD55C \uB9C8\uC74C\uC5D0 \uAC70\uC808\uD558\uAE30\uAC00 \uC5B4\uB835\uB2E4.",
    },
    {
        disagree: 'J',
        agree: 'P',
        text: "\uADF8\uB54C\uADF8\uB54C \uC989\uD765\uC801\uC73C\uB85C \uB04C\uB9AC\uB294 \uBA54\uB274\uB97C \uC120\uD0DD\uD574\uC11C \uC2DD\uC0AC\uD558\uB294 \uAC8C \uC88B\uB2E4.",
    },
];
var totalQuestions = questions.length;
var responseScores = {
    '매우 아니다': -2,
    아니다: -1,
    보통: 0,
    그렇다: 1,
    '매우 그렇다': 2,
};
var responses = [];
console.log(questions[count].text);
console.log('매우 아니다, 아니다, 보통, 그렇다, 매우 그렇다 중 하나를 입력하세요.');
function main(answers, questions) {
    var score = { E: 0, I: 0, S: 0, N: 0, F: 0, T: 0, P: 0, J: 0 };
    answers.forEach(function (answer, index) {
        var scoreValue = responseScores[answer];
        var targetType = scoreValue >= 0 ? questions[index].agree : questions[index].disagree;
        score[targetType] += Math.abs(scoreValue);
    });
    return calculateMBTI(score);
}
function calculateMBTI(score) {
    console.log('score:', score);
    return [
        score.E >= score.I ? 'E' : 'I',
        score.N >= score.S ? 'N' : 'S',
        score.F >= score.T ? 'F' : 'T',
        score.P >= score.J ? 'P' : 'J',
    ].join('');
}
rl.on('line', function (input) {
    input = input.trim();
    if (!responseScores.hasOwnProperty(input)) {
        console.log('잘못된 입력입니다. 다시 입력하세요: 매우 아니다, 아니다, 보통, 그렇다, 매우 그렇다 중 하나를 입력하세요.');
        return;
    }
    responses.push(input);
    count += 1;
    if (count < totalQuestions) {
        console.log(questions[count].text);
        console.log('매우 아니다, 아니다, 보통, 그렇다, 매우 그렇다 중 하나를 입력하세요.');
    }
    else {
        rl.close();
    }
}).on('close', function () {
    var result = main(responses, questions);
    console.log('당신의 MBTI 결과는:', result);
});
