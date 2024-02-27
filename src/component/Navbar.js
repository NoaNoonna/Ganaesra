import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = ({authenticate, setAuthenticate}) => {
 
  const navigate = useNavigate();
  
  const onCheckEnter = (event) => {
    if(event.key === "Enter"){
      navigate(`/?q=${event.target.value}`);
      console.log("뭐야?", event.target.value);
    }
  };
  
  const menuList = [
    'STEADY SELLER',
    'NEW',
    'BEST 50',
    'LA us',
    's/s re-open',
    '2월의 하객룩',
    'SPA',
    'ORDINAIRE',
    '제작데님',
    'OUTER',
    'TOP',
    'PANTS',
    'OPS/SK',
    'ACC',
    '당일발송',
    'ONLY YOU'
  ]
  return (
    <div>
      { 
        authenticate ? (
          <div className="login-icon" onClick={()=>setAuthenticate(false)}>
              <span>
                  <FontAwesomeIcon icon={faEnvelope} bounce/>
              </span>
              <span>
                  <FontAwesomeIcon icon={faShoppingBasket}/>
              </span>
              <span>
                  <FontAwesomeIcon icon={faUser}/>
                </span>
              <span>Logout</span>
           </div>
        ) : (         
           <div className="login-icon" onClick={()=>navigate("/login")}>
              <span>
                 <FontAwesomeIcon icon={faUser}/>
                </span>
              <span>Login</span>
            </div>
            )
      };
      
        <div className="img-logo" onClick={()=>{navigate("/?q=")}}>
            <img src="https://ganaesra.com/web/upload/category/logo/v2_10d49fe46f448e24ca8b1ccac4dd30ee_FWhTdm21yB_top.jpg"/>
        </div>
      
      <div>
        <ul className="menu-list">
          {menuList.map((menu)=>(
            <li>{menu}</li>
          ))}
        </ul>

        <span className="search-box">
          <input 
            type="text" 
            placeholder="Search..."
            onKeyUp={(event)=>onCheckEnter(event)}
            />
          <FontAwesomeIcon icon={faSearch}/>
        </span>
      </div>
    </div>
  )
}

export default Navbar
