import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
const Language = ({ name, img, options }) => {
  // console.log(lang)
  return (
    <Container style={{background:"peachpuff"}} className="p-4 rounded-2" >
      <Container>
        <Image src={img} width="60%"></Image>
        <h3>{name}</h3>
      </Container>
    </Container>
  );
};

export default Language