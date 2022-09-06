import React from 'react';
import {css, StyleSheet} from 'aphrodite';
import {COLORS} from '../../styles/constants';
import projects from '../../assets/json/projects.json';

const WorkMob = () => {
  return (
    <div className={css(styles.root)}>
      <div className={css(styles.container)}>
        <div className={css(styles.heading)}>MY PROJECTS</div>
        {projects.map(project => (
          <div className={css(styles.card)} key={project.id}>
            <span className={css(styles.title)}>{project.title}</span>
            <span className={css(styles.description)}>
              {project.description}
            </span>
            <button
              className={css(styles.link)}
              onClick={() => {
                window.open(project.url, '_blank');
              }}>
              KNOW MORE
            </button>
          </div>
        ))}
        <button
          className={css(styles.button)}
          onTouchStart={() => {
            window.open(
              'https://github.com/superRaptor911?tab=repositories',
              '_blank',
            );
          }}>
          MORE PROJECTS
        </button>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    rowGap: 17,
  },
  heading: {
    fontSize: 24,
    lineHeight: '36px',
    fontWeight: 'bold',
    color: COLORS.secondary,
  },
  card: {
    background: COLORS.primary_shade,
    borderRadius: 8,
    padding: '8px 18px',
    minHeight: 157,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    lineHeight: '30px',
    fontWeight: 600,
    color: COLORS.secondary,
  },
  description: {
    fontSize: 17,
    lineHeight: '25px',
    color: COLORS.white,
  },
  link: {
    fontSize: 17,
    color: COLORS.secondary,
    lineHeight: '25px',
    fontWeight: 500,
  },
  button: {
    background: 'transparent',
    border: `1px solid ${COLORS.secondary}`,
    width: 150,
    height: 40,
    borderRadius: 8,
    fontSize: 13,
    marginTop: 5,
    marginBottom: 24,
    fontWeight: 500,
    textAlign: 'center',
    alignItems: 'center',
    color: COLORS.white,
  },
});

export default WorkMob;
