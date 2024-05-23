'use client'
import React, { useState, useEffect } from "react";
import {IconButton } from "@mui/material";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { ChevronsUp } from "lucide-react";
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
                bottom: "5px",
                right: "0px"
            }}
        >
            <ChevronsUp size={40} strokeWidth={1} color="#b08d57"/>
            
            </IconButton> 
        
    );
}
