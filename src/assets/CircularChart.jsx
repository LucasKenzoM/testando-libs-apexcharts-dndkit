import React from 'react';
import ReactApexChart from 'react-apexcharts';

export const CircularChart = () => {
  const options = {
    chart: {
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '25px',
            fontWeight: 'bold',
            color: '#888',
          },
          value: {
            fontSize: '40px',
            fontWeight: 'bold',
            color: '#333',
          },
        },
        track: {
          background: '#e7e7e7',
          strokeWidth: '100%',
        },
        hollow: {
          margin: 0,
          size: '70%',
          background: 'transparent',
        },
      },
    },
    labels: ['Performance'],
  };

  const series = [70]; // Valor que você quer que o gráfico mostre

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="radialBar"
        height={350}
      />
    </div>
  );
};
