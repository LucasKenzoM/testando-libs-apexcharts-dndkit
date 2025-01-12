import React from 'react';
import ReactApexChart from 'react-apexcharts';

export const LineChart = () => {
  const options = {
    chart: {
      id: 'line-chart', // Identificador único para o gráfico
      toolbar: {
        show: false, // Esconde a barra de ferramentas do gráfico
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // Meses no eixo X
    },
    stroke: {
      curve: 'smooth', // Define uma curva suave para as linhas
    },
    title: {
      text: 'Gráfico de Linhas Simples',
      align: 'center', // Título centralizado
    },
    grid: {
      show: true, // Exibe a grade no gráfico
    },
  };

  const series = [
    {
      name: 'Vendas', // Nome da série
      data: [30, 40, 35, 50, 49, 60, 70], // Dados de vendas por mês
    },
  ];

  return (
    <div>
      <ReactApexChart
        options={options} // Passando as opções do gráfico
        series={series}   // Passando os dados da série
        type="line"       // Tipo do gráfico (line)
        height={350}      // Altura do gráfico
      />
    </div>
  );
};