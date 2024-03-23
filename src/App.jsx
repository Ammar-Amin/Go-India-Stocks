import './App.css'
import Discussion from './components/Discussion'
import Market from './components/Market'
import SideBar from './components/SideBar'
import TwoHeading from './components/TwoHeading'

function App() {

  return (
    <div className='main mx-[50px] flex border-t-2 border-slate-300 '>
      <SideBar />
      <div>
        <TwoHeading />
        <div className='main w-full mt-3 flex'>
          <Discussion />
          <Market />
        </div>
      </div>
    </div>
  )
}

export default App
