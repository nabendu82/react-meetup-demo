import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as populationAction from '../../../actions/populationAction';
import PopPieChart from '../../molecules/PopPieChart';

const totalText = {
    fontSize: '18px',
    fontWeight: '400'
}

class ResultPage extends Component {
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
        console.log('componentWillReceiveProps', nextProps.usPopData);
        if (this.props.indPopData !== nextProps.indPopData) {
            this.setState({
                indPieData: nextProps.indPopData.map(item => {return {name: item.age, value:item.total}}).filter(item => item.name > 20 && item.name < 32 ),
                indPopTotal: nextProps.indPopData.map(item => {return {name: item.age, value:item.total}}).filter(item => item.name > 20 && item.name < 32 ).map(item => item.value).reduce((acc, curr) => acc + curr),
            });
        }
        if (this.props.chinaPopData !== nextProps.chinaPopData) {
            this.setState({
                chinaPieData: nextProps.chinaPopData.map(item => {return {name: item.age, value:item.total}}).filter(item => item.name > 20 && item.name < 32 ),
                chinaPopTotal: nextProps.chinaPopData.map(item => {return {name: item.age, value:item.total}}).filter(item => item.name > 20 && item.name < 32 ).map(item => item.value).reduce((acc, curr) => acc + curr),
            });
        }
        if (this.props.usPopData !== nextProps.usPopData) {
            this.setState({
                usPieData: nextProps.usPopData.map(item => {return {name: item.age, value:item.total}}).filter(item => item.name > 20 && item.name < 32 ),
                usPopTotal: nextProps.usPopData.map(item => {return {name: item.age, value:item.total}}).filter(item => item.name > 20 && item.name < 32 ).map(item => item.value).reduce((acc, curr) => acc + curr),
            });
        }
        if (this.props.indoPopData !== nextProps.indoPopData) {
            this.setState({
                indoPieData: nextProps.indoPopData.map(item => {return {name: item.age, value:item.total}}).filter(item => item.name > 20 && item.name < 32 ),
                indoPopTotal: nextProps.indoPopData.map(item => {return {name: item.age, value:item.total}}).filter(item => item.name > 20 && item.name < 32 ).map(item => item.value).reduce((acc, curr) => acc + curr),
            });
        }
    }


    showPopGraphs() {
        console.log('Inside showPopGraphs ');
        this.props.init();
    }
    render() {
        if(this.props.usPopData) {
            console.log('this.props.indPopData ', this.props.usPopData)
        }
        return (
            <div>
              {this.state.indPopTotal && <p style={totalText}> {this.state.indPopTotal} </p>}
              {this.state.indPieData && <PopPieChart popPieData={this.state.indPieData} />}
              {this.state.chinaPopTotal && <p style={totalText}> {this.state.chinaPopTotal} </p>}
              {this.state.chinaPieData && <PopPieChart popPieData={this.state.chinaPieData} />}
              {this.state.usPopTotal && <p style={totalText}> {this.state.usPopTotal} </p>}
              {this.state.usPieData && <PopPieChart popPieData={this.state.usPieData} />}
              {this.state.indoPopTotal && <p style={totalText}> {this.state.indoPopTotal} </p>}
              {this.state.indoPieData && <PopPieChart popPieData={this.state.indoPieData} />}
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
    init: () => {
        dispatch(populationAction.getIndPopData());
        dispatch(populationAction.getChinaPopData());
        dispatch(populationAction.getUSPopData());
        dispatch(populationAction.getIndoPopData());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResultPage);
