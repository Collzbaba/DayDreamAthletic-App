import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from "react";
import { useQuery } from '@apollo/client';
// import { QUERY_ALL_PRODUCTS } from '../../utils/queries';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import { SideBar } from "./SideBar.js";
import { useDispatch, useSelector } from 'react-redux'
import seedData from '../../assets/img/seeds';

export const ProductCard = ({image, name}) => {
  console.log(seedData);
  const dispatch = useDispatch();
  const [activeLink, setActiveLink] = useState("all");
  const [scrolled, setScrolled] = useState(false);
  // const {loading, data} = useQuery(QUERY_ALL_PRODUCTS);
  const addToBag = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(e.target);
    const product = e.target.getAttribute("data-object");
    dispatch({
      type: "ADD_TO_BAG",
      payload: { product }
    })
  }
  // const stateProduct = useSelector((state) => state.products)
  // console.log(stateProduct);

  return (
    <Container fluid>
        <Row>    
            {seedData.map((products, i) => {
                return <Col key={i}>
                    <Card style={{ width: '18rem', height: '28rem'}}>
                    <Card.Img src={products.image}/>
                    <Card.Body>
                        <Card.Title>{products.name}</Card.Title>
                    </Card.Body>
                    <br></br>
                    <Button onClick={addToBag} data-object={products.name} variant="primary">Check me out 👀</Button>
                        </Card>
                        <br></br>
                        </Col>})}
        </Row>
    </Container>
  );
};

export default ProductCard;
