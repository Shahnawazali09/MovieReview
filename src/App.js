import React from 'react';
import Cards from './Cards';
import Sdata from './Sdata';
 
const App = () => (
  <>
   <h1 className='heading_style'>Movies review App</h1>
   {Sdata.map((val,index) => {
      return( 
        <Cards
        key = {val.id}
    imgsrc = {val.imgsrc}
    title ={val.title}
    director = {val.Director}
    writer = {val.Writers} 
    star = {val.Stars}
    link = {val.link}
     />
     );
    })}
  </>

  );


export default App;
