'use client';

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';

const PARTICLE_SHADOW = `571px 173px #00BCD4, 1732px 143px #00BCD4, 1745px 454px #FF5722, 234px 784px #00BCD4, 1793px 1123px #FF9800, 1076px 504px #03A9F4, 633px 601px #FF5722, 350px 630px #FFEB3B, 1164px 782px #00BCD4, 76px 690px #3F51B5, 1825px 701px #CDDC39, 1646px 578px #FFEB3B, 544px 293px #2196F3, 445px 1061px #673AB7, 928px 47px #00BCD4, 168px 1410px #8BC34A, 777px 782px #9C27B0, 1235px 1941px #9C27B0, 104px 1690px #8BC34A, 1167px 1338px #E91E63, 345px 1652px #009688, 1682px 1196px #F44336, 1995px 494px #8BC34A, 428px 798px #FF5722, 340px 1623px #F44336, 605px 349px #9C27B0, 1339px 1344px #673AB7, 1102px 1745px #3F51B5, 1592px 1676px #2196F3, 419px 1024px #FF9800, 630px 1033px #4CAF50, 1995px 1644px #00BCD4, 1092px 712px #9C27B0, 1355px 606px #F44336, 622px 1881px #CDDC39, 1481px 621px #9E9E9E, 19px 1348px #8BC34A, 864px 1780px #E91E63, 442px 1136px #2196F3, 67px 712px #FF5722, 89px 1406px #F44336, 275px 321px #009688, 592px 630px #E91E63, 1012px 1690px #9C27B0, 1749px 23px #673AB7, 94px 1542px #FFEB3B, 1201px 1657px #3F51B5, 1505px 692px #2196F3, 1799px 601px #03A9F4, 656px 811px #00BCD4, 701px 597px #00BCD4, 1202px 46px #FF5722, 890px 569px #FF5722, 1613px 813px #2196F3, 223px 252px #FF9800, 983px 1093px #F44336, 726px 1029px #FFC107, 1764px 778px #CDDC39, 622px 1643px #F44336, 174px 1559px #673AB7, 212px 517px #00BCD4, 340px 505px #FFF, 1700px 39px #FFF, 1768px 516px #F44336, 849px 391px #FF9800, 228px 1824px #FFF, 1119px 1680px #FFC107, 812px 1480px #3F51B5, 1438px 1585px #CDDC39, 137px 1397px #FFF, 1080px 456px #673AB7, 1208px 1437px #03A9F4, 857px 281px #F44336, 1254px 1306px #CDDC39, 987px 990px #4CAF50, 1655px 911px #00BCD4, 1102px 1216px #FF5722, 1807px 1044px #FFF, 660px 435px #03A9F4, 299px 678px #4CAF50, 1193px 115px #FF9800, 918px 290px #CDDC39, 1447px 1422px #FFEB3B, 91px 1273px #9C27B0, 108px 223px #FFEB3B, 146px 754px #00BCD4, 461px 1446px #FF5722, 1004px 391px #673AB7, 1529px 516px #F44336, 1206px 845px #CDDC39, 347px 583px #009688, 1102px 1332px #F44336, 709px 1756px #00BCD4, 1972px 248px #FFF, 1669px 1344px #FF5722, 1132px 406px #F44336, 320px 1076px #CDDC39, 126px 943px #FFEB3B, 263px 604px #FF5722, 1546px 692px #F44336`;

const ParticleLayer = ({ width = '3px', height = '3px', duration = '150s', zIndex = 0 }) => (
  <Box
    sx={{
      content: '""',
      position: 'absolute',
      width,
      height,
      background: 'transparent',
      boxShadow: PARTICLE_SHADOW,
      animation: `animStar ${duration} linear infinite`,
      zIndex,
      pointerEvents: 'none',
    }}
  />
);

const Lamp = () => (
  <Box className="lamp__wrap" sx={{
    position: 'absolute',
    left: '42%',
    top: 0,
    transform: 'translateX(-42%)',
    width: 300,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 2,
    animation: 'lampSwing 5.1s infinite cubic-bezier(0.6, 0, 0.38, 1)',
    transformOrigin: 'center top',
    '@media (max-width:1400px)': { zoom: 0.5 },
    '@media (max-width:650px)': { zoom: 0.6 },
  }}>
    <Box className="lamp" sx={{ width: 300, position: 'relative',   zIndex: 2 }}>
      <Box className="cable" sx={{
        width: 8, height: 248, mx: ' 100px', mt:'-30px',
        background: 'linear-gradient(rgb(32 148 218 / 70%), rgb(193 65 25))'
      }} />
      <Box className="cover" sx={{
        width: 200, height: 80, bgcolor: '#0bd5e8',
        borderTopLeftRadius: '50%', borderTopRightRadius: '50%',
        position: 'relative', zIndex: 200,
      }} />
      <Box className="in-cover" sx={{
        width: 200, maxWidth: 200, height: 20, borderRadius: '100%', bgcolor: '#08ffff',
        position: 'absolute', left: -100, right: 0, mx: 'auto', bottom: -9, zIndex: 100,
      }}>
        <Box className="bulb" sx={{
          width: 50, height: 50, bgcolor: '#08fffa', borderRadius: '50%',
          position: 'absolute', left: 0, right: 0, bottom: -20, mx: 'auto',
          boxShadow: '0 0 25px 7px rgb(127 255 255 / 80%), 0 0 64px 47px rgba(0,255,255,0.5), 0px 0 30px 15px rgba(0,255,255,0.2)',
        }} />
      </Box>

      <Box className="light" sx={{
        width: 200, height: 0,
        borderBottom: '900px solid rgb(44 255 255 / 24%)',
        borderLeft: '50px solid transparent',
        borderRight: '50px solid transparent',
        position: 'absolute',
        left: '34%',
        transform: 'translateX(-50%)',
        top: 270,
        zIndex: 1,
        borderRadius: '90px 90px 0px 0px',
      }} />
    </Box>
  </Box>
);

