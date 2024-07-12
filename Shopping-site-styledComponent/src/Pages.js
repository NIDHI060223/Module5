import React from 'react';
import styled from 'styled-components';
import { PiPaperPlaneTiltBold } from "react-icons/pi";

const ContainerFluid = styled.div`
  padding: 1rem;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Carousel = styled.div`
  width: 100%;
`;

const CarouselIndicators = styled.div`
  button {
    &:not(:first-child) {
      margin-left: 5px;
    }
  }
`;

const CarouselInner = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const CarouselItem = styled.div`
  display: none;
  position: relative;
  transition: transform 0.6s ease-in-out;
  ${props => props.active && `
    display: block;
  `}
`;

const GroceryItem = styled(CarouselItem)`
  margin-top: 1rem;
  padding: 2rem;
  border-radius: 0.5rem;
  color: white;
  background-color: ${props => props.bgColor || '#fff'};
`;

const CarouselControlPrev = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: #000;
  border: none;
  border-radius: 50%;
`;

const CarouselControlNext = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: #000;
  border: none;
  border-radius: 50%;
`;

const FormWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const EmailForm = styled.form`
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  width: 50%;
  background-color: #f8f9fa;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const InputGroup = styled.div`
  display: flex;
  width: 100%;
`;

const InputGroupText = styled.span`
  background-color: lightgrey;
  border: 0;
  display: flex;
  align-items: center;
  padding: 0.5rem;
`;

const Input = styled.input`
  border: 0;
  padding: 0.5rem;
  flex-grow: 1;
`;

const SubscribeButton = styled.button`
  background-color: #3bb77e;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

function Pages() {
  return (
    <ContainerFluid>
      <Row>
        <Carousel id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <CarouselIndicators className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          </CarouselIndicators>

          <CarouselInner className="carousel-inner">
            <GroceryItem className="carousel-item active grocery1 mt-4 p-5 text-white rounded" active bgColor="#f0f0f0">
              <h1 className='text-dark text-start fw-bold ms-5'>Don't miss amazing</h1>
              <h1 className='text-dark text-start my-2 fw-bold ms-5'>grocery deals</h1>
              <p className='text-secondary text-start my-4 ms-5' style={{ fontSize: "20px" }}>Sign up for the daily newsletter</p>
              <FormWrapper>
                <EmailForm className='d-flex rounded-end ms-5 w-50'>
                  <InputGroup className="input-group">
                    <InputGroupText className='input-group-text bg-light border-0' style={{ color: "black" }}>
                      <PiPaperPlaneTiltBold />
                    </InputGroupText>
                    <Input className='form-control border-0' style={{ height: "40px", width:"20px" }} type="text" placeholder='Your email address' />
                    <SubscribeButton className='btn text-white' style={{ background: "#3bb77e" }}>Subscribe</SubscribeButton>
                  </InputGroup>
                </EmailForm>
              </FormWrapper>
            </GroceryItem>

            <GroceryItem className="carousel-item grocery2 mt-4 p-5 text-white rounded" active bgColor="#e0e0e0">
              <h1 className='text-dark text-start fw-bold ms-5'>Fresh Vegetables</h1>
              <h1 className='text-dark text-start my-2 fw-bold ms-5'>Big Discount</h1>
              <p className='text-secondary text-start my-4 ms-5' style={{ fontSize: "20px" }}>Save up to 50% off on your first order</p>
              <FormWrapper>
                <EmailForm className='d-flex rounded-end ms-5 w-50'>
                  <InputGroup className="input-group">
                    <InputGroupText className='input-group-text bg-light border-0' style={{ color: "black" }}>
                      <PiPaperPlaneTiltBold />
                    </InputGroupText>
                    <Input className='form-control border-0' style={{ height: "40px", width:"20px" }} type="text" placeholder='Your email address' />
                    <SubscribeButton className='btn text-white' style={{ background: "#3bb77e" }}>Subscribe</SubscribeButton>
                  </InputGroup>
                </EmailForm>
              </FormWrapper>
            </GroceryItem>
          </CarouselInner>

          <CarouselControlPrev className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon rounded-circle bg-dark me-5 mt-5" aria-hidden="true"></span>
            <span className="visually-hidden text-white">Previous</span>
          </CarouselControlPrev>
          <CarouselControlNext className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon rounded-circle bg-dark me-5 mt-5" aria-hidden="true"></span>
            <span className="visually-hidden text-white">Next</span>
          </CarouselControlNext>
        </Carousel>
      </Row>
    </ContainerFluid>
  );
}

export default Pages;
