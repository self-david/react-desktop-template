import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
  width: 100%;
  height: calc(100vh - 30px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: #323232;
  color: #fafafa;
  font-size: 36px;
`

export default function Home() {
  return <Content>My App</Content>
}
