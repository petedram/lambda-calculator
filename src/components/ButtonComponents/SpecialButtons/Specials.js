import React, { useState } from "react";
import { specials } from '../../../data';
import { SpecialButton } from '../SpecialButtons/SpecialButton'

//import any components needed

//Import your array data to from the provided data file

export const Specials = () => {
  // STEP 2 - add the imported data to state
  const [dataSp, setDataSp] = useState(0);


  return (
    <div className='specialsContainer'>
      {console.log('specials'+ specials)}
      {specials.map((item) => {
            return (
              <SpecialButton special={item} key={Math.random()} />
            )
          })
        }


      {/* {console.log(operators)} */}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

