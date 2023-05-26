import './App.css'

import { ThemeProvider } from '@emotion/react'
import theme from './styles/theme'

import NavBar from './components/navbar'
import Footer from './components/footer'
import InputPage from './pages/InputPage'
import EndPage from './pages/EndPage'
import HomePage from './pages/HomePage'


import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SurveyPage from './pages/SurveyPage'



const router = createBrowserRouter([

  { path: '/', element: <ThemeProvider theme={theme}> <HomePage /> </ThemeProvider> },
  { path: '/login', element: <InputPage /> },
  { path: '/survey', element: <SurveyPage /> },
  { path: '/end', element: <EndPage /> },

])


const App = () => {

  return (
    <>

      <ThemeProvider theme={theme}><NavBar /></ThemeProvider>

      <RouterProvider router={router} />

      <ThemeProvider theme={theme}><Footer /></ThemeProvider>

    </>
  )
}

export default App