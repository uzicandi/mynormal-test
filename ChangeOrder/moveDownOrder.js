var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function moveDownOrder(data, selected) {
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
    selected.sort(function (a, b) { return a - b; }); // 올림차순
    selected.forEach(function (s) {
        var newArr = new Array(data.length).fill(-1);
        var currentIndex = newData.findIndex(function (i) { return i === s; });
        var newIdx = currentIndex + 1;
        console.log('newIdx', newIdx);
        // 이동할 위치를 설정
        if (newIdx <= newData.length - 1) {
            newArr[newIdx] = s;
        }
        else {
            newArr[newData.length - 1] = s;
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
console.log(moveDownOrder([1, 2, 3, 4], [2, 4]));
