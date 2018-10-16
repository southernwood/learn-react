// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import {DatePicker} from 'antd'
// import 'antd/dist/antd.css';
//
//
// import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, AreaChart} from 'recharts';
//
// const data = [
//   {name: 'Page A', uv: 4000, pv: 2400},
//   {name: 'Page B', uv: 3000, pv: 1398},
//   {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
//   {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
//   {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
//   {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
//   {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
// ];
// const itemStyle = {
//   background: "red"
// }
// const cursorStyle = {
//   "fill": 'rgba(34,85,110,0.4)',
// }
//
// function StackedBarChart() {
//   return (
//     <BarChart width={600} height={300} data={data}
//               margin={{top: 20, right: 30, left: 20, bottom: 5}}>
//       <CartesianGrid strokeDasharray="3 3"/>
//       <XAxis dataKey="name"/>
//       <YAxis/>
//       <Tooltip cursor={cursorStyle}/>
//       <Legend/>
//       <Bar dataKey="pv" stackId="a" fill="#76DDFB"/>
//       <Bar dataKey="uv" stackId="a" fill="#EB6896"/>
//     </BarChart>
//   );
// }
//
// function SimpleLineChart() {
//   return (
//     <LineChart width={600} height={300} data={data}
//                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
//       <XAxis dataKey="name"/>
//       <YAxis/>
//       <CartesianGrid strokeDasharray="3 3"/>
//       <Tooltip/>
//       <Legend/>
//       <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}} strokeWidth="10"/>
//       <Line type="monotone" dataKey="uv" stroke="#82ca9d"/>
//     </LineChart>
//   );
//
// }
//
//
// function Square(props) {
//   return (
//     <button className="square" onClick={() => props.onClick()}>
//       {props.value}
//     </button>
//   );
// }
//
// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }
//
// class Board extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       squares: Array(9).fill(null),
//       xIsNext: 'X'
//     };
//   }
//
//
//   renderSquare(i) {
//     return (
//       <Square
//         value={this.props.squares[i]}
//         onClick={() => this.props.onClick(i)}
//         onKeyPress={this.handleKeyPress}
//       />
//     );
//   }
//
//   handleKeyPress(event) {
//     console.log(event);
//   }
//
//   render() {
//
//     return (
//       <div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }
//
// class Game extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       history: [{
//         squares: Array(9).fill(null),
//       }],
//       stepNumber: 0,
//       xIsNext: true,
//
//     }
//   }
//
//   handleClick(i) {
//     const history = this.state.history;
//     const current = history[history.length - 1];
//     const squares = current.squares.slice();
//     squares[i] = this.state.xIsNext ? 'X' : 'O';
//     this.setState({
//       history: history.concat([{
//         squares: squares
//       }]),
//       xIsNext: !this.state.xIsNext
//     });
//   }
//
//   render() {
//     const history = this.state.history;
//     const current = history[history.length - 1];
//     const winner = calculateWinner(current.squares);
//
//     const moves = history.map((step, move) => {
//       const desc = move ? 'Go to move #' + move : 'Go to game start';
//       return (
//         <li key={move}>
//           <button onClick={() => this.jumpTo(move)}>{desc}</button>
//         </li>
//       )
//     })
//
//     let status;
//     if (winner) {
//       status = 'Winner: ' + winner;
//     } else {
//       status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
//     }
//
//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board squares={current.squares}
//                  onClick={(i) => this.handleClick(i)}
//                  status={status}
//           />
//         </div>
//         <div className="game-info">
//           <div>{status}</div>
//           <ol>{moves}</ol>
//         </div>
//         <StackedBarChart/>
//         <SimpleLineChart/>
//       </div>
//     );
//   }
// }
//
//
// // ========================================
//
// ReactDOM.render(
//   <Game/>,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Table, Badge, Menu, Dropdown, Icon } from 'antd';
import 'antd/dist/antd.css';


const menu = (
  <Menu>
    <Menu.Item>
      Action 1
    </Menu.Item>
    <Menu.Item>
      Action 2
    </Menu.Item>
  </Menu>
);

function NestedTable() {
  const expandedRowRender = props => {
    console.log("===============================");
    console.log(props)
    const columns = [
      { title: 'Date', dataIndex: 'date', key: 'date' },
      { title: 'Name', dataIndex: 'name', key: 'name' },
      { title: 'Status', key: 'state', render: () => <span><Badge status="success" />Finished</span> },
      { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
      {
        title: 'Action',
        dataIndex: 'operation',
        key: 'operation',
        render: () => (
          <span className="table-operation">
            <a href="javascript:;">Pause</a>
            <a href="javascript:;">Stop</a>
            <Dropdown overlay={menu}>
              <a href="javascript:;">
                More <Icon type="down" />
              </a>
            </Dropdown>
          </span>
        ),
      },
    ];

    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i,
        date: props.key,
        name: 'This is production name',
        upgradeNum: 'Upgraded: 56',
      });
    }
    return (
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    );
  };


  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Platform', dataIndex: 'platform', key: 'platform' },
    { title: 'Version', dataIndex: 'version', key: 'version' },
    { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
    { title: 'Creator', dataIndex: 'creator', key: 'creator' },
    { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
    { title: 'Action', key: 'operation', render: () => <a href="javascript:;">Publish</a> },
  ];

  const data = [];
  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i,
      name: 'Screem',
      platform: 'iOS',
      version: '10.3.4.5654',
      upgradeNum: 500,
      creator: 'Jack',
      createdAt: '2014-12-24 23:12:00',
    });
  }

  return (
    <Table
      className="components-table-demo-nested"
      columns={columns}
      expandedRowRender={expandedRowRender}
      dataSource={data}
    />
  );
}

ReactDOM.render(
  <NestedTable/>,
  document.getElementById('root')
);
