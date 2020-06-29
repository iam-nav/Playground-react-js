import React from 'react';
import logo from './logo.svg';
import FragmentComponent from './components/FragmentComponent'
import Refcomponent from  './components/Refcomponentt'
import ForwardRef from './components/ForwardRef'
function App() {
  return (
    <div className="demo">
  <ForwardRef></ForwardRef>
  {/* <Refcomponent></Refcomponent> */}
  {/* <FragmentComponent></FragmentComponent> */}
  </div>
  );
}

export default App;
