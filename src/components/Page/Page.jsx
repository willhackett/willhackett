// @flow
import React, { type Node } from 'react'
import MainMenu from 'components/MainMenu'

type PropsType = {
  children: Node,
  className?: string,
}

const Page = ({ children, className }: PropsType): Node => (
  <section className={className}>
    <MainMenu />
    {children}
  </section>
)
export default Page
