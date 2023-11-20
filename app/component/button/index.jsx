import Link from 'next/link'
import cls from 'classname'

const Button = ({ children, href, handleClick, css }) => {
  return (
    <Link href={href} onClick={handleClick} className={cls('bg-sectify py-2 px-4 rounded-md text-white block text-center', css)}>{children}</Link>
  )
}

export default Button