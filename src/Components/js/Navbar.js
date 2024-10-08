import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from "./Container";
import Fcontainer from "./Fcontainer";

// Define MobileMenu component
const MobileMenu = () => {
  return (
    
    <div className={'mobile-menu'}>
     <a href="/">الرئيسيه</a>

<a href='#news'>من نحن</a>
<a href='/f'>فعاليات</a>
<a href='#contact'>مواضيع هامة</a>
<a href='#about'>مصارة المعرفة والدعم</a>
    </div>
  );
};

function App() {
  const [isShown, setIsShown] = useState(false);
  const toggleMobileMenu = () => {
    setIsShown(!isShown);
  };

  return (
    
    <>
    
      <div className='topnav zain-light'>
       

        {/* Desktop Menu, which only appears on large screens */}
        <div className='menu ' >
        <a href="/">الرئيسيه</a>

          <a href='#news'>من نحن</a>
          <a href='/f'>فعاليات</a>
          <a href='#contact'>مواضيع هامة</a>
          <a href='#about'>مصارة المعرفة والدعم</a>
        </div>

        {/* This button only shows up on small screens. It is used to open the mobile menu */}
        <button className='show-mobile-menu-button' onClick={toggleMobileMenu}>
          &#8801;
        </button>
      </div>

      {/* The mobile menu and the close button */}
      {isShown && <MobileMenu />}
      {isShown && (
        <button className='close-mobile-menu-button' onClick={toggleMobileMenu}>
          &times;
        </button>
      )}

     
    </>
  );
}

export default App;