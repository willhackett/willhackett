// @flow
import React, { type Node } from 'react'

type PropsType = {
  children: Node,
  className?: string,
}

const Page = ({ children, className }: PropsType): Node => (
  <section className={className}>
    {children}
  </section>
)
export default Page
