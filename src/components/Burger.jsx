import React from 'react'
import styled from 'styled-components'

const Buns = styled`


`

const Burger = () => (
  <Buns>
    <button
      type="button"
      class="hamburger hamburger--elastic"
      aria-label="Menu"
      aria-controls="navigation"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
  </Buns>
)

export default Burger