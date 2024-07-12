import React from 'react';
import styled from 'styled-components';
import Burger from './assets/cat-1.png';
import Kiwi from './assets/cat-2.png';
import Peach from './assets/cat-3.png';
import redApple from './assets/cat-4.png';
import Snack from './assets/cat-5.png';
import Vegetables from './assets/cat-6.png';
import Strawberry from './assets/cat-7.png';
import blackPlum from './assets/cat-8.png';
import custardApple from './assets/cat-9.png';
import coffe from './assets/cat-10.png';
import Headphone from './assets/cat-11.png';
import { Carousel } from 'react-bootstrap';

const ContainerFluid = styled.div`
  padding: 1rem;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const Col = styled.div`
  flex: 1;
  margin: 0.5rem;
`;

const Title = styled.h2`
  text-align: left;
`;

const Nav = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin-right: 1rem;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #000;

  &:hover {
    text-decoration: underline;
  }
`;

const Card = styled.div`
  background-color: #f8f9fa;
  color: #000;
  border: none;
  text-align: center;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const CardTitle = styled.h5`
  margin-bottom: 0.5rem;
`;

const CardText = styled.p`
  margin-bottom: 0;
`;

function Categories() {
  return (
    <ContainerFluid>
      <Row>
        <Col style={{ flex: '0 0 25%' }}>
          <Title>Featured Categories</Title>
        </Col>
        <Col>
          <Nav>
            <NavItem>
              <NavLink href="cake-milk">Cake & Milk</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="coffes-teas">Coffes & Teas</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="pet-food">Pet Foods</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="vegetables">Vegetables</NavLink>
            </NavItem>
          </Nav>
        </Col>
      </Row>

      <ContainerFluid>
        <Carousel>
          <Carousel.Item>
            <Row>
              <Col>
                <Card>
                  <img src={Burger} alt="burger" />
                  <CardTitle>Cake & Milk</CardTitle>
                  <CardText>26 items</CardText>
                </Card>
              </Col>
              <Col >
                <Card>
                  <img src={Kiwi} alt="kiwi" />
                  <CardTitle>Oganic Kiwi</CardTitle>
                  <CardText>26 items</CardText>
                </Card>
              </Col>
              <Col >
                <Card>
                  <img src={Peach} alt="peach" />
                  <CardTitle>Peach</CardTitle>
                  <CardText>26 items</CardText>
                </Card>
              </Col>
              <Col >
                <Card>
                  <img src={redApple} alt="redapple" />
                  <CardTitle>Red Apple</CardTitle>
                  <CardText>26 items</CardText>
                </Card>
              </Col>
              <Col >
                <Card>
                  <img src={Snack} alt="Snack" />
                  <CardTitle>Snack</CardTitle>
                  <CardText>26 items</CardText>
                </Card>
              </Col>
              <Col >
                <Card>
                  <img src={Vegetables} alt="vegetables" />
                  <CardTitle>Vegetables</CardTitle>
                  <CardText>26 items</CardText>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col >
                <Card>
                  <img src={Strawberry} alt="strawberry" />
                  <CardTitle>Strawberry</CardTitle>
                  <CardText>26 items</CardText>
                </Card>
              </Col>
              <Col>
                <Card>
                  <img src={blackPlum} alt="blackPlum" />
                  <CardTitle>Black Plum</CardTitle>
                  <CardText>26 items</CardText>
                </Card>
              </Col>
              <Col >
                <Card>
                  <img src={custardApple} alt="custardApple" />
                  <CardTitle>Custard Apple</CardTitle>
                  <CardText>26 items</CardText>
                </Card>
              </Col>
              <Col >
                <Card>
                  <img src={coffe} alt="coffeTea" />
                  <CardTitle>Coffe & Tea</CardTitle>
                  <CardText>26 items</CardText>
                </Card>
              </Col>
              <Col >
                <Card>
                  <img src={Headphone} alt="headphone" />
                  <CardTitle>Headphone</CardTitle>
                  <CardText>26 items</CardText>
                </Card>
              </Col>
              <Col >
                <Card>
                  <img src={Burger} alt="burger" />
                  <CardTitle>Cake & Milk</CardTitle>
                  <CardText>26 items</CardText>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </ContainerFluid>
    </ContainerFluid>
  );
}

export default Categories;
