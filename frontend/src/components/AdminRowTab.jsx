import React from 'react';
import { useDispatch } from "react-redux";
import { Button } from 'react-bootstrap';
import { deleteReqAC } from '../redux/actionCreators/deleteReqAC';

export const AdminRowTab = ({req, setShowEditedForm}) => {
  const dispatch = useDispatch();

  const deleteHandler = async(_id) => {
    console.log(_id);
    const action = deleteReqAC(_id);
    dispatch(action);
  }
  return (
    <tr>
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
    </tr>
  );
};

