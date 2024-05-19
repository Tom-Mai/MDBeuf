'use client'
import {styled} from '@mui/material/styles';
import { Card } from '@mui/material';
import { transform } from 'next/dist/build/swc';

export const CardTheme = styled(Card)(({theme})=>({
    width:300,
    height:"fitContent",
    padding: theme.spacing(2.5),
    margin: theme.spacing(2.5),
    backgroundColor:"#f0f0f0",
    boxShadow:" 0 4px 8px rgba(0, 0, 0, 0.1)",
    border: "1px solid #ddd ",
    hyphens : "auto",
    transition: "transform 0.3s ease",
    '&:hover':{
        transform: "translateY(-5px)",
    },

}));