const Header = ({course})=> <h1>{course}</h1>

const Total = ({totalExercises})=> <p>Number of exercises: {totalExercises}</p>

const Part = ({part}) => 
<p>
  {part.name} {part.exercises}
</p>

const Content = ({parts})=>(
  <>
  <Part part={parts[0]} />
  <Part part={parts[1]} />
  <Part part={parts[2]} />
</>
)

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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
  return (
    <div>
    <Header course={course}/>
    <Content parts={parts}/>
    <Total totalExercises={parts.reduce((sum,parts)=>sum+parts.exercises,0)}/>
  </div>
  )
}
export default App