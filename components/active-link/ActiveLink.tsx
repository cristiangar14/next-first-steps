'use client'
import Link from "next/link"
import style from './ActiveLink.module.css';
import { usePathname } from "next/navigation";
interface props {
  path: string;
  text: string;
}

export const ActiveLink = ({path, text}: props) => {
  const pathName = usePathname();
  const isActive = pathName === path;

  return (
    <Link className={`${style.link} ${isActive ? style['active-link'] : ''}`} href={path}>{text}</Link>
  )
}
