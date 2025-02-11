import { Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import Homepage from "./Pages/Homepage"
import CharacterDetails from "./Pages/CharacterDetails"

function App() {


  return (
    <>

      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/characters/:characterId" element={<CharacterDetails />} />
        <Route path="/*" element={<h2> Page not found </h2>} />

      </Routes>



    </>
  )
}

export default App
