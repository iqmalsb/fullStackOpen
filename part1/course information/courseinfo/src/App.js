const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} e1={exercises1} part2={part2} e2={exercises2} part3={part3} e3={exercises3} />
      <Total e1={exercises1} e2={exercises2} e3={exercises3}/>
    </div>
  )
}
// Render course name
const Header = (course) => {
  return (
    <><h1>{course.course}</h1></>
  )
}
// Render parts and number of exercises
const Content = (course) => {
  return (
    <div>
      <Part part={course.part1} exercise={course.e1} />
      <Part part={course.part2} exercise={course.e2} />
      <Part part={course.part3} exercise={course.e3} />
    </div>
  )
}
// Total number of exercises
const Total = (course) => {
  return (
    <p>Number of exercises {course.e1 + course.e2 + course.e3}</p>
  )
}

const Part = (course) => {
  return (
    <p>{course.part} {course.exercise}</p>
  )
}

export default App