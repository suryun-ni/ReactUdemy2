export function CourseGoal({TITLE, DESCRIPTION}) {
  return (
    <li>
      <h2>{TITLE}</h2>
      <p>{DESCRIPTION}</p>
    </li>
  );
}

function App() {
  return (
    <div id="app" data-testid="app">
      <h1>Time to Practice</h1>
      <p>One course, many goals! 🎯</p>
      <ul>
      <CourseGoal 
      TITLE = "Learn React"
      DESCRIPTION = "In-depth"
      />
      <CourseGoal
      TITLE = "PRACTICE"
      DESCRIPTION = "Practice workng with React"
      />
        {/* OUTPUT AT LEAST TWO CourseGoal components here */}
        {/* One of them should have a title of “Learn React” and a description of “In-depth” */}
      </ul>
    </div>
  );
}

export default App;