import React, { useState } from "react";
import {Card,CardContent,Typography,Box} from '@mui/material';


interface KPICardProps{
    title:string;
    value:number|string;
    icon:React.ReactNode;
    color:string;
    unit?:string; // Optional the ? makes optional
}

function KPICard(props: KPICardProps){
    
    
    return(
        <Card sx={{height:'100%'}}>
            <CardContent>
                <Box sx={{display:'flex',justifyContent:'space-between', alignItems:'center'}}>
                    {/*left Side - text*/}
                    <Box>
                        <Typography color="textSecondary" variant="overline">
                        {props.title}
                        </Typography>
                        <Typography variant="h4">
                                {props.value}
                                {props.unit && (<Typography component='span' variant="body1" sx={{marginLeft:1}}>
                                {props.unit}
                        </Typography>
                        )}
                        </Typography>
                    </Box>
                    {/* Right Side */}
                    <Box
                    sx={{
                        backgroundColor:props.color,
                        borderRadius:'20%',
                        padding:1.5,
                        display:'flex',
                    }}>
                        {props.icon}
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}

export default KPICard;

