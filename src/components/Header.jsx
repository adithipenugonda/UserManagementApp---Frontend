import {NavLink} from 'react-router-dom'

function Header() {
  return (
    <nav className='flex items-center justify-between px-10 py-5 bg-lime-200'>
      <img className='rounded-full w-12 h-12 object-cover'src="https://www.iconpacks.net/icons/1/free-user-group-icon-296-thumb.png" 
  alt="" 
     />
      <ul className='flex gap-8 items-center'>
        <li>
          <NavLink to = "" className={({isActive})=>isActive?"bg-lime-400 p-2 font-bold":"text-black"}>
            Home
            </NavLink>
        </li>

        <li>
          <NavLink to = "/add-user" className={({isActive})=>isActive?"bg-lime-400 p-2 font-bold":"text-black"}>
            Add User
            </NavLink>
        </li>


        <li>
          <NavLink to = "/users" className={({isActive})=>isActive?"bg-lime-400 p-2 font-bold":"text-black"}>
            Users List
            </NavLink>
        </li>


        <li>
          <NavLink to = "/user" className={({isActive})=>isActive?"bg-lime-400 p-2 font-bold":"text-black"}>
            User
            </NavLink>
        </li>
      </ul>

    </nav>
  )
}

export default Header
