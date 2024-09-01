import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
   <div class="sidebar co zain-regular">
  <a class="active zain-bold" href="#home">المصادر</a>
  <a href="#news">الأدلة الإرشادية</a>
  <a href="#contact">أدوات توعيد</a>
  <a href="#about">كورسات تدريبه</a>
</div>

  );
};
      
export default Sidebar;
                             