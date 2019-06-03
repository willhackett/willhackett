import React, { useState, useRef } from 'react'
import styled from 'styled-components'

import BasicHeader from '../../components/BasicHeader'
import { useInterval } from '../../modules/effects'

import Logo from './components/Logo'
import { BigText, Stack, BigInput } from './components'
import SlideContainer from './components/SlideContainer'
import { DownArrow, UpArrow } from './components/Arrow'

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #161616;
  min-height: 100vh;
  margin: 0;
  color: white;
  padding: 3.5rem 0.5rem;
`

const fakePasswords = [
  'password',
  'some-sausages-smell-salty',
  'lemons',
  'vans-hold-much-happiness',
  'rainbows',
  'unicorn-boat-leopard-zipper',
  'salad'
]

let init = 0

const Dmps = () => {
  const [breached, setBreached] = useState(null)
  const [faked, setFaked] = useState('password')
  const passwordInputRef = useRef(null)

  useInterval(() => {
    const ne = fakePasswords.indexOf(faked) + 1
    setFaked(fakePasswords[ne > fakePasswords.length - 1 ? 0 : ne])
  }, 1000)

  return (
    <Container>
      <BasicHeader />
      <Logo />
      <DownArrow />
      <Stack>
        <BigText>
          Do you login to all your accounts with the same password?
        </BigText>
        <BigText>It might have been seen in a breach.</BigText>
      </Stack>
      <DownArrow />
      <Stack>
        <BigText>
          When hackers breach a site they will dump usernames and passwords onto
          the web.
        </BigText>
        <BigText>
          They'll then use these combinations in attacks on other websites
          — this is called <i>credentials stuffing</i>.
        </BigText>
        <BigInput
          value={faked}
          displayType={
            fakePasswords.indexOf(faked) % 2 === 0 ? 'success' : 'error'
          }
          placeholder="Type your password here"
          disabled
        />
        <DownArrow />
      </Stack>
      <Stack>
        <BigText>
          The good guys &mdash; white collar hackers, red teams and security
          engineers &mdash; scour the web for these dumps.
        </BigText>
        <BigText>
          One such good guy is Troy Hunt &mdash; the creator of
          <br />{' '}
          <a href="https://www.haveibeenpwned.com/" target="_blank">
            Have I Been Pwned
          </a>
          .
        </BigText>
        <DownArrow />
      </Stack>
      <Stack>
        <BigText>
          <a href="https://www.haveibeenpwned.com/" target="_blank">
            Have I Been Pwned
          </a>{' '}
          provides an API that can developers can query to check if a password
          has been found in a prior breach.
        </BigText>
        <BigInput
          ref={passwordInputRef}
          type="password"
          autocomplete="off"
          displayType={
            breached === true ? 'error' : breached === false ? 'success' : null
          }
          placeholder="Try it out — type a password"
        />
      </Stack>
    </Container>
  )
}

export default Dmps
