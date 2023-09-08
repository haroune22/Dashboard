/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { FiShoppingCart } from "react-icons/fi"
import { BsChatLeft } from "react-icons/bs"
import {  RiNotification3Line } from "react-icons/ri"
import { MdKeyboardArrowDown } from "react-icons/md"


import avatar from '../data/avatar.jpg'
import {Cart,Chat,Notification,UserProfile} from '.'
import { useStateContext } from "../context/ContextProvider"


const NavButton =({ title, customFunc, icon, color, dotColor })=>(


  <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>

)

const Navbar = () => {

  const { activeMenu,setActiveMenu ,isClicked,setIsClicked,handleClick,setScreenSize,screenSize,currentColor} = useStateContext()

  useEffect(()=>{
        const handleResize = ()=>{
          setScreenSize(window.innerWidth)
          window.addEventListener('resize',handleResize)
        }
        handleResize()
        return () => window.removeEventListener('resize',handleResize)
  },[])

  useEffect(()=>{
        if(screenSize <= 900){
          setActiveMenu(false)
        }else{
          setActiveMenu(true)
        }
  },[screenSize])

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
        <NavButton title='Menu' customFunc={()=>setActiveMenu(!activeMenu)} color={currentColor} icon={<AiOutlineMenu/>}/>
        <div className="flex">
        <NavButton title='Cart' customFunc={()=>handleClick('cart')} color={currentColor} icon={<FiShoppingCart/>}/>
        <NavButton title="Chat" dotColor="#03C9D7" customFunc={() => handleClick('chat')} color={currentColor} icon={<BsChatLeft />} />
        <NavButton title="Notification" dotColor="rgb(254, 201, 15)" customFunc={() => handleClick('notification')} color={currentColor} icon={<RiNotification3Line />} />
     
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick('userProfile')}
          >
            <img
              className="rounded-full w-8 h-8"
              src={avatar}
              alt="user-profile"
            />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>{' '}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Michael
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
    

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}

        </div>
    </div>
  )
}

export default Navbar