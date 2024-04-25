const formatDate = (date: Date) => {
  date.setTime(date.getTime() - date.getTimezoneOffset()*60*1000);
  const result = date.toISOString().split('T')[0];
  return result;
};


export {
  formatDate,
};
