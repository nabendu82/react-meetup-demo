import styled from 'styled-components';

const PageWrapper = styled.div`
  max-width: ${ props => (props.wider ? '96%' : '85%') };
  margin: 1% auto;
`;

const GridHome = styled.div`
  display: grid;
  grid-template-rows: 80px 100px 100px 80px;
  grid-row-gap: 10px;
  align-items: center;
`;

const HeaderWrapper = styled.div`
    background: var(--yellow);
    height: 5%;
    padding: 1%;
`;

const FlexBoxNormal = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.25;
  color: #333333;
`;

const FlexResult = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const FlexBoxRev = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: ${ props => (props.noRightMargin ? '' : '8%') };
    align-items: ${ props => (props.toCenter ? 'center' : 'flex-start') };
    justify-content: center;
`;

const FlexRevRadio = styled.div`
    display: flex;
    align-items: flex-start;
    margin-right: 5%;
    flex-direction: column;
    justify-content: center;
`;

const FlexBoxNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${ props => (props.toBtw ? 'space-between' : 'space-around') };  
`;

const HeaderTitle = styled.div`
    font-size: ${ props => (props.small ? '18px' : '25px') };
    margin-top: ${ props => (props.topMargin ? '5%' : '') };
    font-weight: bold;
    line-height: 1.25;
    color: #333333;
    text-shadow: 0px 4px 3px rgba(0,0,0,0.4),
                 0px 8px 13px rgba(0,0,0,0.1),
                 0px 18px 23px rgba(0,0,0,0.1);
`;

export { PageWrapper, GridHome, FlexBoxNormal, FlexBoxNav, HeaderTitle, HeaderWrapper, FlexBoxRev, FlexRevRadio, FlexResult };