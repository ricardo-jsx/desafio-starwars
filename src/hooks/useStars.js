const identity = (obj) => obj;
const numberToSeconds = (number) => `${number}s`;

const getRandomNumber = (min, max, transformFn) => {
  const position = Math.floor(Math.random() * (max - min)) + min;
  return transformFn(position);
};

export default function useStars(count, leftRange = [0, 0], topRange = [0, 0]) {
  const [minLeft, maxLeft] = leftRange;
  const [minTop, maxTop] = topRange;

  const stars = Array(count)
    .fill()
    .map((_, key) => ({
      key,
      leftPosition: getRandomNumber(minLeft, maxLeft, identity),
      topPosition: getRandomNumber(minTop, maxTop, identity),
      animationDelay: getRandomNumber(0, 2, numberToSeconds),
    }));

  return stars;
}
