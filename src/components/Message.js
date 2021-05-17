import styled from 'styled-components'

const Message = styled.div`
    padding: 1em 1.5em;
    margin: 1em 0;
    border-radius: .28571429rem;
    background-color: ${props => {
        if(props.positive) return '#d1e7dd';
        if(props.negative) return '#f8d7da';
        return '#f8f8f9';
    }};
    color: ${props => {
        if(props.positive) return '#0f5132';
        if(props.negative) return '#842029';
        return 'rgba(0,0,0,.87)';
    }};
    box-shadow: ${props => {
        if(props.positive) return '0 0 0 1px #a3c293 inset, 0 0 0 0 transparent';
        if(props.negative) return '0 0 0 1px #e0b4b4 inset, 0 0 0 0 transparent';
        return '0 0 0 1px rgb(34 36 38 / 22%) inset, 0 0 0 0 transparent';
    }};
`

export default Message
