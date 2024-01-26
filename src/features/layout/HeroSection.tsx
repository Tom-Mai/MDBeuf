import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import HeroCallToAction from './HeroCallToAction';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image, { StaticImageData } from "next/image";
import { MyHerosSectionImage } from '@/app/assets/MyHerosSectionImage';
import { Titreh1 } from './Titreh1';
import { MyHerosSectionImageAbout } from '@/app/assets/MyHeroSectionImageAbout';
interface HeroSectionProps {   
    imgSrc?: string | { src: StaticImageData; alt?: string };
    imgAlt?: string;
    titreh1: React.ReactNode;
}
export const HeroSection = ({ titreh1, imgSrc, imgAlt }: HeroSectionProps) => {
    
    return (    
        <Box className='herosSection'>
            {imgSrc && 
                <Image className="herosImg" src={typeof imgSrc === 'string' ? imgSrc : imgSrc.src} width={1920} height={1920} alt={imgAlt || "Image"} />
            }
     
            <HeroCallToAction titreh1={titreh1} />
        </Box>
    );
};

