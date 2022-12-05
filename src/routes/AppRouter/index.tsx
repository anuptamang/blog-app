import { Route, Routes } from 'react-router-dom'
import Layout from '../../layouts/Layout'
import About from '../../pages/About'
import Home from '../../pages/Home'
import NotFound from '../../pages/NotFound'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
