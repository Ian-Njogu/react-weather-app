import React, {lazy, Suspense} from 'react'
import './App.css'


const FetchWeather = lazy(() => import("./components/Weather"))
function App() {
  

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FetchWeather/>
    </Suspense>
  )
}

export default App
