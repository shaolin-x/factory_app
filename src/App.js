import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';

function App() {
  const [userData, setUserData] = useState([])
  const getUserData = ()=>{
    axios.get('https://cs519app.azurewebsites.net')
    .then((res)=>{
      setUserData(res.data)
    })
  }

  useEffect(()=>{
    getUserData();
  },[])

  

  return (
    <div className="App">
      <table>
          <tr>
            <th>Product Name</th>
            <th>Product ID</th>
            <th>Quantity Received</th>
            <th>Quantity Shipped</th>
            <th>Quantity Returned</th>
            <th>Quantity on Hand</th>
          </tr>
      {userData && userData.map((data)=>(
        
          <tr>
            <td>{data.ProductName}</td>
            <td>{data.ProductID}</td>
            <td>{data.numReceived}</td>
            <td>{data.numShipped}</td>
            <td>{data.numReturen}</td>
            <td>{data.numStorage}</td>
          </tr>
       
      ))}
      </table>

    </div>
  );
}

export default App;
