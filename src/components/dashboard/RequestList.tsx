import React, {useState} from "react";

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
  Chip,
  IconButton,
  Checkbox,
} from "@mui/material";

import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface Request {
  id: string;
  talepNo: string;
  baslik: string;
  musteriTedarikci: string;
  kategori: string;
  durum: string;
  oncelik: string;
  atanan: string;
  planlananTarih: string;
  olusturmaTarihi: string;
}

const mockRequest: Request[] = [
  {
    id: "1",
    talepNo: "T-001",
    baslik: "CNC Torna Bakımı",
    musteriTedarikci: "ABC Makine Ltd.",
    kategori: "Bakım",
    durum: "Açık",
    oncelik: "Yüksek",
    atanan: "Ahmet Yılmaz",
    planlananTarih: "2025-02-15",
    olusturmaTarihi: "2025-01-28",
  },
  {
    id: "2",
    talepNo: "T-002",
    baslik: "Hidrolik Sistem Arızası",
    musteriTedarikci: "XYZ Sanayi A.Ş.",
    kategori: "Arıza",
    durum: "İşlemde",
    oncelik: "Acil",
    atanan: "Mehmet Demir",
    planlananTarih: "2025-01-30",
    olusturmaTarihi: "2025-01-25",
  },
  {
    id: "3",
    talepNo: "T-003",
    baslik: "Yazılım Güncelleme",
    musteriTedarikci: "Tech Solutions",
    kategori: "Yazılım",
    durum: "Beklemede",
    oncelik: "Normal",
    atanan: "Ayşe Kaya",
    planlananTarih: "2025-02-20",
    olusturmaTarihi: "2025-01-20",
  },
  {
    id: "4",
    talepNo: "T-004",
    baslik: "Pres Kalıp Değişimi",
    musteriTedarikci: "Metal İşleme A.Ş.",
    kategori: "Bakım",
    durum: "Tamamlandı",
    oncelik: "Düşük",
    atanan: "Bakım Ekibi",
    planlananTarih: "2025-01-22",
    olusturmaTarihi: "2025-01-15",
  },
];

const getStatussColor = (
  durum: string,
): "success" | "warning" | "info" | "error" | "default" => {
  switch (durum) {
    case "Acik":
      return "info";
    case "Islemde":
      return "warning";
    case "Beklemede":
      return "default";
    case "Tamamlandi":
      return "success";
    case "Iptal Edildi":
      return "error";
    default:
      return "default";
  }
};

function RequestList() {
  const [selected,setSelected] = useState<string[]>([]);

  const handleSelectAll=(event:React.ChangeEvent<HTMLInputElement>)=>{
    if(event.target.checked){
      const allIds=mockRequest.map((req)=>req.id);
      setSelected(allIds);
    }
    else{
      setSelected([]);
    }
  };

  const handleSelectOne = (id:string)=>{
    const selectedIndex = selected.indexOf(id);
    let newSelected:string[]=[];

    if(selectedIndex===-1){
      newSelected =[...selected,id];
    } else{
      newSelected = selected.filter((selectedId)=>selectedId!==id);
    }
    setSelected(newSelected);
  };
  const isSelected =(id:string)=>selected.indexOf(id)!==-1;

  return (
    <Paper sx={{ padding: 3, marginTop: 3 }}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Talep Listesi
      </Typography>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
                            <TableCell padding="checkbox">
                <Checkbox indeterminate={selected.length>0&&selected.length<mockRequest.length}
                checked={mockRequest.length>0&&selected.length===mockRequest.length}
                onChange={handleSelectAll}></Checkbox>
              </TableCell>
              <TableCell>Talep No</TableCell>
              <TableCell>Başlık</TableCell>
              <TableCell>Müşteri/Tedarikçi</TableCell>
              <TableCell>Kategori</TableCell>
              <TableCell>Durum</TableCell>
              <TableCell>Öncelik</TableCell>
              <TableCell>Atanan</TableCell>
              <TableCell>Planlanan Tarih</TableCell>
              <TableCell>Oluşturma Tarihi</TableCell>
              <TableCell>Aksiyonlar</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {mockRequest.map((request) => (
              <TableRow key={request.id}>
                <TableCell>{request.talepNo}</TableCell>
                <TableCell>{request.baslik}</TableCell>
                <TableCell>{request.musteriTedarikci}</TableCell>
                <TableCell>{request.kategori}</TableCell>
                <TableCell><Chip label={request.durum}
                color={getStatussColor(request.durum)}
                size="small"></Chip></TableCell>
                <TableCell>{request.oncelik}</TableCell>
                <TableCell>{request.atanan}</TableCell>
                <TableCell>{request.planlananTarih}</TableCell>
                <TableCell>{request.olusturmaTarihi}</TableCell>
                <TableCell>
    <IconButton 
        size="small" 
        color="primary"
        onClick={() => console.log('Görüntüle:', request.id)}
    >
        <VisibilityIcon />
    </IconButton>
    <IconButton 
        size="small" 
        color="info"
        onClick={() => console.log('Düzenle:', request.id)}
    >
        <EditIcon />
    </IconButton>
    <IconButton 
        size="small" 
        color="error"
        onClick={() => console.log('Sil:', request.id)}
    >
        <DeleteIcon />
    </IconButton>
</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

