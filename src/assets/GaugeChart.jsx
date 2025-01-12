import React from 'react';
import ReactApexChart from 'react-apexcharts';

export const GaugeChart = () => {
  const options = {
    chart: {
      type: 'radialBar', // Tipo de gráfico radial
      height: 350, // Altura do gráfico
      sparkline: {
        enabled: true, // Para manter o gráfico simples e sem interações complexas
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90, // Começa o gráfico a partir de 0 graus
        endAngle: 90, // Limita o gráfico a 180 graus
        hollow: {
          size: '50%', // Deixa o centro do gráfico vazio para parecer um gauge
        },
        dataLabels: {
          show: true,
          name: {
            show: true,
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#333',
          },
          value: {
            show: true,
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#333',
          },
        },
      },
    },
    fill: {
      colors: ['#00E396'], // Cor do gráfico
    },
    stroke: {
      lineCap: 'round', // Deixa as bordas das barras arredondadas
    },
    labels: ['Progresso'], // Nome do gráfico
  };

  const series = [75]; // O valor do gráfico (quanto da "metade" foi preenchido)

  return (
    <div>
      <ReactApexChart
        options={options} // Passando as opções do gráfico
        series={series}   // Passando a série de dados (valor)
        type="radialBar"   // Tipo de gráfico radial
        height={350}       // Altura do gráfico
      />
    </div>
  );
};