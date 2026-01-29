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
        TextField,
} from '@mui/material';

function FilterPanel(){
    const [status, setStatus] = useState<string[]>([]);
    const [requestType, setRequestType] = useState('');
    const [category, setCategory]=useState('');
    const [direction,setdirection] = useState('');
    const [startDate,setStartDate] = useState('');
    const [endDate,setEndDate] = useState('');
    const [assignedUser,setAssignedUser] = useState('');
    

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
    const handleStartDateChange =(event:any)=>{
        setStartDate(event.target.value);
    };
    const handleEndDateChange =(event:any)=>{
        setEndDate(event.target.value);
    };
    const handleDirectionChange =(event:any)=>{
        setdirection(event.target.value);
    };
    const handleAssignedUserChange =(event:any)=>{
        setAssignedUser(event.target.value);
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
<FormControl sx={{minWidth:200}}>
    <InputLabel>Islem Yonu</InputLabel>
    <Select value={direction}
    label = "Islem Yonu"
    onChange={handleDirectionChange}>
        
    <MenuItem value="">Tumu</MenuItem>
    <MenuItem value="internal">Internal</MenuItem>
    <MenuItem value="external">Harici</MenuItem>
    <MenuItem value="outsource">Diskaynak</MenuItem>

    </Select>

</FormControl>
<TextField label="Baslangic tarihi"
                    type="date"
                    value={startDate}
                    onChange={handleStartDateChange}
                    sx={{minWidth:200}}
                    slotProps={{inputLabel:{shrink:true}}}> 

                    </TextField>
                    <TextField label="Bitis tarihi"
                    type="date"
                    value={endDate}
                    onChange={handleEndDateChange}
                    sx={{minWidth:200}}
                    slotProps={{inputLabel:{shrink:true}}}> 

                    </TextField>
<FormControl sx={{minWidth:200}}>
    <InputLabel>Atanan Kullanici/Grup</InputLabel>
    <Select value={assignedUser}
    label={'AtananKullanici/Grup'}
    onChange={handleAssignedUserChange}
    >    
    </Select>
    <MenuItem value="">Tumu</MenuItem>
    <MenuItem value="user1">ariz ekibi</MenuItem>
    <MenuItem value="user2">Ahmet</MenuItem>
    <MenuItem value="user3">mehmet</MenuItem>
    <MenuItem value="group1">ayse</MenuItem>
    <MenuItem value="group2">bakim ekiibi</MenuItem>


</FormControl>
            </Box>
        </Paper>
    );
}
export default FilterPanel;