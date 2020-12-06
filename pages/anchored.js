import { Container } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
import { useEffect, useState } from "react";

const columns = [
  { field: 'id', headerName: 'ID', width: 130 },
  { field: 'newsTitle', headerName: 'Заголовок', width: 200 },
  { field: 'newsContent', headerName: 'Контент', width: 200 },
  { field: 'added_at', headerName: 'Дата создания/выгрузки', width: 200 },
  { field: 'resourceUrl', headerName: 'Ресурс', width: 300 },
];
export default  () => {
    const [rows, setRows] = useState([]);
    useEffect(async ()=>{
      const res = await fetch('http://localhost:3000/api/news/pinned-news',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
      });
      let data = await res.json();
      data = data.map(row=>({...row, id: row._id}));
      console.log(data);
      setRows(rows=>([...rows, ...data]));
    },[]);
    return(
        <Container maxWidth="xl" style={{height: "650px", marginTop: "30px"}}>
            <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection />
        </Container>
    );
}