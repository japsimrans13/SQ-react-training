// Form implementaion using try catch
import React, { useState } from "react";

const MyForm1 = () => {
  const [error, setError] = useState("");

  const handleinput = (data) => {
    console.log(data);
    try {
       if(data.length>5){
        setError('Length nust be less than 5');
       }else if(data.length === 5){
        setError('maximum length recahed');
       }
       else if(data.length < 5){
        setError(`Limit of characters : ${5-data.length}`);
       }
       else{
        setError('Unknown Error');
       }
    } catch (error) {
        setError('Error : ',error);
    }
  };
  return (
    <div>
      <p>{error}</p>
      <div>
        <input
          type="text"
          onChange={(e) => {
            handleinput(e.target.value);
          }}
        />
      </div>
    </div>
  );
};
export default MyForm1;
