import { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Language = ({ name, img, options }) => {
  // console.log(lang)
  const [showDesc, setShowDesc] = useState(false)
  console.log(showDesc)
  return (
    <Container style={{ background: "peachpuff" }} className="p-4 rounded-2 h-100 lang-card" onClick={() => setShowDesc(!showDesc)} type="button">
      {!showDesc &&
        <Container>
          <Image src={img} width="60%" className="lang-logo"></Image>
          <h3>{name}</h3>
        </Container>
      }
      {showDesc &&
        <ol className="h-100 d-flex flex-column justify-content-center">
          {options.map((item) => {
            return (
              <li className="h5 text-start">{item}</li>
            )
          })}
        </ol>
      }
    </Container>
  );
};

export default Language