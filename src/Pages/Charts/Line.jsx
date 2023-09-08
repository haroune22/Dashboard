
import { ChartsHeader } from '../../Components';
import MyLineChart from '../../components/Charts/LineChart';

const Line = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="Line" title="Inflation Rate" />
    <div className="w-full flex items-center justify-center overflow-x-auto ">
      <MyLineChart />
    </div>
  </div>
  )
}

export default Line