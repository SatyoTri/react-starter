import { Routes, Route, Router } from 'react-router-dom'
import Home from './pages/Home'
import { Box } from '@mui/material'
import MainLayout from './layouts/MainLyout'

export default function App() {
  return (
    <div>
      <Box sx={{display: 'flex'}}>
      <MainLayout/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </Box>
    </div>
  )
}
