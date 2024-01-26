
'use client'
import { styled } from '@mui/material/styles';
import { Card, Paper } from "@mui/material";
export const PriceCardTheme = styled(Card)(({ theme })=> ({
    width:300,
    height:"fitContent",
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
}));