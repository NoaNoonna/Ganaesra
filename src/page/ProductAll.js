import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();

    const getProductList = async() => {
      let keyword = query.get("q") || "";
      console.log("keyword?", keyword);
      let url = `http://localhost:5000/products?q=${keyword}`;
      let response = await fetch(url);
      console.log("response", response);
      let data = await response.json();
      console.log("data?", data);
      setProductList(data);
    }
  
    useEffect(()=>{
        getProductList();
    },[query]);

  return (
    <Container>
        <Row className="main-img">
            <img src="https://ganaesra.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/0ddbf4ca568c45b48353c2228a83a837.jpg"/>
            {/* <img src="https://ganaesra.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/2bf81268256f4e14e88ce96e728c55fa.jpg"/>
            <img src="https://ganaesra.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/3dc678a9d1d0015cdbaf4f57c2d5b343.jpg"/>
            <img src="https://ganaesra.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/5ca17edfc02ea12fbbbe5ec57a57e007.jpg"/> */}
        </Row>
        <Row>
            {productList.map((item)=>(
                <Col lg={4} key={item.id}>
                    <ProductCard item={item} />
                </Col>
            )
        )}

        </Row>
    </Container>
  )
}

export default ProductAll
