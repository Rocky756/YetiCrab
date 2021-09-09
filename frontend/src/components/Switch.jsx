import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


export const SwitchCase = ({switchState, setSwitchState}) => {
  
  const handleChange = () => {
    setSwitchState((pre) => !pre)
  }

  // const handleChange = (event) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // };

  return (
    <div>
      {switchState ? 
      <>
      <Button variant="secondary" className='swicthBtn' onClick={handleChange}>User</Button>
      <Button variant="primary" className='swicthBtn' onClick={handleChange}>Admin</Button>
      </>
      :
      <>
      <Button variant="primary" className='swicthBtn' onClick={handleChange}>User</Button>
      <Button variant="secondary" className='swicthBtn' onClick={handleChange}>Admin</Button>
      </>
      }
    </div>
  );
}
