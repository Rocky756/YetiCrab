import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { Table, Button } from 'react-bootstrap';
import { addReqAC } from '../redux/actionCreators/addReqAC';

export const AddForm = () => {
  const dispatch = useDispatch();
  const [clientState, setClientState] = useState('');
  const [carrierState, setCarrierState] = useState('');
  const [phoneState, setPhoneState] = useState('');
  const [commentState, setCommentState] = useState('');
  const [atiState, setAtiState] = useState('');

  const submitHandler = async (event) => {
    let action = addReqAC(clientState, carrierState, phoneState, commentState, atiState);
    dispatch(action);
    setClientState('');
    setCarrierState('');
    setPhoneState('');
    setCommentState('');
    setAtiState('');


  };
  return (
    <div className='formDiv'>
      <Table>
        <thead>
          <tr>
            <td>Название фирмы клиента</td>
            <td>ФИО перевозчика</td>
            <td>Тел. перевозчика</td>
            <td>Комментарий</td>
            <td>ATI</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input  
                name='company_name'
                value={clientState} 
                type="text"
                onChange={({ target }) => setClientState((target.value))} 
                placeholder='Введите название'
                />
            </td>
            <td>
              <input  
                name='carrier_name'
                value={carrierState} 
                type="text"
                onChange={({ target }) => setCarrierState((target.value))} 
                placeholder='Укажите ФИО'
                />
            </td>
            <td>
              <input  
                name='tel'
                value={phoneState} 
                type="tel"
                onChange={({ target }) => setPhoneState((target.value))} 
                pattern="[0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                placeholder='Формат: X-XXX-XXX-XX-XX'
                />
            </td>
            <td>
              <input  
                name='comment'
                value={commentState} 
                type="text"
                onChange={({ target }) => setCommentState((target.value))} 
                placeholder='Комментарий...'
                />
            </td>
            <td>
              <input  
                name='ati'
                value={atiState} 
                type="text"
                onChange={({ target }) => setAtiState((target.value))} 
                placeholder='Код ATI...'
                />
            </td>
          </tr>
        </tbody>
      </Table>
      <Button variant="primary" className='swicthBtn' onClick={submitHandler}>Добавить</Button>
    </div>
  );
};

