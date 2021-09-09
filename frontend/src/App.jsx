import React, {useState, useEffect} from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getRequestsAC } from './redux/actionCreators/getRequestsAC';
import { TableUser } from './components/TableUser';
import { TableAdmin } from './components/TableAdmin';
import { SwitchCase } from './components/Switch';
import { Badge } from 'react-bootstrap';

const App = () => {
  const requests = useSelector((state) => state.requests);
  const dispatch = useDispatch();
  const [switchState, setSwitchState] = useState(false);

  useEffect(() => {
    console.log('Зашел в UseEffect');
    const action = getRequestsAC();
    dispatch(action);
  }, []);
  
  return (
    <div className='container'>
      <h3>
        В таблице <Badge bg="success">{requests.length}</Badge> заявок
      </h3>
      < SwitchCase switchState={switchState} setSwitchState={setSwitchState} />
      {switchState ?
      < TableAdmin />
      :< TableUser />
      }
      <h1>Привет</h1>
    </div>
  );
};

export default App;
