import React, { Component } from 'react';
import './TextAnimation.css';
class TextAnimation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      letters: [],
    };
  }

  componentDidMount() {
    // Initialize your settings here
    this.init();
  }

  init = () => {
    const letters = document.querySelectorAll('.text');
    this.setState({ letters }, () => {
      this.putIntab();
    });
  };

  putIntab = () => {
    const { letters } = this.state;
    for (let i = 0; i < letters.length; i++) {
      const textContent = letters[i].textContent;
      const tableau = textContent.split(/(?=[^>]*(?:<|$))/);
      letters[i].innerText = ' ';

      this.afficheDelay(i, tableau);
    }
  };

  afficheDelay = (champ, texte) => {
    let y = 0;
    const { letters } = this.state;

    const affiche = setInterval(() => {
      const lettre = texte[y];
      const span = document.createElement('span');
      span.textContent = lettre;
      letters[champ].appendChild(span);
      y++;

      if (y === texte.length) {
        clearInterval(affiche);
      }
    }, 60);
  };

  render() {
    return (
      <h1 className="text">
        BOUQUETS DE FLEURS ET PLANTES - LIVRAISON 24H EN FRANCE
      </h1>
    );
  }
}

export default TextAnimation;
