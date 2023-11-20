import Link from 'next/link'
import React from 'react'

const Button = ({ children, href, handleClick }) => {
  return (
    <Link href={href} onClick={handleClick} className='bg-sectify py-3 px-4 rounded-md'>{children}</Link>
  )
}

export default Button