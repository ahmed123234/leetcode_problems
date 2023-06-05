function sumOfThree(num: number): number[] {
    let middleNum = num / 3;

    if (num % 3 !== 0) {
        return []
    } 

    return [middleNum - 1, middleNum, middleNum + 1];

};
