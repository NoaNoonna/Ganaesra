import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  let {id} = useParams();
  const [product, setProduct] = useState(null);

  const getProuct = async() => {
    let url = `https://my-json-server.typicode.com/NoaNoonna/Ganaesra/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data2222?", data);
    setProduct(data);
  }

  useEffect(()=>{
    getProuct();
  },[]);

  return (
    <Container>
        <Row>
          <Col xs={12} md={6} className="product-detail-img">
            <img src={product?.img}/>
          </Col>
          <Col xs={12} md={6}>
            <div className="productInfo">
              <span>{product?.ordinaire ? "[ordinaire]" : ""}</span>
              <span>{product?.title}</span>
            </div>
            <div className="new-item">{product?.new ? "🌷봄신상":""}</div>
            <div className="product-price">₩{product?.price}</div>
            <div>
              <Dropdown className="drop-down">
                <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                  사이즈 선택
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {product?.color.length > 0 &&
                    product.color.map((item) => (
                      <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
              </Dropdown>

              <Button 
                variant="dark" 
                className="add-button"
                >추가
              </Button>
            </div>
          </Col>
        </Row>
    </Container>
  );
};

export default ProductDetail
