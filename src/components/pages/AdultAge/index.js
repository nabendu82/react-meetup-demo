import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as populationAction from '../../../actions/populationAction';
import PopPieChart from '../../molecules/PopPieChart';
import { GridArea, HeaderText, GridCentered } from '../../molecules/StyledComponents';
import moment from 'moment';

const currYear = moment().year();

const totalText = {
    fontSize: '18px',
    fontWeight: '400'
}

class AdultAge extends Component {
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
                indPieData: nextProps.indPopData.map(item => {return {name: item.age, value:item.total}}).filter(item => item.name > 20 && item.name < 41 ),
                indPopTotal: nextProps.indPopData.map(item => {return {name: item.age, value:item.total}}).filter(item => item.name > 20 && item.name < 41 ).map(item => item.value).reduce((acc, curr) => acc + curr),
            });
        }
        if (this.props.chinaPopData !== nextProps.chinaPopData) {
            this.setState({
                chinaPieData: nextProps.chinaPopData.map(item => {return {name: item.age, value:item.total}}).filter(item => item.name > 20 && item.name < 41 ),
                chinaPopTotal: nextProps.chinaPopData.map(item => {return {name: item.age, value:item.total}}).filter(item => item.name > 20 && item.name < 41 ).map(item => item.value).reduce((acc, curr) => acc + curr),
            });
        }
        if (this.props.usPopData !== nextProps.usPopData) {
            this.setState({
                usPieData: nextProps.usPopData.map(item => {return {name: item.age, value:item.total}}).filter(item => item.name > 20 && item.name < 41 ),
                usPopTotal: nextProps.usPopData.map(item => {return {name: item.age, value:item.total}}).filter(item => item.name > 20 && item.name < 41 ).map(item => item.value).reduce((acc, curr) => acc + curr),
            });
        }
        if (this.props.indoPopData !== nextProps.indoPopData) {
            this.setState({
                indoPieData: nextProps.indoPopData.map(item => {return {name: item.age, value:item.total}}).filter(item => item.name > 20 && item.name < 41 ),
                indoPopTotal: nextProps.indoPopData.map(item => {return {name: item.age, value:item.total}}).filter(item => item.name > 20 && item.name < 41 ).map(item => item.value).reduce((acc, curr) => acc + curr),
            });
        }
    }


    showPopGraphs() {
        console.log('Inside showPopGraphs ');
        this.props.init(currYear);
    }
    render() {

        return (
            <Fragment>
                <HeaderText>
                    Population Distribution : 21 to 40 years
                </HeaderText>
                <GridArea>
                    <GridCentered>
                        {this.state.indPopTotal && <p style={totalText}> India 🇮🇳 - {this.state.indPopTotal} </p>}
                        {this.state.indPieData && <PopPieChart popPieData={this.state.indPieData} />}
                    </GridCentered>
                    <GridCentered>
                        {this.state.chinaPopTotal && <p style={totalText}> China 🇨🇳 - {this.state.chinaPopTotal} </p>}
                        {this.state.chinaPieData && <PopPieChart popPieData={this.state.chinaPieData} />}
                    </GridCentered>
                    <GridCentered>
                        {this.state.usPopTotal && <p style={totalText}> United States 🇺🇸 - {this.state.usPopTotal} </p>}
                        {this.state.usPieData && <PopPieChart popPieData={this.state.usPieData} />}
                    </GridCentered>
                    <GridCentered>
                        {this.state.indoPopTotal && <p style={totalText}> Indonesia 🇮🇩 - {this.state.indoPopTotal} </p>}
                        {this.state.indoPieData && <PopPieChart popPieData={this.state.indoPieData} />}
                    </GridCentered>
                </GridArea>
            </Fragment>
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
)(AdultAge);
