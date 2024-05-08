import NavBar from "./Components/NavBar"
import { NewsBoard } from "./Components/NewsBoard"

export const App = () => {
  const [category,setCategory] = useState("general");
  return (
    <div>
      <NavBar setCategory={setCategory} />
      <NewsBoard category={category}/>
    </div>

  )
}

export default App

