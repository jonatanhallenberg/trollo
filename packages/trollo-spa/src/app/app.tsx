
import styled from 'styled-components';
import NxWelcome from "./nx-welcome";

import { Route, Routes, Link } from 'react-router-dom';
import Board from './pages/Board';

const StyledApp = styled.div`
    // Your style here
`;


export const App = () => {

  return (
    <StyledApp>
      <Routes>
        <Route  
          path="/"
          element={
            <Board />
          }
        />
        <Route
          path="/page-2"
          element={
            <div><Link to="/">Click here to go back to root page.</Link></div>
          }
        />
      </Routes>
    </StyledApp>
  );
}

export default App;
