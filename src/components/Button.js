import React from 'react'
import styled, { css } from 'styled-components'
import Loader from './Loader'

const StyledButton = styled.button`
    display: inline-block;
    outline: none;
    border: none;
    margin: 0 .25em 0 0;
    padding: .78571429em 1.5em .78571429em;
    font-weight: 700;
    text-align: center;
    text-decoration: none;
    border-radius: .28571429rem;
    cursor: pointer;

    font-size: ${props => {
        if (props.small) return '.92857143rem'
        if (props.large) return '1.14285714rem'
        return '1rem'
    }};

    color: ${props => {
        if(props.primary || props.secondary) {
            return '#fff';
        }
        return 'rgba(0,0,0,.6)';
    }};

    background-color: ${props => {
        if(props.primary) return '#1a69a4'
        if(props.secondary) return '#FF6600'
        return '#e0e1e2'
    }};
    
    border: 2px solid ${props => {
        if(props.primary) return '#1a69a4'
        if(props.secondary) return '#FF6600'
        return '#e0e1e2'
    }};

    &:active {
        background-color: ${props => {
            if(props.primary) return '#1a69a4'
            if(props.secondary) return '#FF6600'
            return '#babbbc'
        }};
        color: ${props => {
            if(props.primary || props.secondary) return '#fff'
            return 'rgba(0,0,0,.9)'
        }};
    }

    &:hover {
        background-color: ${props => {
            if(props.primary) return '#1678c2'
            if(props.secondary) return '#FF6600'
            return '#cacbcd'
        }};
        color: ${props => {
            if(props.primary || props.secondary) return '#fff'
            return 'rgba(0,0,0,.8)'
        }};
        box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgb(34 36 38 / 15%) inset;
    }

    ${props => {
        return (
            props.disabled &&
            css`
                cursor: default;
                opacity: 0.45!important;
                background-image: none!important;
                box-shadow: none!important;
                pointer-events: none!important;
            `
        )
    }}

    ${props => {
        return (
            props.inverse &&
            css`
                background-color: #fff;
                color: #a1cdf1;
            `
        )
    }}
    ${props => {
        return (
            props.block &&
            css`
                width: 100%;
            `
        )
    }}
`

const Button = ({ primary, secondary, small, large, inverse, loading, disabled, children, ...props }) => {
    return (
        <StyledButton primary={primary} secondary={secondary} small={small} large={large} inverse={inverse} disabled={disabled} {...props}>
            {loading ? <Loader small white /> : children}
        </StyledButton>
    )
}

export default Button