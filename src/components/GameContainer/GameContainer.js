import React from "react";

const GameContainer = props => (
    <main className="container">
        <div className="row">{props.children}</div>
    </main>
);

export default GameContainer;