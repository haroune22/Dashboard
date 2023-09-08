
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { stackedCustomSeries } from '../../data/dummy';

const Stacked = ({ width, height }) => {
  return (

      <BarChart width={width} height={height} data={stackedCustomSeries}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Budget" name="Budget" fill="blue" />
        <Bar dataKey="Expense" name="Expense" fill="red" />
      </BarChart>

  );
};

export default Stacked;
