import dayjs from 'dayjs';

export const getDayCurrent = () => {
  const dayCurrent = dayjs().format('DD/MMMM/YYYY');
  const dayFormat = dayCurrent.replace('/', ' ').replace('/', ', ');

  return dayFormat;
};

export const getDateHome = () => {
  // const dayCurrent = dayjs().date();
  // const dayFormat = dayCurrent < 10 && `0${dayCurrent}`;

  const dateCurrent = dayjs().format('DD/MMMM/YYYY');
  const [day, month, year] = dateCurrent.split('/');

  return {
    day,
    month,
    year,
  };
};
