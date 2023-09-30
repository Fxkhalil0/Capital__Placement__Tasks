import React, { useState } from 'react';
import style from './SideMenu.module.css';

function SideMenu() {
  const [activeItem, setActiveItem] = useState<string>('home');

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
  };

  return (
    <div className={style["sidemenu__preview"]}>
      <div className={style["icon__div"]}>
        <div className={style["top__div"]}>
          <p></p>
          <div className={style["icon__group"]}>
            <i className='bx bx-home'
              id={`${activeItem === "home" ? style["active"] : ""}`}
              onClick={() => handleItemClick("home")}
            ></i>
            <i className="fa-solid fa-users"
              id={`${activeItem === "users" ? style["active"] : ""}`}
              onClick={() => handleItemClick("users")}
            ></i>
            <i className="fa-regular fa-calendar-check"
              id={`${activeItem === "calender" ? style["active"] : ""}`}
              onClick={() => handleItemClick("calender")}
            ></i>
            <i className="fa-solid fa-share-nodes"
              id={`${activeItem === "share" ? style["active"] : ""}`}
              onClick={() => handleItemClick("share")}
            ></i>
            <i className="fa-regular fa-file-lines"
              id={`${activeItem === "file" ? style["active"] : ""}`}
              onClick={() => handleItemClick("file")}
            ></i>
            <i className="fa-solid fa-book"
              id={`${activeItem === "book" ? style["active"] : ""}`}
              onClick={() => handleItemClick("book")}
            ></i>
            <i className="fa-regular fa-heart"
              id={`${activeItem === "heart" ? style["active"] : ""}`}
              onClick={() => handleItemClick("heart")}
            ></i>
            <i className="fa-solid fa-chevron-left"
              id={`${activeItem === "left" ? style["active"] : ""}`}
              onClick={() => handleItemClick("left")}
            ></i>
          </div>
        </div>
        <div className={style["down__div"]}>
          <i className="fa-solid fa-gear"></i>
          <p>AS</p>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
