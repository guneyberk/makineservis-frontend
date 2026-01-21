import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

// Import icons
import AssignmentIcon from '@mui/icons-material/Assignment';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

// Import our component
import KPICard from './components/dashboard/KPICard';

function App() {
  return (
    <Box sx={{ padding: 4 }}>
      
      {/* Page Title */}
      <Typography variant="h4" sx={{ marginBottom: 3 }}>
        Dashboard
      </Typography>

      {/* KPI Cards Grid */}
      <Grid container spacing={3}>
        
        {/* Card 1: Open Requests */}
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <KPICard
            title="Açık Talep Sayısı"
            value={24}
            icon={<AssignmentIcon sx={{ color: 'white', fontSize: 40 }} />}
            color="#1976d2"
          />
        </Grid>

        {/* Card 2: Pending Offers */}
       <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <KPICard
            title="Bekleyen Teklif"
            value={8}
            icon={<HourglassEmptyIcon sx={{ color: 'white', fontSize: 40 }} />}
            color="#ff9800"
          />
        </Grid>

        {/* Card 3: Completed This Month */}
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <KPICard
            title="Bu Ay Tamamlanan"
            value={45}
            icon={<CheckCircleIcon sx={{ color: 'white', fontSize: 40 }} />}
            color="#4caf50"
          />
        </Grid>

        {/* Card 4: Average Resolution Time */}
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <KPICard
            title="Ort. Çözüm Süresi"
            value={2.5}
            icon={<AccessTimeIcon sx={{ color: 'white', fontSize: 40 }} />}
            color="#9c27b0"
          />
        </Grid>

        {/* Card 5: Total Cost */}
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <KPICard
            title="Toplam Maliyet"
            value={125000}
            icon={<AttachMoneyIcon sx={{ color: 'white', fontSize: 40 }} />}
            color="#f44336"
          />
        </Grid>

      </Grid>
    </Box>
  );
}

export default App;
