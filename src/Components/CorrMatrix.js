
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
      tempArr.push({id: idCounter, name: indicator, data: res.data});
      this.setState({ dataArray: tempArr });
      idCounter ++;
    });
  }



  // return this.state.selectedCountries.map( country => {
  //   return (
  //     <li key={country.id}>
  //       <SoloCountry code={country.code} name={country.name}/>
  //     </li>
  //   )
  // });

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

  renderRow(counter) {
    return(
      <tr>
        <td>{counter}</td>
      </tr>
    )
  }






  renderAllRows() {
    let indicators = this.state.dataArray;
    let counter = 0;
    for (let i = 1; i < 5; i++) {
      return (<div><td><p>Number {i}</p></td></div>)  //this.renderRow(i);
    }
    // indicators.map(indicator => renderRow(counter));
    // let tableSize = indicators.length;
    // for (i =1 ; i < tableSize + 1; i++) {
    //   <
    // }
    // return (
    //   <tr>
    //     <td>counter</td>
    //     {this.renderCells}
    //     tableSize.map(indicator => {
    //       counter ++
    //       return <td value={indicator[1][0]}/>
    //     )}
    //   </tr>
    // )
  }

  renderCells() {

  }

  render() {
    return(
      <div>
        <table>
          <tbody>
            <tr>
              <th> Nothing </th>
              {this.renderHeadings()}
            </tr>
            <tr>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

}
