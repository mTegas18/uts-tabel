import logo from './logo.svg';
import './App.css';
import { Table } from 'react-bootstrap';

function App() {
  return (
    <div className="container">
      <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mokhamad</td>
      <td>Tegas</td>
      <td>@tegas570</td>
    </tr>
    <tr>
      <td>2</td>
      <td>John</td>
      <td>Doe</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
    </div>
  );
}

export default App;
