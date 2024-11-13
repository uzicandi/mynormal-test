function moveUpOrder(data: number[], selected: number[]) {
  // 에러 핸들링: 입력 검증
  if (!Array.isArray(data) || !Array.isArray(selected)) {
    throw new Error('data와 selected는 배열이어야 합니다.');
  }

  if (selected.some((s) => !data.includes(s))) {
    throw new Error(
      'selected 배열의 모든 원소는 data 배열에 포함되어야 합니다.'
    );
  }

  if (data.length === 0) {
    throw new Error('data 배열은 비어있을 수 없습니다.');
  }

  let newData = [...data];

  selected.sort((a, b) => b - a); // 내림차순

  selected.forEach((s) => {
    const newArr = new Array(data.length).fill(-1);
    const currentIndex = newData.findIndex((i) => i === s);
    const newIdx = currentIndex - 1;

    // 이동할 위치를 설정
    if (newIdx >= 0) {
      newArr[newIdx] = s;
    } else {
      newArr[0] = s;
    }

    // 다른 원소들 재배치
    const otherSelected = newData.filter((value) => value !== s);
    newData = newArr.map((v) => {
      if (v !== -1) return v;
      return otherSelected.shift();
    });
  });

  return newData;
}

console.log(moveUpOrder([1, 2, 3, 4], [2, 4])); // [2,1,4,3]
