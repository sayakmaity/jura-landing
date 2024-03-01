import './App.css';
import { AwesomeButton } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';
import TypingAnimation from './components/TypingAnimation';
import styled from "styled-components";

const Container = styled.div`
  max-width: 1300px;
  overflow-x: scroll;
  padding: 10px;
  display: flex;
  text-align: left;
`;

function App() {
  const title = 'Jura Labs';
  const textFollowUp = 'Coming Soon...'
  return (
      <div className="App">
        <body>
        <TypingAnimation title={title} textFollowUp={textFollowUp} />
        </body>
      </div>
  );
}

export default App;
