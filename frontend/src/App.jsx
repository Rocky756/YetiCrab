import React, {useState, useEffect} from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getRequestsAC } from './redux/actionCreators/getRequestsAC';
import { TableUser } from './components/TableUser';
import { TableAdmin } from './components/TableAdmin';
import { SwitchCase } from './components/Switch';
import { Badge, InputGroup, FormControl, Button } from 'react-bootstrap';
import { searchAC } from './redux/actionCreators/searchAC';

const App = () => {
  const requests = useSelector((state) => state.requests);
  const dispatch = useDispatch();
  const [switchState, setSwitchState] = useState(false);
  const [searchState, setSearchStare] = useState('');

  useEffect(() => {
    console.log('Зашел в UseEffect');
    const action = getRequestsAC();
    dispatch(action);
  }, []);

  const searchHandler = () => {
    console.log(searchState);
    const action = searchAC(searchState);
    dispatch(action);
  }
  
  return (
    <div className='container'>
      <h3>
        В таблице <Badge bg="success">{requests.length}</Badge> заявок
      </h3>
      <InputGroup className="mb-3">
        <FormControl
        placeholder="Введите данные для поиска"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        onChange={({ target }) => setSearchStare(target.value)}
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={searchHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
          Искать
        </Button>
      </InputGroup>
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
