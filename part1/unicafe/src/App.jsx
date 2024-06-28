import { useState } from 'react'

const Button = (props) =>{
  return (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
  )
}

const StatisticLine=(props)=>{
  return (
      <tr>
      <td>{props.text}:</td>
      <td>{props.value}</td>
      </tr> 
  )
}

const Statistics = (props) =>{
  if (props.total==0){
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <table>
      <tbody>
    <StatisticLine text="good" value ={props.good} />
    <StatisticLine text="neutral" value ={props.neutral} />
    <StatisticLine text="bad" value ={props.bad} />
    <StatisticLine text="total" value ={props.total} />
    <StatisticLine text="average" value ={props.average} />
    <StatisticLine text="positive" value ={`${props.positive}%`} />
    </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    const updatedTotal= updatedGood+neutral+bad
    setTotal(updatedTotal)
    setAverage((updatedGood+neutral*0+bad*(-1))/updatedTotal*100)
    const updatedPositive = updatedGood/updatedTotal*100 
    setPositive(updatedPositive)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    const updatedTotal= updatedNeutral+good+bad
    setTotal(updatedTotal)
    setAverage((updatedNeutral*0+good+bad*(-1))/updatedTotal*100)
    const updatedPositive = good/updatedTotal*100 
    setPositive(updatedPositive)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    const updatedTotal= updatedBad+good+neutral
    setTotal(updatedTotal)
    setAverage((updatedBad*(-1)+neutral*0+good)/updatedTotal)
    const updatedPositive = good/updatedTotal*100 
    setPositive(updatedPositive)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <h1>statistics</h1>
      <Statistics 
      good={good} 
      neutral={neutral} 
      bad={bad} 
      total={total} 
      average={average} 
      positive={positive}/>
    </div>
  )
}

export default App