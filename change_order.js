/**
 * selected 배열에 포함된 data 배열의 원소들을 왼쪽으로 한 칸씩 옴기는 콘솔 프로그램을 작성해주세요.
 *
 * 예) data = [1, 2, 3], selected = [1],       data' = [1, 2, 3]
 * 예) data = [1, 2, 3], selected = [2],       data' = [2, 1, 3]
 * 예) data = [1, 2, 3], selected = [3],       data' = [1, 3, 2]
 * 예) data = [1, 2, 3], selected = [1, 2],    data' = [1, 2, 3]
 * 예) data = [1, 2, 3], selected = [2, 1],    data' = [1, 2, 3]
 * 예) data = [1, 2, 3], selected = [1, 3],    data' = [1, 3, 2]
 * 예) data = [1, 2, 3], selected = [3, 1],    data' = [1, 3, 2]
 * 예) data = [1, 2, 3], selected = [2, 3],    data' = [2, 3, 1]
 * 예) data = [1, 2, 3], selected = [3, 2],    data' = [2, 3, 1]
 * 예) data = [1, 2, 3], selected = [1, 2, 3], data' = [1, 2, 3]
 *
 * 입력값에 오류는 없다고 가정합니다.
 * 
 * selected는 data의 부분집합 입니다.
 *
 * 언어는 자바스크립트나 타입스크립트 모두 무방합니다.
 */

const data = [1, 2, 3]
const selected = [2,3]

// 아래에 코드를 작성해주세요.

console.log(data);

function shiftSelectedLeft(data, selected) {
  const dataCopy = [...data];
  selected.forEach(item => {
    const index = dataCopy.indexOf(item);
    if (index > 0) {
      // Swap the current item with the one on its left
      [dataCopy[index - 1], dataCopy[index]] = [dataCopy[index], dataCopy[index - 1]];
    }
  });
  return dataCopy;
}

const result = shiftSelectedLeft(data, selected);
console.log(result);
