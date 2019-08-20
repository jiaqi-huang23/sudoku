import React from 'react';
import './components.css';

function Square(props: any) {
    return (<button className="square" onClick={props.onClick} value={props.value}>
      {props.value}
    </button>
    );
}

type SubBoxProps = {
    squares:number[];
    onClick: (e: any) => void;
}

export class SubBox extends React.Component<SubBoxProps, {}> {
    renderSquare(i: number) {
        return (
          <Square
            value={this.props.squares[i]}
            onClick={this.props.onClick}
          />
        );
      }

      render() {

        return (
          <div>
            <div className="board-row">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </div>
            <div className="board-row">
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </div>
            <div className="board-row">
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
            </div>
          </div>
        );
      }
}