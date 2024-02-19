'use client'
import React, { useState, useEffect } from "react";
import {IconButton } from "@mui/material";

export default function ScrollTopTop() {
    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        setShowButton(window.scrollY > 600);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <IconButton
            onClick={scrollToTop}
            style={{
                display: showButton ? "block" : "none",
                position: "fixed",
                bottom: "10px",
                right: "10px"
            }}
        >
            Up
            </IconButton> 
        
    );
}
