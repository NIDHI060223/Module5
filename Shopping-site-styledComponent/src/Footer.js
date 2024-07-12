import React from 'react';
import styled from 'styled-components';
import Facebook from './assets/icon-facebook-white.svg';
import Twitter from './assets/icon-twitter-white.svg';
import Instagram from './assets/icon-instagram-white.svg';
import Pinterest from './assets/icon-pinterest-white.svg';
import Youtube from './assets/icon-youtube-white.svg';
import Phone from './assets/phone-call.svg';

const FooterContainer = styled.div`
  padding-bottom: 10px !important;
  border-top: 1px solid #bce3c9;
  padding:10px;
`;

const FooterRow = styled.div`
 --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(var(--bs-gutter-y)* -1);
    margin-right: calc(var(--bs-gutter-x) / -2);
    margin-left: calc(var(--bs-gutter-x) / -2);
`;

const FooterColumn = styled.div`
  flex: 1;
  padding: 0 15px;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    flex: 0 0 50%;
  }

  @media (min-width: 1200px) {
    flex: 0 0 33.33%;
  }
`;

const FooterText = styled.p`
  font-size: 0.975rem;
  margin-right:100px;

 
`;

const Hotline = styled.div`
  display: flex;
  align-items: center;

  
  img {
    margin-right: 10px;
    width:40px;
    height:40px;
    margin-top:10px;
  }

  p {
    margin: 0;
    


    span {
      display: block;
    }
  }
`;

const SocialIcons = styled.div`
  text-align: right;

  h6 {
  margin-right:200px;
  }

  a {
    margin-left: 10px;
    
  }
    img{
    background:#3bb77e;
    width:30px;
    height:30px;
    border-radius:10px;
    display:inline;
    margin-top:-60px;
    }
    p{
    margin-top: -15px;
    margin-right: -20px;
    }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <FooterRow>
          <FooterColumn>
            <FooterText>
              © 2024, <strong className="text-brand">Nest</strong> - HTML Ecommerce Template
              <br /> All rights reserved
            </FooterText>
          </FooterColumn>
          <FooterColumn>
            <Hotline>
              <img src={Phone} alt="hotline" />
              <p>
                1960 - 6666 <span>Working 8:00 - 22:00</span>
              </p>

              <img className='img2' src={Phone} alt="hotline" />
              <p className='text2'>
                1960 - 8888 <span>24/7 Support Center</span>
              </p>
            </Hotline>
            
          </FooterColumn>
          <FooterColumn>
            <SocialIcons>
              <h6>Follow Us</h6>
              <a href="#facebook"><img src={Facebook} alt="Facebook" /></a>
              <a href="#twitter"><img src={Twitter} alt="Twitter" /></a>
              <a href="#instagram"><img src={Instagram} alt="Instagram" /></a>
              <a href="#pinterest"><img src={Pinterest} alt="Pinterest" /></a>
              <a href="#youtube"><img src={Youtube} alt="YouTube" /></a>
              <p>Up to 15% discount on your first subscribe</p>
            </SocialIcons>
            
          </FooterColumn>
        </FooterRow>
      </div>
    </FooterContainer>
  );
};

export default Footer;
