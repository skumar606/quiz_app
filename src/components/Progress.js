import styled from 'styled-components'

const ProgressWrapper = styled.div`
    font-size: ${props => {
        if(props.size==='tiny') return '.85714286rem';
        if(props.size==='small') return '.92857143rem';
        if(props.size==='large') return '1.14285714rem';
        return '1rem';
    }};
    display: block;
    position: relative;
    max-width: 100%;
    border: none;
    margin: 1em 0 2.5em;
    box-shadow: none;
    border-radius: .28571429rem;
    padding: 0;
    background: rgba(0,0,0,.1);
`

const Bar = styled.div`
    height: ${props => {
        if(props.size==='tiny') return '.5em';
        if(props.size==='small') return '1em';
        if(props.size==='large') return '2.5em';
        return '1.75em';
    }};
    display: block;
    line-height: 1;
    position: relative;
    min-width: 2em;
    background-color: #00b5ad;
    border-radius: .28571429rem;
    transition: width .1s ease,background-color .1s ease;
`
const Progress = (props) => {
    const barStyle = {
        transitionDuration: '300ms', 
        width: props.width
    }
    return (
        <ProgressWrapper>
            <Bar style={barStyle} size={props.size}></Bar>
        </ProgressWrapper>
    )
}

export default Progress