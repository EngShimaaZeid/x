import React from "react";
import Login from "./Login.js"

function App() {
  return (


<nav class="navbar bg-body-tertiary">
  <div class="container-fluid zain-bold">
    <a class="navbar-brand"><img src='./imgs/logo.jpeg'/></a>
    	<div class="search">
        <form class="form-wrapper ">
          <input type="text" id="search" placeholder="أنا أحتاج..." required/>
          <input type="submit" value="ابحث" id="submit"/>
        </form>
      </div>
     < button type="button" class="btn-round" data-toggle="modal" data-target="#loginModal">
  تسجيل الدخول
</button> 
  </div>
</nav>

);
}

export default App;