import React from 'react';
import ReactApexChart from 'react-apexcharts';

export const ColumnChart = () => {
  const options = {
    chart: {
      id: 'column-chart', // Identificador único para o gráfico
      type: 'bar', // Tipo de gráfico (barra, que é o mesmo de coluna)
      toolbar: {
        show: false, // Desativa a barra de ferramentas
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // Meses no eixo X
    },
    title: {
      text: 'Gráfico de Colunas Simples',
      align: 'center', // Título centralizado
    },
    plotOptions: {
      bar: {
        horizontal: false, // Colunas verticais
      },
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
        type="bar"        // Tipo do gráfico (barra, equivalente ao column)
        height={350}      // Altura do gráfico
      />
    </div>
  );
};