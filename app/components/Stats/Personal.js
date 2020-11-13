import React, { useState, useEffect } from 'react';

import Table from './Table';
import personalData from '../../data/stats';

const PersonalStats = () => {
  const [data, setData] = useState(personalData);

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1993-05-14T09:24:00');
    const joinTime = new Date('2017-04-01T09:24:00');
    setData({
      ...data,
      age: {
        label: 'Current age (years)',
        value: ((Date.now() - birthTime) / divisor).toFixed(11),
      },
      experience: {
        label: 'Total Experience (years)',
        value: ((Date.now() - joinTime) / divisor).toFixed(11),
      },
    });
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => { clearInterval(timer); };
  }, []);

  return (
    <>
      <h3>Some stats about me</h3>
      <Table data={Object.keys(data).map((key) => data[key])} />
    </>
  );
};

export default PersonalStats;
