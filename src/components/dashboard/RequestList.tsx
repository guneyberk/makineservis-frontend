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
    Tab,

} from '@mui/material';

interface Request {
    id:string;
    talepNo:string;
    baslik:string;
    musteriTedarikci:string;
    kategori:string;
    durum:string;
    oncelik:string;
    atanan:string;  
    planlananTarih:string;
    olusturmaTarihi:string;
    
}

const mockRequest: Request[] = [
        {
        id: '1',
        talepNo: 'T-001',
        baslik: 'CNC Torna Bakımı',
        musteriTedarikci: 'ABC Makine Ltd.',
        kategori: 'Bakım',
        durum: 'Açık',
        oncelik: 'Yüksek',
        atanan: 'Ahmet Yılmaz',
        planlananTarih: '2025-02-15',
        olusturmaTarihi: '2025-01-28',
    },
    {
        id: '2',
        talepNo: 'T-002',
        baslik: 'Hidrolik Sistem Arızası',
        musteriTedarikci: 'XYZ Sanayi A.Ş.',
        kategori: 'Arıza',
        durum: 'İşlemde',
        oncelik: 'Acil',
        atanan: 'Mehmet Demir',
        planlananTarih: '2025-01-30',
        olusturmaTarihi: '2025-01-25',
    },
    {
        id: '3',
        talepNo: 'T-003',
        baslik: 'Yazılım Güncelleme',
        musteriTedarikci: 'Tech Solutions',
        kategori: 'Yazılım',
        durum: 'Beklemede',
        oncelik: 'Normal',
        atanan: 'Ayşe Kaya',
        planlananTarih: '2025-02-20',
        olusturmaTarihi: '2025-01-20',
    },
    {
        id: '4',
        talepNo: 'T-004',
        baslik: 'Pres Kalıp Değişimi',
        musteriTedarikci: 'Metal İşleme A.Ş.',
        kategori: 'Bakım',
        durum: 'Tamamlandı',
        oncelik: 'Düşük',
        atanan: 'Bakım Ekibi',
        planlananTarih: '2025-01-22',
        olusturmaTarihi: '2025-01-15',
    },
];


function RequestList(){
    return(
        <Paper sx={{padding:3,marginTop:3}}>
            <Typography variant="h6" sx={{marginBottom:2}}>
                Talep Listesi
            </Typography>

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Table No</TableCell>
                            <TableCell>Baslik</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableRow>T-001</TableRow>
                            <TableRow>Test Talep</TableRow>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>


        </Paper>
    );
}