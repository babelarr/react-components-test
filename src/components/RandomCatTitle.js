import React from "react";

const RandomCatTitle = props => {
    const {txt} = props;
    return (
        <h1 className={'title__style'}>{txt}</h1>
    );
}

export default RandomCatTitle;