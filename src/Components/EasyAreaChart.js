import React, { PureComponent } from 'react';
import { AreaChart } from 'react-easy-chart';

export default class EasyAreaChart extends PureComponent {
  constructor(props){
    super(props);
    let chartData = this.props.chartData;
  }


  // xType={'time'}


  // data={[[
  //   {x: "1-Jan-2017", y: 6858160},
  //   {x: "1-Jan-2016", y: 6758353},
  //   {x: "1-Jan-2015", y: 6663967},
  //   {x: "1-Jan-2014", y: 6576397},
  //   {x: "1-Jan-2013", y: 6494557},
  //   {x: "1-Jan-2012", y: 6415169},
  //   {x: "1-Jan-2011", y: 6333487},
  //   {x: "1-Jan-2010", y: 6246274},
  //   {x: "1-Jan-2009", y: 6152036},
  //   {x: "1-Jan-2008", y: 6052190},
  //   {x: "1-Jan-2007", y: 5949787},
  //   {x: "1-Jan-2006", y: 5849356},
  //   {x: "1-Jan-2005", y: 5754026},
  //   {x: "1-Jan-2004", y: 5664605},
  //   {x: "1-Jan-2003", y: 5579656}
  // ]]}

  // data={[
  //   [
  //     { x: '1-Jan-15', y: 20 },
  //     { x: '1-Feb-15', y: 10 },
  //     { x: '1-Mar-15', y: 33 },
  //     { x: '1-Apr-15', y: 45 },
  //     { x: '1-May-15', y: 15 }
  //   ], [
  //     { x: '1-Jan-15', y: 10 },
  //     { x: '1-Feb-15', y: 15 },
  //     { x: '1-Mar-15', y: 13 },
  //     { x: '1-Apr-15', y: 15 },
  //     { x: '1-May-15', y: 10 }
  //   ]
  // ]}



  render(){
    return(
      <div>
        <AreaChart
          // xType={'time'}
          // xType={'text'}
          axes
          xTicks={5}
          yTicks={3}
          // xTickNumber={5}
          // yTickNumber={3}
          dataPoints
          grid
          areaColors={['black', 'purple']}
          interpolate={'cardinal'}
          width={650}
          height={250}
          data={[
            this.props.chartData
          ]}
        />
        {console.log(this.props)}
      </div>
    )
  }
}
