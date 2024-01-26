
'use client'
import { styled } from '@mui/material/styles';
import { Card, Paper } from "@mui/material";
export const PricePaperTheme = styled(Card)(({ theme })=> ({
    width:300,
    height:600,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
}));