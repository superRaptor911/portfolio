/* eslint-disable react/no-unescaped-entities */
import {StyleSheet, css} from 'aphrodite';
import React from 'react';
import Header from '../../components/Header/Header';
import Developer from '../../assets/images/wdev.png';
import {COLORS} from '../../styles/constants';

const Home = () => {
  return (
    <div className={css(classes.root)}>
      <Header />
      <div className={css(classes.container)}>
        <div className={css(classes.leftContainer)}>
          <span className={css(classes.name)}>Hello there! I’m Aditya</span>
          <span className={css(classes.title)}>THE PROGRAMMER</span>
          <span className={css(classes.description)}>
            I like to build software and apps. I'm a big fan of automating
            things.
          </span>
          <button
            className={css(classes.button)}
            onClick={() => {
              window.open(
                'https://drive.google.com/file/d/1v-6vUpH8ED2i_Rm4C0Cnku_VhNE5KKDz/view?usp=sharing',
                '_blank',
              );
            }}>
            VIEW CV
          </button>
        </div>
        <div className={css(classes.image)}>
          <img
            src={Developer}
            alt="Developer"
            className={css(classes.developer)}
          />
        </div>
      </div>
    </div>
  );
};

const classes = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 1241,
    maxHeight: 420,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 200,
    '@media (max-width: 1536px)': {
      width: 993,
      maxHeight: 336,
      marginTop: 160,
    },
    '@media (max-width: 1280px)': {
      width: 827,
      maxHeight: 280,
      marginTop: 133,
    },
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    maxWidth: 714,
    '@media (max-width: 1536px)': {
      maxWidth: 571,
    },
    '@media (max-width: 1280px)': {
      maxWidth: 476,
    },
  },
  name: {
    marginBottom: 20,
    fontSize: 29,
    lineHeight: '43px',
    fontWeight: 600,
    color: COLORS.white,
    '@media (max-width: 1536px)': {
      marginBottom: 16,
      fontSize: 23,
      lineHeight: '34px',
    },
    '@media (max-width: 1280px)': {
      marginBottom: 13,
      fontSize: 19,
      lineHeight: '29px',
    },
  },
  title: {
    lineHeight: '87px',
    marginBottom: 20,
    letterSpacing: '0.02em',
    fontSize: 58,
    fontWeight: 'bold',
    color: COLORS.secondary,
    '@media (max-width: 1536px)': {
      lineHeight: '70px',
      marginBottom: 16,
      letterSpacing: '0.02em',
      fontSize: 46,
    },
    '@media (max-width: 1280px)': {
      lineHeight: '58px',
      marginBottom: 13,
      letterSpacing: '0.02em',
      fontSize: 39,
    },
  },
  description: {
    fontSize: 28,
    marginBottom: 45,
    lineHeight: '43px',
    color: COLORS.white,

    '@media (max-width: 1536px)': {
      fontSize: 22.4,
      marginBottom: 36,
      lineHeight: '34px',
    },
    '@media (max-width: 1280px)': {
      fontSize: 19,
      marginBottom: 30,
      lineHeight: '30px',
    },
  },
  button: {
    width: 264,
    height: 60,
    borderRadius: 8,
    fontSize: 20,
    lineHeight: '30px',
    fontWeight: 500,
    backgroundColor: COLORS.primary,
    color: COLORS.white,
    border: `1px solid ${COLORS.secondary}`,
    letterSpacing: '0.0125em',
    cursor: 'pointer',
    '@media (max-width: 1536px)': {
      width: 211,
      height: 48,
      borderRadius: 6.4,
      fontSize: 16,
      lineHeight: '24px',
    },
    '@media (max-width: 1280px)': {
      width: 176,
      height: 40,
      borderRadius: 5.3,
      fontSize: 13,
      lineHeight: '20px',
    },
  },
  image: {
    marginLeft: 20,
    '@media (max-width: 1536px)': {
      marginLeft: 16,
    },
    '@media (max-width: 1280px)': {
      marginLeft: 13,
    },
  },

  developer: {
    width: 405,
    height: 419,
    '@media (max-width: 1536px)': {
      width: 324,
      height: 335,
    },
    '@media (max-width: 1280px)': {
      width: 270,
      height: 279,
    },
  },
});

export default Home;
