import styled, {css} from 'styled-components'

const Segment = styled.div`
    margin: 1rem 0;
    padding: 1em 1em;
    border-radius: .28571429rem;
    border: 1px solid rgba(34,36,38,.15);
    overflow: hidden;
    ${props => {
        return (
            props.raised && 
            css`
                box-shadow: 0 2px 4px 0 rgb(34 36 38 / 12%), 0 2px 10px 0 rgb(34 36 38 / 15%);
            `
        )
    }}
`

export default Segment