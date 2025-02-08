export const nullValues: (string | number | object | null | undefined)[] = [
  null,
  undefined,
];

export const format = (
  delimiter: string,
  ...values: (string | number | object | null | undefined)[]
) => {
  let index = 0;
  return delimiter.replace(/(?<!\\)(%|%d|%s)/g, () => {
    const value = values[index++];
    return nullValues.includes(value) ? "" : String(value);
  });
};
