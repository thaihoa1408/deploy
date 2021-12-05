/**
 * This is the category pills UI on the menu page 
 * Some discussion here. We are using a scrollspy method to auto select the category
 * when scrolling through the menu. I don't think we need to setCategory for now. 
 **/
import { Nav } from "react-bootstrap";
import React, { useState,useEffect } from "react";
import styles from './layout/MenuCategory.module.css';
import ScrollSpyNav from 'react-scrollspy-nav';
export default function MenuCategory(props){
  
  const [category, setCategory] = useState(1)

  return (
    // map categories array here 
    props.categories.length ? 
    (
      <ScrollSpyNav
        scrollTargetIds={(props.categories).map(i => `category-header-${i.id}`)}
        activeNavClass={styles.menucategory_link__active}
        scrollDuration="150"
      >
        <div className="overflow-auto p-3">
          <Nav
            className="d-flex flex-nowrap"
            id="menuCategory-tab"
            >
            {props.categories.map((item) => {
              return (
                <Nav.Item 
                  key={item.id}
                  className="flex-shrink-0">
                  <Nav.Link 
                    href={`#category-header-${item.id}`}
                    className={styles.menucategory_link}
                  >
                    {item.label}
                  </Nav.Link>
                </Nav.Item>
              )
            })}
          </Nav>
        </div>
      </ScrollSpyNav>
    ) :
    (
      null
    )
  )
}