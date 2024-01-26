import Box from '@mui/material/Box';

import HeroCallToAction from './HeroCallToAction';

import Image, { StaticImageData } from "next/image";
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

