import Container from "react-bootstrap/Container";
import Cards from "./components/Cards";
import Header from "./components/Header";


function App() {
  return (
    <Container className="text-center mt-4">
      <Header />
      <Cards />
    </Container>
  );
}

export default App;