import React from 'react'

const Logo = ({ color = "#161616", size = 1 }) => (
  <svg width={`${String(size * 1.0236)}rem`} height={`${size}rem`} viewBox="0 0 994 971" version="1.1">
    <g id="WH" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <path d="M899.032109,383 L899.032109,94.9510229 L94.9678907,94.9510229 L94.9678907,876.048977 L729.22095,876.048977 L729.22095,971 L0,971 L0,0 L994,0 L994,383 L994,808 L898.6,808 L898.6,638.959097 L728.8,638.959097 L728.8,808 L634,808 L634,801.158757 L545.6,526.265162 L454.4,808 L354.8,808 L239,383 L339.8,383 L410,655.143865 L498.2,383 L595.4,383 L634,502.363848 L634,383 L728.8,383 L728.8,549.643159 L898.6,549.643159 L898.6,383 L899.032109,383 Z" id="Combined-Shape" fill={color} fillRule="nonzero" />
    </g>
  </svg>
)

export default Logo