export default function NotFoundLamp() {
  return (
    <Box sx={{
      minHeight: '100vh',
      bgcolor: '#181828',
      color: '#fff',
      position: 'relative',
      fontFamily: "'Montserrat', 'Nunito Sans', sans-serif",
      overflow: 'hidden',
      width: '100%',
      py: { xs: 0, md: 8 }
    }}>
      <ParticleLayer width="3px" height="3px" duration="150s" zIndex={0} />
      <ParticleLayer width="3px" height="3px" duration="10s" zIndex={0} />
      <ParticleLayer width="2px" height="2px" duration="50s" zIndex={0} />
      <ParticleLayer width="1px" height="1px" duration="80s" zIndex={0} />

      <Lamp />

      <Box className="error" sx={{
        minHeight: '100vh',
        width: '100%',
        pt: { xs: 18, sm: 28, md: 32 }, pb: 8,
        position: 'relative',
        zIndex: 3,
        textAlign: 'center',
        mt: 7,
      }}>
        <Box className="error__content" sx={{
          position: { xs: 'static', md: 'absolute' },
          top: { md: '50%' },
          left: { md: '50%' },
          width: '100%',
          transform: { md: 'translate(-50%, -50%)' },
          px: { xs: 2, sm: 5 },
        }}>
          <Box className="error__message message" sx={{ mb: 4 }}>
            <Typography className="message__title" variant="h1" sx={{
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: 5,
              fontSize: { xs: '2.2rem', sm: '3.5rem', md: '5.6rem' },
              pb: { xs: 2, sm: 4 },
              mx: 'auto',
              color: '#fff',
              textShadow: '0 4px 20px #0006',
              maxWidth: 960,
            }}>
              Page Not Found
            </Typography>
            <Typography className="message__text" variant="h6" sx={{
              fontFamily: "'Montserrat', sans-serif",
              lineHeight: 1.6,
              fontSize: { xs: 16, sm: 18 },
              color: '#fff',
              px: { xs: 1, sm: 6 },
              maxWidth: 680,
              mx: 'auto',
              textShadow: '0 1px 5px #0008',
            }}>
              We&#39;re sorry, the page you were looking for isn&#39;t found here. The link you followed may either be broken or no longer exists.
              Please try again, or take a look at our homepage.
            </Typography>
          </Box>
          <Button
            component={Link}
            href="/"
            variant="contained"
            sx={{
              color: '#fff',
              fontWeight: 800,
              fontSize: { xs: 19, sm: 23 },
              letterSpacing: '.13em',
              borderRadius: '33px',
              px: 7,
              py: 2.2,
              background: 'linear-gradient(to bottom, #1e2a38, #0d1117)',
              border: '2px solid #16f0ff',
              boxShadow: '0 0 16px 0 #16f0ff4d, 0 6px 42px #14192d77',
              textShadow: '0 1px 3px #16f0ff66',
              transition: 'all 0.26s cubic-bezier(.44,0,.58,1)',
              position: 'relative',
              overflow: 'hidden',
              mb: { xs: 3, md: 0 },
              '&:hover, &:focus': {
                color: '#fff',
                background: 'linear-gradient(to bottom, #0d1117 70%, #222f3a 100%)',
                borderColor: '#0ff',
                boxShadow: '0 0 0 0 transparent, 0 0px 60px 4px #16f0ff99',
                textShadow: '0 2px 12px #16f0ff66',
                transform: 'translateY(-2px) scale(1.08)',
              },
            }}
          >
            HOME PAGE
          </Button>
        </Box>
      </Box>
      <style jsx global>{`
        html, body {
          overflow-x: hidden !important;
        }
        @keyframes animStar {
          0% { transform: translateY(0px);}
          100% { transform: translateY(-2000px);}
        }
        @keyframes lampSwing {
          0% { transform: rotate(40deg);}
          50% { transform: rotate(-40deg);}
          100% { transform: rotate(40deg);}
        }
      `}</style>
    </Box>
  );
}
