import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { Button } from 'react-bootstrap';
import { editReqAC } from '../redux/actionCreators/editReqAC';

export const AdminInput = ({ req, setShowEditedForm }) => {
  const dispatch = useDispatch();
  const [clientState, setClientState] = useState('');
  const [carrierState, setCarrierState] = useState('');
  const [phoneState, setPhoneState] = useState('');
  const [commentState, setCommentState] = useState('');
  const [atiState, setAtiState] = useState('');

  const editHandler = async(_id) => {
    console.log(_id);
    const action = editReqAC(_id, clientState, carrierState, phoneState, commentState, atiState);
    dispatch(action);
    setClientState('');
    setCarrierState('');
    setPhoneState('');
    setCommentState('');
    setAtiState('');
    setShowEditedForm('');
  }
  return (
      <tr>
        <td>{req.reqnum}</td>
        <td>{req.datetime}</td>
        <td>
          <input 
            name='company_name'
            value={clientState} 
            type="text"
            onChange={({ target }) => setClientState((target.value))} 
            placeholder={req.company_name}/>
        </td>
        <td>
          <input
            name='carrier_name'
            value={carrierState} 
            type="text"
            onChange={({ target }) => setCarrierState((target.value))} 
            placeholder={req.carrier_name}/>
        </td>
        <td>
          <input 
            name='tel'
            value={phoneState} 
            type="tel"
            onChange={({ target }) => setPhoneState((target.value))} 
            pattern="[0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
            placeholder={req.tel}/>
        </td>
        <td>
          <input 
          name='comment'
          value={commentState} 
          type="text"
          onChange={({ target }) => setCommentState((target.value))} 
          placeholder={req.comment}/>
        </td>
        <td>
          <input 
          name='ati'
          value={atiState} 
          type="text"
          onChange={({ target }) => setAtiState((target.value))} 
          placeholder={req.ati}/>
        </td>
        <td>
          <Button variant="secondary" className='btnTab' onClick={() => setShowEditedForm('')}>Отменить</Button>
          <Button variant="secondary" className='btnTab' onClick={() => editHandler(req._id,)}>Сохранить</Button>
        </td>
      </tr>
  );
};

