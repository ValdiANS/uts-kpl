import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Card from '../UI/Card';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  plugins: {
    legend: {
      labels: {
        font: {
          size: 14,
          family: 'Poppins, sans-serif',
        },
        color: 'rgba(39, 45, 45, 1)',
      },
    },
  },
};

const Chart = ({ data }) => {
  return (
    <Card className="bg-white p-4">
      <h2 className="font-semibold text-lg">% Persentase Penilaian</h2>
      <hr className="border-2 border-secondary my-2 font-po" />
      <Pie data={data} options={options} className=" mx-auto" />
    </Card>
  );
};

export default Chart;
