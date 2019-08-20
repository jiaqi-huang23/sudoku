import React from 'react';
import './components';
import {SubBox} from './components';

// function Square(props: any) {
//   return (<button className="square" onClick={props.choose} value={props.value}>
//     {props.value}
//   </button>
//   );
// }

type ChoosingState = {
    currentChoice: number;
    squares: number[];
}

export class Choosing extends React.Component<{}, ChoosingState> {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            currentChoice: 0,
            squares: [...Array(10).keys()].slice(1),
        }
        this.onClick = this.onClick.bind(this);
    }
    
     //fill the square wih blue background when chosen
     onClick(e:any) {
        this.setState({
            currentChoice: e.target.value
        });
    }

    render() {
        return (
            <div> 
                <div>
                    <SubBox 
                        squares={this.state.squares} onClick={this.onClick} />
                </div>
                <div>
                    Current Choice: {this.state.currentChoice}
                </div>
                
            </div>
            
        );
    }
}

