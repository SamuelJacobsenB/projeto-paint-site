export const serializeDate = (date: Date | string): string => {
  const _date = new Date(date);

  const year = _date.getFullYear();
  const month = _date.getMonth() + 1;
  const day = _date.getDate();

  return `${day < 10 ? "0" + day : day}/${
    month < 10 ? "0" + month : month
  }/${year}`;
};
