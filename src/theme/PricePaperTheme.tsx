
'use client'
import { styled } from '@mui/material/styles';
import { Paper } from "@mui/material";
export const PricePaperTheme = styled(Paper)(({ theme })=> ({
    width:300,
    height:600,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
}));