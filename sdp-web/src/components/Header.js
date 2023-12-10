import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (index) => {
        setSelectedItem(index === selectedItem ? null : index);
    };

    return ( <
        header className = "app-header" >
        <
        div className = "logo-section" >
        <
        h1 style = {
            { color: 'black' } } > SER. < /h1> <
        /div> <
        div className = "nav-section" >
        <
        nav >
        <
        ul >
        <
        li onClick = {
            () => handleItemClick(0) }
        style = {
            { textDecoration: selectedItem === 0 ? 'underline' : 'none', color: 'black' } } >
        Home <
        /li> <
        li onClick = {
            () => handleItemClick(1) }
        style = {
            { textDecoration: selectedItem === 1 ? 'underline' : 'none', color: 'black' } } >
        About <
        /li> <
        li onClick = {
            () => handleItemClick(2) }
        style = {
            { textDecoration: selectedItem === 2 ? 'underline' : 'none', color: 'black' } } >
        Contact <
        /li> <
        li onClick = {
            () => handleItemClick(3) }
        style = {
            { textDecoration: selectedItem === 3 ? 'underline' : 'none', color: 'black' } } >
        Services <
        /li> <
        /ul> <
        /nav> <
        /div> <
        div className = "user-section" >
        <
        span style = {
            { color: 'black' } } > User < /span> <
        /div> <
        /header>
    );
};

export default Header;