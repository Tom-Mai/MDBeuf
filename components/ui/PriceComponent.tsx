'use client'
import { Grid, Paper, Stack, Typography } from '@mui/material';
import * as React from 'react';
// interface PriceComponentProps{
//     textContent?: string;
// }
// {textContent}:PriceComponentProps
interface PriceComponentProps{
    children?: React.ReactNode,
}
export const PriceComponent = ({children}:PriceComponentProps) => {
    return (
        <Stack  direction={{ sm: 'column', md: 'row' }} spacing={2} justifyContent="center" alignItems="center"
        
            sx={{
                width: '100%',
                marginY:"20px",
            }}>
           {children}
        </Stack>
    )
}