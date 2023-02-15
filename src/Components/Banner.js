import React from 'react';
import '../Components/Common.css';
import Design from '../Components/style.module.css';
import styled from 'styled-components';
import { FaUser, FaMicrophone } from 'react-icons/fa';

const styles = {
  section: {
    backgroundImage: 'linear-gradient(to right,#a27c37,#435d60)',
    width: '100%',
    height: '110vh',
  },
  ul: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  li: {
    listStyle: 'none',
    paddingRight: '2.5rem',
  },
};
const Box = styled.div`
width:'20%';
height:'10vh'`;

const BoxHead1 = styled.h3`
font-size:20px;
text-align:center;
padding-bottom:5px`;

const BoxPara = styled.p`
font-sie:15px;
text-align:center`;

const Banner = () => {
  return (
    <>
      <section style={styles.section}>
        <div className="TopHeader">
          <div className="">
            <a href="" className={Design.Logo}>
              divyala
            </a>
          </div>
          <ul>
            <li style={styles.li} className={Design.ListItem}>
              Home
            </li>
            <li style={styles.li} className={Design.ListItem}>
              About
            </li>
            <li style={styles.li} className={Design.ListItem}>
              Service
            </li>
            <li style={styles.li} className={Design.ListItem}>
              Gallery
            </li>
            <li style={styles.li} className={Design.ListItem}>
              Contact
            </li>
          </ul>
        </div>
        <div className={Design.Bans}>
          <div className={Design.BansLeft}>
            <p className="Banspara">India Largest Event Summit</p>
            <h1 className="Banshead1">2023</h1>
            <h2 className="Banshead2">Assess Event</h2>
            <p className="Banssubpara">
              The greatest event is display in India <br />
              2023 please all are welcome invited
            </p>
          </div>
          <div className={Design.BansRight}>
            <div style={{ backgroundColor: '#473e3f', height: '4vh' }}></div>
            <div className="Boxes">
              <Box>
                <BoxHead1>450</BoxHead1>
                <BoxPara>Days</BoxPara>
              </Box>
              <Box>
                <BoxHead1>50</BoxHead1>
                <BoxPara>Hours</BoxPara>
              </Box>
              <Box>
                <BoxHead1>4500</BoxHead1>
                <BoxPara>Minutes</BoxPara>
              </Box>
              <Box>
                <BoxHead1>450</BoxHead1>
                <BoxPara>Seconds</BoxPara>
              </Box>
            </div>
            <p
              style={{
                textAlign: 'center',
                letterSpacing: '1px',
                fontSize: '16px',
                fontWeight: '100',
              }}
            >
              MARCH 18-21,NEWYORK
            </p>
            <div className="Boxes">
              <Box>
                <FaUser style={{ textAlign: 'center' }} />
                <BoxHead1>Seats</BoxHead1>
                <BoxPara>300 Peoples</BoxPara>
              </Box>
              <Box>
                <FaMicrophone />
                <BoxHead1>Speaker</BoxHead1>
                <BoxPara>16 Professional</BoxPara>
              </Box>
            </div>
            <div className="SubBox">
              <h2 style={{ fontSize: '20px', fontWeight: '200' }}>
                TITLE SPONSER
              </h2>
              <h1 style={{ fontFamily: 'Pacifico', paddingTop: '1rem' }}>
                Mail Chimp
              </h1>
            </div>
            <div style={{ backgroundColor: 'white', height: '3vh' }}></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
