import React from 'react';
import { StyleSheet, css } from 'aphrodite';


export default class About extends React.Component {
    constructor (props) {
        super(props);
    }

  render() {
      return (
      <div>
        About
          <span className={css(styles.red)}>
              This is Red.
          </span>
      </div>
    );
  }

};


const styles = StyleSheet.create({
    red: {
        backgroundColor: 'red'
    },

    blue: {
        backgroundColor: 'blue'
    },

    hover: {
        ':hover': {
            backgroundColor: 'red'
        }
    },

    small: {
        '@media (max-width: 600px)': {
            backgroundColor: 'red',
        }
    }
});
