export function delay(time: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, time * 1000));
}

export const generateRandomNumber = (max: number, min: number = 1) => {
  return Math.round(Math.random() * (max - min) + min);
};

export const generateRandomNumberArray = (length: number, max: number) => {
  const returnedArray: number[] = [];
  while (true) {
    const randomNumber = generateRandomNumber(max);
    if (returnedArray.includes(randomNumber)) continue;
    returnedArray.push(randomNumber);
    if (returnedArray.length >= length) break;
  }
  return returnedArray;
};
