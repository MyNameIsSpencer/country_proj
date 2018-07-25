
import React, { Component } from 'react';
import axios from 'axios';

const indicatorSets = {"Population": "SP.POP.TOTL", "Population Growth %": "SP.POP.GROW", "GDP": "NY.GDP.MKTP.CD",
"Per Capita": "SL.GDP.PCAP.EM.KD", "Unemployment": "SL.UEM.TOTL.ZS", "Birth Rate": "SP.DYN.CBRT.IN", "Death Rate": "SP.DYN.CDRT.IN",
"Life Expectency": "SP.DYN.LE00.IN", "Trade Balance": "NE.RSB.GNFS.CD"}

var idCounter = 1;

// var RecordsComponent = React.createClass({
//     getInitialState: {
//         return {
//           rows: ['row 1', 'row 2', 'row 3']
//         }
//     },
//     render : function() {
//         return (
//             <div>
//                 <table>
//                     {rows.map((r) => (
//                       <tr>
//                           <td>{r}</td>
//                       </tr>
//                     ))}
//                 </table>
//                 <button id="addBtn" onClick={addRow}>ADD</button>
//             </div>
//         );
//     },
//     addRow : function() {
//         var rows = this.state.rows
//         rows.push('new row')
//         this.setState({rows: rows})
//     },
// });



export default class CorrMatrix extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: [],
      headingsSwitch: 0
    }
  }


  componentDidMount() {
    let lister = this.props.indicatorList;
    lister.map(indicator =>
      this.getIndicators(indicator)
    );
    this.setState({ headingsSwitch: 1 });
  }

  getIndicators(indicator) {
    let code = indicatorSets[indicator];
    let tempArr = this.state.dataArray;
    axios.get(`http://api.worldbank.org/v2/countries/wld/indicators/${code}?format=json`)
    .then(res => {
      console.log(res);
      tempArr.push({id: idCounter, name: indicator, data: res.data});
      this.setState({ dataArray: tempArr });
      idCounter ++;
    });
  }


  renderHeadings() {
    let headingsList = this.state.dataArray
    if(this.state.headingsSwitch) {
      return headingsList.map(obj => {
        return (
          <th key={obj.id}>
            {obj.name}
          </th>
        )
      })
    }
  }

  renderBelowHeadings() {
    let lister = this.state.dataArray
    if(this.state.headingsSwitch) {
      return lister.map(obj => {
        return (
          <tr key={obj.id}>
            <th> {obj.name} </th>
            {this.renderOneRow(obj.name, obj.data)}
          </tr>
        )
      })
    }
  }

  renderOneRow(namer, datar) {
    let listen = this.state.dataArray;
    return listen.map(obj => {
      if (namer === obj.name) {
        return(<td>  </td>)
      } else {
        return (
          <td>{this.calcCorr(datar[1], obj.data[1])}</td>
        )
      }
    })
  }

  calcCorr(aer, ber) {
    let data1 = aer.map( x => x);
    let data2 = ber.map( x => x);

    let dataSet = [];
    let sigmaX = 0;
    let sigmaY = 0;
    let sigmaXY = 0;
    let sigmaXSqr = 0;
    let sigmaYSqr = 0;
    for (let i = 0; i < data1.length; i++) {
      for (let j = 0; j < data2.length; j++) {
        if (data1[i].date === data2[j].date) {
          if (data1[i].value !== null && data2[j].value !== null) {
            dataSet.push([data1[i].value,data2[j].value]);
          }
          data2.splice( j, 1);
          break;
        }
      }
    }
    for (let i = 0; i < dataSet.length; i++) {
      sigmaX += dataSet[i][0];
      sigmaY += dataSet[i][1];
      sigmaXY += dataSet[i][0] * dataSet[i][1];
      sigmaXSqr += dataSet[i][0] * dataSet[i][0];
      sigmaYSqr += dataSet[i][1] * dataSet[i][1];
    }
    let top = ((sigmaXY * dataSet.length) - (sigmaX * sigmaY));
    let bottom = Math.sqrt( ((dataSet.length * sigmaXSqr) - (sigmaX * sigmaX))*((dataSet.length * sigmaYSqr) - (sigmaY * sigmaY)) );
    let r = (top / bottom).toFixed(3);
    return r;
  }

  renderCells() {

  }

  render() {
    return(
      <div>
        <table>
          <tbody>
            <tr>
              <th> </th>
              {this.renderHeadings()}
            </tr>
            {this.renderBelowHeadings()}
          </tbody>
        </table>
      </div>
    )
  }

}
