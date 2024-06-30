const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Course courses={courses} />
  </div>
  )
}
const Header = ({courseName}) => <h1>{courseName}</h1>

const Total = ({sum}) => 
<p style={{fontWeight: 'bold'}}>total of {sum} course
</p>

const Part = ({part}) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({parts}) => 
  <>
  {parts.map(part=>(
    <Part key={part.id} part={part} />
  ))}
  </>

const Course=({courses})=>{
  return (
    <>
    {courses.map(course=>(
      <div key={course.id}>
        <Header courseName={course.name}/>
        <Content key={`content-${course.id}`} parts={course.parts}/>
        <Total sum={course.parts.reduce((sum,part)=>sum+part.exercises,0)}/>
      </div>
    ))}
    </>
  )
}
export default App