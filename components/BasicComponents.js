import React from 'react'
import styled from '@emotion/styled'

export const Container = styled.div`
    max-width: 960px;
    padding: 1px 36px;
    margin: auto;

    @media (max-width: 640px) {
        padding: 1px 27px;
    }
`

export const Nav = styled.nav`
    padding: 18px 36px;
    background-color: #ff7301;
    height: 60px;
    min-width: 320px;

    @media (max-width: 640px) {
        padding: 18px 27px;
    }
`

export const Scroll = styled.div`
    height: inherit;
    overflow-y: auto;
`

export const Footer = styled.footer`
    padding: 18px 0 36px;
`