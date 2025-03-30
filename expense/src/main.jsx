import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import SignIN from './components/SignIN.jsx'
import HomePage from './components/Home/HomePage.jsx'
import AddExpense from './components/Home/AddExpense.jsx'
import Home from './components/Home/Home.jsx'
import WalletAi from './components/WalletAi/WalletAi.jsx'
import ExpenseBreakDown from './components/WalletAi/ExpenseBreak/ExpenseBreakDown.jsx'
import Investment from './components/WalletAi/Investment/Investment.jsx'
import SmartSuggestion from './components/WalletAi/SmartSuggestion/SmartSuggestion.jsx'
import TripPlanning from './components/WalletAi/TripPlanning/TripPlanning.jsx'
import SignUp from './components/Sign-Login/SignUp.jsx'
import Charts from './components/Charts/Charts.jsx'

const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
    },
    {
        path:"/SignIn",
        element:<SignIN/>
    },
    {
        path:"/SignUp",
        element:<SignUp/>
    },
    {
        path:"/Home",
        element:<Home/>,
        children:[
            { path: "/Home", element: <HomePage/> },
            { path: "/Home/AddTransaction", element: <AddExpense/> },
            {path:"/Home/WalletAi",element:<WalletAi/>},
            {path:"/Home/WalletAi/ExpenseBreakDown",element:<ExpenseBreakDown/>},
            {path:"/Home/WalletAi/Investment",element:<Investment/>},
            {path:"/Home/WalletAi/SmartSuggestion",element:<SmartSuggestion/>},
            {path:"/Home/WalletAi/TripPlanning",element:<TripPlanning/>},
            {path:"/Home/Charts",element:<Charts/>},
           
    ],
    },
 
   
   

    

])

createRoot(document.getElementById('root')).render(

    <RouterProvider router={router}>
        
    </RouterProvider>

    
)

