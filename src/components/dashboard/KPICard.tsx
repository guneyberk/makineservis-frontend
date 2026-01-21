import React from "react";
import {Card,CardContent,Typography,Box} from '@mui/material';


interface KPICardProps{
    title:string;
    value:number;
    icon:React.ReactNode;
    color:string;
}

function KPICard(props: KPICardProps){
    return(
        
        <Card sx={{maxWidth:300,minWidth:200}}>
            <CardContent>
                <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    {/*Left side - Text*/}
                    <Box>
                        <Typography color="textSecondary" variant="overline">
                            {props.title}
                        </Typography>
                        <Typography variant="h3">
                            {props.value}
                        </Typography>
                    </Box>
                    {/* Right side -Icon*/}
                    <Box sx={{backgroundColor : props.color,
                        borderRadius:':%50',
                        padding:2,
                        display:"flex",
                    }}>
                        {props.icon}
                    </Box>
                </Box>
            </CardContent>
        </Card>
    )
}

export default KPICard;
