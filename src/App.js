// import { useState } from 'react';
import './App.css';
import AppUseReducer from './components/useReducer/AppUseReducer';
// import MainContext from './components/context/contextV3/MainContext'
import CheckStatusNetwork from './components/CheckStatusNetwork';
// import MainApp from './components/reducerAndEffect/MainApp';
// import { ThemeContext } from './components/reducerAndEffect/ThemeContext'
// import CallBack from './components/callback/CallBack';
// import CardSubmit from './components/card/CardSubmit';
// import Grandpa from './components/context/Grandpa';
// import AppCallApiV1 from './components/effect/AppCallApiV1';
// import CallApi from './components/effect/CallApi';
// import ClockEffect from './components/effect/ClockEffect';
// import Effect from './components/effect/Effect';
// import ResApi from './components/effect/ResApi';
// import { StateClass } from './components/state/StateClass';
// import StateFunc from './components/state/StateFunc';
// import AppContext from './components/context/contextV2/AppContext'
// import MainGlobalState from './components/globalState/MainGlobalState'

// import SavingDataLocalStorage from './components/SavingDataLocalStorage'
import LocalStorageV2 from './components/LocalStorageV2'
import Search from './components/searching-api/Search';


function App() {

  // const [active, setActive] = useState(true);

  // const globalStyles = {
  //   justifyContent: 'center',
  //   margin:'50px',
  //   backgroundColor: '#909090'
  // }

  return (
    <div className="App">

      {/* <div style={globalStyles}>
        <strong>State</strong>
        <StateClass />
        <StateFunc />
      </div> */}

      {/* <div>
        <strong>Effect</strong>
        <Effect/>
      </div> */}

      {/* <div style={globalStyles}>
        <strong>Callback</strong>
        <CallBack/>
      </div> */}

      {/* <div>        
        {active && <button onClick={()=>setActive(false)}>Close</button>}
        {active && <ClockEffect/>}
        {!active && <button onClick={()=>setActive(true)}>Open</button>}
      </div> */}

      <div>
        {/* <ResApi/> */}
        {/* <CallApi/> */}
        {/* <AppCallApiV1/> */}
        {/* <CardSubmit/> */}

        {/* context
        --------------
        <Grandpa/> */}
        {/* <AppContext/> */}

        {/* <MainGlobalState/> */}

        {/* useReducer
        ------------------ */}
        <AppUseReducer />
        {/* <MainContext/> */}
        
        {/* <ThemeContext>
          <MainApp />
        </ThemeContext> */}
        {/* <SavingDataLocalStorage/> */}
        <LocalStorageV2/>
        <CheckStatusNetwork />
        <Search/>
      </div>
    </div >
  );
}

export default App;