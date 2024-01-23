'use client'

import { PricePaper } from '@/src/features/layout/PricePaper';
import { Grid, Paper, Stack, Typography } from '@mui/material';
import * as React from 'react';
interface PriceComponentProps{
    textContent?: string;
}
export const PriceComponent = ({textContent}:PriceComponentProps) => {
    return (
        <Grid item xs={2} display='flex' justifyContent="center"
            sx={{
                width: '100%',
            }}>
            <PricePaper firstTitle={textContent} />
        </Grid>
    )
}