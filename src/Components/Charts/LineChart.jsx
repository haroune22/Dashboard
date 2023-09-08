import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { useStateContext } from '../../context/ContextProvider';

const lineCustomSeries = [
  {
    country: 'Germany',
    data: [
      { name: 'Jan', pv: 2400, uv: 4000 },
      { name: 'Feb', pv: 1398, uv: 3000 },
      { name: 'Mar', pv: 9800, uv: 1000 },
      { name: 'Apr', pv: 3908, uv: 2780 },
      { name: 'May', pv: 4800, uv: 1890 },
      { name: 'Jun', pv: 3800, uv: 3390 },
      { name: 'Jul', pv: 4300, uv: 2390 },
    ],
  },
  {
    country: 'England',
    data: [
      { name: 'Jan', pv: 2200, uv: 3200 },
      { name: 'Feb', pv: 1200, uv: 2200 },
      { name: 'Mar', pv: 8000, uv: 1200 },
      { name: 'Apr', pv: 3308, uv: 4580 },
      { name: 'May', pv: 4800, uv: 1890 },
      { name: 'Jun', pv: 3800, uv: 2390 },
      { name: 'Jul', pv: 4300, uv: 3090 },
    ],
  },
  {
    country: 'India',
    data: [
      { name: 'Jan', pv: 1800, uv: 2900 },
      { name: 'Feb', pv: 1398, uv: 3000 },
      { name: 'Mar', pv: 9800, uv: 2500 },
      { name: 'Apr', pv: 3908, uv: 2780 },
      { name: 'May', pv: 4800, uv: 1890 },
      { name: 'Jun', pv: 3800, uv: 2390 },
      { name: 'Jul', pv: 4300, uv: 4490 },
    ],
  },
];

const MyLineChart = () => {
  const { currentMode } = useStateContext();
  const colors = ['#8884d8', '#82ca9d', '#ff0000']; // Add more colors for additional series

  return (
    <div>
      {lineCustomSeries.map((series) => (
        <LineChart width={550} className='overflow-hidden ' height={420} data={series.data} key={series.country}>
          <CartesianGrid
            enableBackground={currentMode === 'Dark' ? '#33373E' : '#fff'}
            strokeDasharray="3 3"
          />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            name={`${series.country} (pv)`}
            stroke={colors[0]}
          />
          <Line
            type="monotone"
            dataKey="uv"
            name={`${series.country} (uv)`}
            stroke={colors[1]}
          />
        </LineChart>
      ))}
    </div>
  );
};

export default MyLineChart;
