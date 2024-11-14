"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function moveUpOrder(data, selected) {
    // 에러 핸들링: 입력 검증
    if (!Array.isArray(data) || !Array.isArray(selected)) {
        throw new Error('data와 selected는 배열이어야 합니다.');
    }
    if (selected.some(function (s) { return !data.includes(s); })) {
        throw new Error('selected 배열의 모든 원소는 data 배열에 포함되어야 합니다.');
    }
    if (data.length === 0) {
        throw new Error('data 배열은 비어있을 수 없습니다.');
    }
    var newData = __spreadArray([], data, true);
    selected.sort(function (a, b) { return b - a; }); // 내림차순
    selected.forEach(function (s) {
        var newArr = new Array(data.length).fill(-1);
        var currentIndex = newData.findIndex(function (i) { return i === s; });
        var newIdx = currentIndex - 1;
        // 이동할 위치를 설정
        if (newIdx >= 0) {
            newArr[newIdx] = s;
        }
        else {
            newArr[0] = s;
        }
        // 다른 원소들 재배치
        var otherSelected = newData.filter(function (value) { return value !== s; });
        newData = newArr.map(function (v) {
            if (v !== -1)
                return v;
            return otherSelected.shift();
        });
    });
    return newData;
}
rl.question('data 배열을 입력하세요 (예: 1,2,3,4): ', function (dataInput) {
    var data = dataInput.split(',').map(Number);
    rl.question('selected 배열을 입력하세요 (예: 2,4): ', function (selectedInput) {
        var selected = selectedInput.split(',').map(Number);
        try {
            var result = moveUpOrder(data, selected);
            console.log('결과:', result);
        }
        catch (error) {
            console.error('에러:', error.message);
        }
        rl.close();
    });
});
// console.log(moveUpOrder([1, 2, 3, 4], [2, 4])); // [2,1,4,3]
