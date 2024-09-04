import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';

// 1. 좌측은 연락처 등록폼, 우측은 연락처 리스트와 검색창
// 2. 리스트에 유저 이름과 전화번호 추가 가능
// 3. 리스트에 아이템이 몇개 있는지 보기
// 4. 사용자가 유저를 이름검색으로 찾을 수 있음
function App() {
  return (
    <div className="App">
      <h1 className='title'>연락처</h1>
        <Container>
          <Row>
            <Col>
              <ContactForm />
            </Col>
            <Col>
              <ContactList />
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default App;
