import React from 'react';
import ReactApexChart from 'react-apexcharts';

export const MultiAxisChart = () => {
  const options = {
    chart: {
      id: 'multi-axis-chart', // Identificador único para o gráfico
      type: 'line', // Tipo principal do gráfico (line, para que possamos adicionar barras)
      stacked: false, // Configuração para não empilhar os gráficos
      toolbar: {
        show: false, // Desativa a barra de ferramentas
      },
    },
    title: {
      text: 'Gráfico com Múltiplos Eixos',
      align: 'center',
    },
    stroke: {
      width: [0, 4], // Define a largura da linha (primeiro gráfico será barra, o segundo será linha)
    },
    plotOptions: {
      bar: {
        columnWidth: '50%', // Largura das barras
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // Meses no eixo X
    },
    yaxis: [
      {
        axisTicks: {
          show: false, // Não mostra os ticks no primeiro eixo Y
        },
        axisLine: {
          show: false, // Não mostra a linha do primeiro eixo Y
        },
        title: {
          text: 'Vendas',
        },
        labels: {
          formatter: (value) => `${value}`, // Formatação para o eixo Y das vendas
        },
      },
      {
        opposite: true, // Define que o segundo eixo Y será do lado oposto
        title: {
          text: 'Lucro',
        },
        labels: {
          formatter: (value) => `$${value}`, // Formatação para o eixo Y do lucro
        },
      },
    ],
    tooltip: {
      shared: true,
      intersect: false,
    },
  };

  const series = [
    {
      name: 'Vendas',
      type: 'bar', // Tipo de gráfico para vendas (barra)
      data: [30, 40, 35, 50, 49, 60, 70], // Dados de vendas
    },
    {
      name: 'Lucro',
      type: 'line', // Tipo de gráfico para lucro (linha)
      data: [20, 25, 30, 35, 40, 45, 50], // Dados de lucro
    },
  ];

  return (
    <div>
      <ReactApexChart
        options={options} // Passando as opções do gráfico
        series={series}   // Passando os dados das séries
        type="line"       // Tipo de gráfico principal
        height={350}      // Altura do gráfico
      />
    </div>
  );
};