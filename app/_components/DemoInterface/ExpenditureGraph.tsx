// components/ExpenditureGraph.tsx
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(...registerables);

type Expenditure = {
  category: string;
  amounts: number[];
};

type ExpenditureGraphProps = {
  expenditures: Expenditure[];
};

const ExpenditureGraph: React.FC<ExpenditureGraphProps> = ({
  expenditures,
}) => {
  const data = {
    labels: Array.from(
      { length: Math.max(...expenditures.map((e) => e.amounts?.length)) },
      (_, i) => i + 1
    ),
    datasets: expenditures.map((expenditure, i) => ({
      label: expenditure.category,
      data: expenditure.amounts,
      fill: "origin",
      backgroundColor: `hsla(${
        (i * 360) / expenditures.length
      }, 100%, 50%, 0.1)`,
      borderColor: `hsl(${(i * 360) / expenditures.length}, 100%, 50%)`,
      pointRadius: 0,
    })),
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ height: "400px" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default ExpenditureGraph;
