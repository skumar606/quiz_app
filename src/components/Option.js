import styled, {css} from 'styled-components'

const Option = styled.label`
    display: block;
    padding: 12px;
    margin: 6px 0px;
    background-color: ${props => {
        if(props.light) return '#f7f7f7';
        if(props.success) return '#d1e7dd';
        if(props.danger) return '#f8d7da';
        if(props.dark) return '#d3d3d4';
        if(props.info) return '#5bc0de';
        return '#f0ad4e';
    }};
    color: ${props => {
        if(props.success) return '#0f5132';
        if(props.danger) return '#842029';
        if(props.dark) return '#141619';
        return '#000';
    }};
    ${props => {
        return (
            props.hover && 
            css`
                &: hover {
                    background-color: #d3d3d4;
                    color: #141619;
                    cursor: pointer;
                }
            `
        )
    }}
`

export default Option
