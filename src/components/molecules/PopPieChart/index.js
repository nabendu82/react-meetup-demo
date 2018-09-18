import React from 'react';
import { PieChart, Pie, Sector, Cell } from 'recharts';
import { FlexBoxNormal } from '../StyledComponents';

const COLORS = ['#3DCC91', '#FFB366', '#FF7373', '#336fce', '#33c6ce', '#ce33bb', '#daa520', '#C0C0C0', '#7d18e2', '#ffc600', '#f0e68c', '#bdb76b', '#ff69b4', '#0000cd', '#dda0dd', '#adff2f', '#8b008b', '#cd5c5c', '#ba55d3', '#b0e0e6', '#9acd32 '];

const flexWwrap = {
    display: 'flex',
    width: '60%',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: '0 auto',
    justifyContent: 'flex-start'
}

const RenderBox = props => {
    const fullStyle = {
        width: '30px',
        height: '10px',
        backgroundColor: props.color
    }
    return (
        <div style={fullStyle} />
    );
}

const renderActiveShape = props => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';
  
    return (
      <g>
        {/* comment below for center text to hide */}
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill} style={{fontSize: '18px'}}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          style={{fontSize: '18px'}}
          fill="#333"
        >{`${value}`}</text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          style={{fontSize: '12px'}}
          fill="#999"
        >
          {`(${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };

class PopPieChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        }
        this.onPieEnter = this.onPieEnter.bind(this);
    }

    onPieEnter(data, index) {
        this.setState({
            activeIndex: index
        });
    }

    render() {
        return (
            <div className="d3__items">
            <PieChart width={650} height={400}>
                <Pie
                    width={600}
                    height={400}
                    data={this.props.popPieData}
                    dataKey="value"
                    nameKey="name"
                    margin={{ top: 10, bottom: 10, left: 100, right: 100 }}
                    activeIndex={this.state.activeIndex}
                    activeShape={renderActiveShape}
                    cx={300}
                    cy={200}
                    innerRadius={60}
                    outerRadius={150}
                    fill="#8884d8"
                    onMouseEnter={this.onPieEnter}
                >
                    {this.props.popPieData.map((entry, index) => (
                        <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
                <div style={flexWwrap}>
                    {this.props.popPieData && this.props.popPieData.map(item => item.name).map((item, index) => {
                        return (
                            <FlexBoxNormal key={index}>
                                <RenderBox color={COLORS[index % COLORS.length]} />
                                <div style={{ margin: '0 5px 0 2px' }}>{item}</div>
                            </FlexBoxNormal>
                        );
                    })}
                </div>

        </div>

        );
    }

}

export default PopPieChart;
