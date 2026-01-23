import React, {useState} from "react";

import {Box,
        Paper,
        Typography,
        FormControl,
        InputLabel,
        Select,
        MenuItem,
        Checkbox,
        ListItemText,
        OutlinedInput,
        Chip,
} from '@mui/material';

function FilterPanel(){
    const [status, setStatus] = useState<string[]>([]);
    const [requestType, setRequestType] = useState('');
    const [category, setCategory]=useState('');

    const handleStatusChange = (event:any) => {
        setStatus(event.target.value);
        console.log('Selected status:',event.target.value);
    };
    const handleRequestTypeChange = (event: any) =>{
        setRequestType(event.target.value);
    }

    const handleCategoryChange =(event:any)=>{
        setCategory(event.target.value);
    };


    return(
        <Paper sx={{padding:3, marginBottom:3}}>
            <Typography variant="h6" sx={{marginBottom:2}}>
                Filtreler
            </Typography>

            <Box sx={{display:'flex', gap:2}}>
                {/* Status Filter */}
                <FormControl sx={{minWidth:200}}>
                    <InputLabel>Durum</InputLabel>
                    <Select 
    multiple
    value={status}
    onChange={handleStatusChange}
    input={<OutlinedInput label="durum" />}
    renderValue={(selected) => (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.map((value) => (
                <Chip key={value} label={value} size="small" />
            ))}
        </Box>
    )}
>
    <MenuItem value="open">
        <Checkbox checked={status.includes('open')} />
        <ListItemText primary="Açık" />
    </MenuItem>
    <MenuItem value="pending">
        <Checkbox checked={status.includes('pending')} />
        <ListItemText primary="Beklemede" />
    </MenuItem>
    <MenuItem value="completed">
        <Checkbox checked={status.includes('completed')} />
        <ListItemText primary="Tamamlandı" />
    </MenuItem>
    <MenuItem value="cancelled">
        <Checkbox checked={status.includes('cancelled')} />
        <ListItemText primary="İptal Edildi" />
    </MenuItem>
</Select>
</FormControl>
{/* Talep Turu Filtre */}
<FormControl sx={{minWidth:200}}>
    <InputLabel>Talep Turu</InputLabel>
    <Select value={requestType}
            label="Talep Turu"
            onChange={handleRequestTypeChange}>
                <MenuItem value="">Tumu</MenuItem>
                <MenuItem value="maintenance">Bakim</MenuItem>
                <MenuItem value="repair">Ariza</MenuItem>
                <MenuItem value="installation">Kurulum</MenuItem>
                <MenuItem value="inspection">Kontrol</MenuItem>
            </Select>
</FormControl>

{/* Talep kategorisi Filtre */}
                <FormControl sx={{minWidth:200}}>
    <InputLabel>Talep kategorisi</InputLabel>
    <Select value={category}
            label="Talep Kategorisi"
            onChange={handleCategoryChange}>
                <MenuItem value="">Tumu</MenuItem>
                <MenuItem value="maintenance">Mekanik</MenuItem>
                <MenuItem value="repair">Elektrik</MenuItem>
                <MenuItem value="installation">Yazilim</MenuItem>
                <MenuItem value="inspection">Hidrolik</MenuItem>
                <MenuItem value="inspection">pnomatik</MenuItem>
            </Select>
</FormControl>
            </Box>
        </Paper>
    );
}
export default FilterPanel;