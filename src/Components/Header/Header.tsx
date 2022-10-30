import React, { ReactNode, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {    

    const handleProfileClick = () => {
    }

    type PropsOfConditionalLink = {
        children: ReactNode,
        to: string,
        condition: boolean
    }

    const ConditionalLink = ({ children, to, condition } : PropsOfConditionalLink ) => (!!condition && to)
    ? <Link to={to}>{children}</Link>
    : <Link to="/" onClick={handleProfileClick}>{children}</Link>

   

    // Dropdown Text 3d-Rotate Animation:
    

    useEffect(()=>{
        const menuItems = document.querySelectorAll(".menuItem")
        
        menuItems.forEach( (item) => {
            // console.log(item)
            let word = item.children[0].children[0].innerHTML.split("")
            // console.log(word)
            // console.log(item.children[0])
            item.children[0].children[0].innerHTML = ''
            word.forEach( (letter, index) => {
                item.children[0].innerHTML += `<span style="--index: ${index}">${letter}</span>`
            })

            let clonedDiv = item.children[0].cloneNode(true) as HTMLElement
            // clonedDiv.style.position = "absolute"
            // clonedDiv.style.left = "0"
            // clonedDiv.style.top = "0px"
            clonedDiv.className = "clonedDiv"
            item.appendChild(clonedDiv)
        })
    }, [])
    

    
  return (
    <>
    <div className='headerContainer'>
        <ul className='leftContainer'>
            <li className='homeIcon' >
                <ConditionalLink to="/" condition={true}>
                    <img height={50} width={50} src='https://cdn-icons-png.flaticon.com/512/25/25694.png' alt='homepage' />
                </ConditionalLink>
            </li>

            <li className='grapeIcon' >
                <ConditionalLink to="/contact" condition={true}>
                    <img height={50} width={50} src='https://cdn-icons-png.flaticon.com/512/8556/8556912.png' alt='bonuspage' />
                </ConditionalLink>
            </li>

            <li className='dropdownMenu' >
                <div className='dropdownContainer'>
                <ConditionalLink to="/about" condition={true}>
                    <img height={50} width={50} src='https://cdn-icons-png.flaticon.com/512/8556/8556885.png' alt='bonuspage' />
                </ConditionalLink>

                <a href='#0' className='menuItem'>
                    <div>
                        <span className="menuItemText">Burak</span>
                    </div>
                </a>
                
                <a href='#0' className='menuItem'>
                    <div>
                        <span className="menuItemText">Bilgin</span>
                    </div>
                </a>
                
                <a href='#0' className='menuItem'>
                    <div>
                        <span className="menuItemText">Titanic</span>
                    </div>
                </a>

                </div>
            </li>

            <li className='peanutIcon' >
                <ConditionalLink to="/shop" condition={true}>
                    <img height={50} width={50} src='https://cdn-icons-png.flaticon.com/512/8556/8556935.png' alt='bonuspage' />
                </ConditionalLink>
            </li>

        </ul>
        <ul className='rightContainer'>
            <li className='profileImage'>
                <ConditionalLink to="/profile" condition={true}>
                    {true
                    ? <img style={{borderRadius:30}} height={50} width={50} src='https://cdn-icons-png.flaticon.com/128/3135/3135715.png' alt='profile' referrerPolicy='no-referrer' />
                    : <img height={50} width={50} src='https://cdn-icons-png.flaticon.com/128/3135/3135715.png' alt='profile' />
                }
                </ConditionalLink>                
                <span className='username'></span>
            </li>
            <li className='signout'>Sign Out</li>
        </ul>
    </div>
    </>
  )
}

export default Header;