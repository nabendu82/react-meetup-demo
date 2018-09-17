import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as populationAction from '../../../actions/populationAction';
import PopPieChart from '../../molecules/PopPieChart';
import moment from 'moment';
import './index.css';


const currYear = moment().year();

const totalText = {
    fontSize: '18px',
    fontWeight: '400'
}

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            indPieData : [],
            indPopTotal: '',
            chinaPieData : [],
            chinaPopTotal: '',
            usPieData : [],
            usPopTotal: '',
            indoPieData : [],
            indoPopTotal: ''
        }
        this.showPopGraphs();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.indPopData !== nextProps.indPopData) {
            this.setState({
                indPieData: nextProps.indPopData.map(item => {return {name: item.age, value:item.total}}).filter(item => item.name > 0 && item.name < 21 ),
                indPopTotal: nextProps.indPopData.map(item => {return {name: item.age, value:item.total}}).filter(item => item.name > 0 && item.name < 21 ).map(item => item.value).reduce((acc, curr) => acc + curr),
            });
        }
        if (this.props.chinaPopData !== nextProps.chinaPopData) {
            this.setState({
                chinaPieData: nextProps.chinaPopData.map(item => {return {name: item.age, value:item.total}}).filter(item => item.name > 0 && item.name < 21 ),
                chinaPopTotal: nextProps.chinaPopData.map(item => {return {name: item.age, value:item.total}}).filter(item => item.name > 0 && item.name < 21 ).map(item => item.value).reduce((acc, curr) => acc + curr),
            });
        }
        if (this.props.usPopData !== nextProps.usPopData) {
            this.setState({
                usPieData: nextProps.usPopData.map(item => {return {name: item.age, value:item.total}}).filter(item => item.name > 0 && item.name < 21 ),
                usPopTotal: nextProps.usPopData.map(item => {return {name: item.age, value:item.total}}).filter(item => item.name > 0 && item.name < 21 ).map(item => item.value).reduce((acc, curr) => acc + curr),
            });
        }
        if (this.props.indoPopData !== nextProps.indoPopData) {
            this.setState({
                indoPieData: nextProps.indoPopData.map(item => {return {name: item.age, value:item.total}}).filter(item => item.name > 0 && item.name < 21 ),
                indoPopTotal: nextProps.indoPopData.map(item => {return {name: item.age, value:item.total}}).filter(item => item.name > 0 && item.name < 21 ).map(item => item.value).reduce((acc, curr) => acc + curr),
            });
        }
    }


    showPopGraphs() {
        console.log('Inside showPopGraphs currYear ', typeof currYear);
        this.props.init(currYear);
    }
    render() {
        return (
            <div className="grid__area">
                <div className="header__text" style={{textAlign: 'center'}}>
                    Population Distribution : 1 to 20 years
                </div>
                <div className="pieChart1">
                    {this.state.indPopTotal && <p style={totalText}> India 🇮🇳 - {this.state.indPopTotal} </p>}
                    {this.state.indPieData && <PopPieChart popPieData={this.state.indPieData} />}
                </div>
                <div className="pieChart2">
                    {this.state.chinaPopTotal && <p style={totalText}> China 🇨🇳 - {this.state.chinaPopTotal} </p>}
                    {this.state.chinaPieData && <PopPieChart popPieData={this.state.chinaPieData} />}
                </div>
                <div className="pieChart3">
                    {this.state.usPopTotal && <p style={totalText}> United States 🇺🇸 - {this.state.usPopTotal} </p>}
                    {this.state.usPieData && <PopPieChart popPieData={this.state.usPieData} />}
                </div>
                <div className="pieChart4">
                    {this.state.indoPopTotal && <p style={totalText}> Indonesia 🇮🇩 - {this.state.indoPopTotal} </p>}
                    {this.state.indoPieData && <PopPieChart popPieData={this.state.indoPieData} />}
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ dataReducer }) => ({
    indPopData: dataReducer.indPopData,
    chinaPopData: dataReducer.chinaPopData,
    usPopData: dataReducer.usPopData,
    indoPopData: dataReducer.indoPopData
});

const mapDispatchToProps = dispatch => ({
    init: (currYear) => {
        dispatch(populationAction.getIndPopData(currYear));
        dispatch(populationAction.getChinaPopData(currYear));
        dispatch(populationAction.getUSPopData(currYear));
        dispatch(populationAction.getIndoPopData(currYear));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);
