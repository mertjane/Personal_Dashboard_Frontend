import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { Container } from "./pages/Pages.styles";
import Landing from "./pages/Landing";
import Home from "./pages/Home";


function App() {
  const auth = useSelector((state) => state.auth);

  const ProtectedRoute = ({ children }) => {
    
    if (!auth.id) {
      return <Navigate to="/landing" />;
    }
    return children;
  };
  return (
    <Container>
      <Routes>
        <Route>
          <Route
            path="/"
            index
            element={
              <ProtectedRoute>
                 <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/landing" element={<Landing />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
