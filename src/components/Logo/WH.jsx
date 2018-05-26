// @flow
import React from 'react'
import cx from 'classnames'

import './WH.css'

type PropsType = {
  className?: string,
}

const WH = ({ className }: PropsType) => (
  <svg className={cx('logo--wh', className)} viewBox="0 0 473 202" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <g id="LogoWH" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <g id="WH" fill="#000000">
        <path d="M240.571518,0.4 L299.715203,0.4 L237.550401,202 L188.659522,202 L149.984004,104.693441 L112.051522,202 L63.1635225,202 L0.0454414063,0.4 L59.6873604,0.4 L92.3897612,116.593599 L140.41664,1.39647754 L159.634878,1.39647754 L208.522878,116.682878 L240.571518,0.4 Z M416.21376,0.4 L472.244161,0.4 L472.244161,202 L416.21376,202 L416.21376,124.60864 L355.716481,124.60864 L355.716481,202 L299.68608,202 L299.68608,0.4 L355.716481,0.4 L355.716481,73.1344009 L416.21376,73.1344009 L416.21376,0.4 Z" />
      </g>
    </g>
  </svg>
)
export default WH
