export const strToBoolean = (data: any) => {
  let newData = { ...data };

  Object.keys(data).forEach((item) => {
    if (data[item] === 'nao') {
      newData[item] = false;
    }
    if (data[item] === 'sim') {
      newData[item] = true;
    }
  });

  return newData;
};
