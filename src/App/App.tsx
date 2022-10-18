import Layout from '../HOC/Layout/Layout'
import HomePage from '../Pages/HomePage/HomePage'
import WindowsForAlcoves from '../Pages/WindowsForAlcoves/WindowsForAlcoves'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/for-alcoves' element={<WindowsForAlcoves />} />
      </Routes>
    </Layout>
  )
}

export default App