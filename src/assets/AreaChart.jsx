import React from 'react';
import ReactApexChart from 'react-apexcharts';

export const AreaChart = () => {
  const options = {
    chart: {
      id: 'area-chart', // Identificador único para o gráfico
      type: 'area', // Tipo do gráfico (area)
      toolbar: {
        show: false, // Desativa a barra de ferramentas
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // Meses no eixo X
    },
    fill: {
      opacity: 0.5, // Define a opacidade da área abaixo da linha
    },
    stroke: {
      curve: 'smooth', // Faz a linha ser suave
    },
    title: {
      text: 'Gráfico de Área Simples',
      align: 'center', // Título centralizado
    },
  };

  const series = [
    {
      name: 'Vendas', // Nome da série
      data: [30, 40, 35, 50, 49, 60, 70], // Dados das vendas por mês
    },
  ];

  return (
    <div>
      <ReactApexChart
        options={options} // Passando as opções do gráfico
        series={series}   // Passando os dados da série
        type="area"       // Tipo do gráfico (área)
        height={350}      // Altura do gráfico
      />
    </div>
  );
};