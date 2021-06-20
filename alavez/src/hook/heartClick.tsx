export const heratClickHook = (
  count: boolean,
  setHeartClick: any,
  setCount: any,
  heart: string,
  heartCheck: string
) => {
  if (count) {
    setHeartClick(heart);
  } else {
    setHeartClick(heartCheck);
  }
  setCount(!count);
};
