import React from "react";
import {
    Box,
    Paper,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,

} from '@mui/material';

function RequestList(){
    return(
        <Paper sx={{padding:3,marginTop:3}}>
            <Typography variant="h6" sx={{marginBottom:2}}>
                Talep Listesi
            </Typography>


        </Paper>
    )
}