import { MDBChart, MDBCol } from 'mdb-react-ui-kit';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function App() {
  return (
    <MDBCol lg='7'>
      <MDBChart
        type='bar'
        data={{
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          datasets: [
            {
              label: 'Traffic',
              data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
            },
          ],
        }}
      />
    </MDBCol>
  );
}