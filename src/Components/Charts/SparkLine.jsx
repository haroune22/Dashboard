/* eslint-disable react/prop-types */
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';
 
const SparkLine = ({ currentColor,id,type,height,width,data,color,}) => {

  return (
   
    <ResponsiveContainer width={width} height={height}>
    <LineChart data={data}>
      <Tooltip />
      <Line
        type={type}
        dataKey="y"
        stroke={color}
        strokeWidth={2}
        dot={false} // If you don't want dots at data points
      />
    </LineChart>
  </ResponsiveContainer>
  )
}

export default SparkLine