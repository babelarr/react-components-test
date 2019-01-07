import React from "react";
import RandomCatTitle from './RandomCatTitle';

const getRandomInteger = maxNumber => Math.floor(Math.random() * maxNumber);
const NUMBER_OF_CATS = 10;

class RandomCat extends React.Component {
    render() {
        const randomCat = getRandomInteger(NUMBER_OF_CATS);
        return (
          <div>
            <RandomCatTitle txt='Me encantan los gatos :)' styleTitle='title__style' />
            <a href="https://lorempixel.com">
              <img src={`https://lorempixel.com/400/200/cats/${randomCat}`} alt="Random cat" />
            </a>
          </div>
        );
    }
}

export default RandomCat;