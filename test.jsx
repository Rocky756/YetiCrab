import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Table, Button } from 'react-bootstrap';
import { SORT_NUM_OLD, SORT_NUM_NEW } from '../redux/types';
import { sortDateNewAC, sortDateOldAC } from '../redux/actionCreators/sortAC';
import { deleteReqAC } from '../redux/actionCreators/deleteReqAC';
import { editReqAC } from '../redux/actionCreators/editReqAC';
import { AddForm } from './AddForm';



export const TableAdmin = () => {
  const dispatch = useDispatch();
  const requests = useSelector((state) => state.requests);
  const [numSort, setNumSort] = useState(false);
  const [dateSort, setDateSort] = useState(false);
  const [showEditedForm, setShowEditedForm] = useState('');

  const [clientState, setClientState] = useState('');
  const [carrierState, setCarrierState] = useState('');
  const [phoneState, setPhoneState] = useState('');
  const [commentState, setCommentState] = useState('');
  const [atiState, setAtiState] = useState('');
  
  const sortNumOldHandler = () => {
    dispatch({type: SORT_NUM_OLD});
    setNumSort((pre) => !pre)
  };
  const sortNumNewHandler = () => {
    dispatch({type: SORT_NUM_NEW});
    setNumSort((pre) => !pre)
  };
  const sortDateNewHandler = async() => {
    const action = sortDateNewAC();
    dispatch(action);
    setDateSort((pre) => !pre)
  }
  const sortDateOldHandler = async() => {
    const action = sortDateOldAC();
    dispatch(action);
    setDateSort((pre) => !pre)
  }
  const deleteHandler = async(_id) => {
    console.log(_id);
    const action = deleteReqAC(_id);
    dispatch(action);
  }

  const editHandler = async(_id) => {
    console.log(_id);
    // const action = editReqAC(_id, clientState, carrierState, phoneState, commentState, atiState);
    // dispatch(action);
  }

  
  
  
  return (
    <div>
      {requests?.length ?
      <Table striped bordered hover>
        <thead>
          <tr>
          {!numSort ?
            <th>№ <svg onClick={sortNumOldHandler} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-up-alt" viewBox="0 0 16 16">
              <path d="M3.5 13.5a.5.5 0 0 1-1 0V4.707L1.354 5.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 4.707V13.5zm4-9.5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1zm0 3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5zM7 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5z"/>
              </svg>
            </th>
            :
            <th>№ <svg onClick={sortNumNewHandler} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-up" viewBox="0 0 16 16">
              <path d="M3.5 12.5a.5.5 0 0 1-1 0V3.707L1.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 3.707V12.5zm3.5-9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/>
              </svg>
            </th>
            }
             {!dateSort ?
            <th>Время <svg onClick={sortDateNewHandler} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-up-alt" viewBox="0 0 16 16">
              <path d="M3.5 13.5a.5.5 0 0 1-1 0V4.707L1.354 5.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 4.707V13.5zm4-9.5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1zm0 3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5zM7 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5z"/>
              </svg>
            </th>
            :
            <th>Время <svg onClick={sortDateOldHandler} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-up" viewBox="0 0 16 16">
              <path d="M3.5 12.5a.5.5 0 0 1-1 0V3.707L1.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 3.707V12.5zm3.5-9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/>
              </svg>
            </th>
            }
            <th>Клиент</th>
            <th>ФИО перевозчика</th>
            <th>Тел. перевозчика</th>
            <th>Комментарии</th>
            <th>ATI</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {requests?.map((req) =>
          <tr key={req._id}>
              <td>{req.reqnum}</td>
              <td>{req.datetime}</td>
              <td>{req.company_name}</td>
              <td>{req.carrier_name}</td>
              <td>{req.tel}</td>
              <td>{req.comment}</td>
              <td><a href={`https://ati.su/firms/${req.ati}/info`}>{req.ati}</a></td>
              <td>
                <Button variant="secondary" className='btnTab' onClick={() => setShowEditedForm(req._id)}>Изменить</Button>
                <Button variant="secondary" className='btnTab' onClick={() => deleteHandler(req._id)}>Удалить</Button>
              </td>
              {showEditedForm == req._id ? (
                <Table>
                  <thead>
                    <tr>
                      <td>Клиент</td>
                      <td>ФИО перевозчика</td>
                      <td>Тел. перевозчика</td>
                      <td>Комментарии</td>
                      <td>ATI</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input 
                          name='carrier_name'
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
                    </tr>
                  </tbody>
                </Table>) 
                : null}
          </tr>
          )}
        </tbody>
      </Table>
      : <h1>Ничего не найдено</h1>
      }
    <AddForm />
      
    </div>
  );
};

