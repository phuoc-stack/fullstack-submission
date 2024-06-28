const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

const partNames=course.parts.map(part=>part.name)
const totalExercises=course.parts.reduce((sum,part)=>sum+parts.exercises,0)

const Header = ({course})=>{
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  )
}

const Content = ({partNames})=>{
  return (
  <div>
    {partNames.map((name,index)=>(
      <p key={index}>{name}</p>
    ))}
  </div>
)
  }

const Total = ()=>{
  return (
    <div>
      <p>Number of exercises: {totalExercises}</p>
    </div>
  )
}

  return (
    <div>
    <Header course={course}/>
    <Content partNames={partNames}/>
    <Total />
  </div>
  )
}

export default App