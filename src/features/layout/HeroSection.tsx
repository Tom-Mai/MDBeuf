import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import HeroCallToAction from './HeroCallToAction';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';
import { MyHerosSectionImage } from '@/app/assets/MyHerosSectionImage';



export const HeroSection = () => {
    return(
        <Box className='herosSection'>
            <Image  className="herosImg" src={MyHerosSectionImage}width={1920} height={1920} alt="HERO SECTION" />
            <HeroCallToAction/>
        </Box>
    )
};

