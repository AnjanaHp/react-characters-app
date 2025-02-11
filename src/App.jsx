import { Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import Homepage from "./Pages/Homepage"

function App() {
 

  return (
    <>
    
    <Header />
<Routes>
<Route path ="/" element={<Homepage />} />
<Route path ="/*" element={<h2> Page not found </h2>} />
</Routes>


      
    </>
  )
}

export default App
