import './App.css'
import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2'
import Page3 from './Pages/Page3'
import Page4 from './Pages/Page4'
import Page5 from './Pages/Page5'
import Page6 from './Pages/Page6'
import Page7 from './Pages/Page7'
import Page8 from './Pages/Page8'
import Page9 from './Pages/Page9'
import HotelBooking from "./Components/Booking/HotelRoomBooking";
import {  RouterProvider, createBrowserRouter  } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
  { 
    path:"/",
    element:
    <>
    <Page1 />
    <Page2 />
    <Page3 />
    <Page4 />
    <Page5 />
    <Page6 />
    <Page7 />
    <Page8 />
    <Page9 />
    </>
  },
  {
    path:"/Booking",
    element:<><HotelBooking /></>
  }
])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}
export default App
