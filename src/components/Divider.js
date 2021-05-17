import styled, {css} from 'styled-components'

const Divider = styled.div`
    font-size: 1rem;
    margin: 1rem 0;
    line-height: 1;
    height: 0;
    font-weight: 700;
    border-top: 1px solid rgba(34,36,38,.15);
    border-bottom: 1px solid rgba(255,255,255,.1);
    ${props => {
        return (
            props.invisible &&
            css`
                border-color: transparent!important;
            `
        )
    }}
`

export default Divider
