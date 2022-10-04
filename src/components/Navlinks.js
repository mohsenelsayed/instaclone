import {React, useState } from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineHome, AiOutlinePlusSquare, AiOutlineHeart, AiOutlineUser, AiFillHome, AiFillPlusSquare, AiFillHeart} from 'react-icons/ai'
import {BsBoxArrowInUpRight, BsFillArrowUpRightSquareFill } from 'react-icons/bs'
import {RiCompass3Line, RiCompass3Fill} from 'react-icons/ri'


function Navlinks() {

  const [focused, setfocused] = useState("/")
  const links = [
    {
      to: "/",
      icon: <AiOutlineHome />,
      iconFill: <AiFillHome />
    },
    {
      to: "/inbox",
      icon: <BsBoxArrowInUpRight />,
      iconFill: <BsFillArrowUpRightSquareFill />
    },
    {
      to: undefined,
      icon: <AiOutlinePlusSquare />,
      iconFill: <AiFillPlusSquare />
    },
    {
      to: "/explore",
      icon: <RiCompass3Line />,
      iconFill: <RiCompass3Fill />
    },
    {
      to: "/notifications",
      icon: <AiOutlineHeart />,
      iconFill: <AiFillHeart />
    },
    {
      to: undefined,
      icon: <AiOutlineUser />,
      iconFIll: <AiOutlineUser />
    },
  ]

  return (
    <div className='nav-links'>
      {
        links.map((item) => {
          return item.to === undefined? <span> {item.icon} </span>
          : <span> <Link onClick={e => setfocused(item.to)} to={item.to} > {focused === item.to? item.iconFill : item.icon } </Link> </span>
        })
      }
    </div>
  )
}

export default Navlinks