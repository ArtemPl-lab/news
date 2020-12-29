import { Container } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
import { useEffect, useState } from "react";
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
let setR = () => {};
const columns = [
  { field: 'id', headerName: 'ID', width: 130 },
  { field: 'newsTitle', headerName: 'Заголовок', width: 200 },
  { field: 'newsContent', headerName: 'Контент', width: 200 },
  { field: 'added_at', headerName: 'Дата создания/выгрузки', width: 200 },
  { field: 'resourceUrl', headerName: 'Ресурс', width: 300 },
];
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1.5),
    },
  },
}));

function CustomToolbar(props) {
  const { api } = props;
  console.log();
  const classes = useStyles();
  const handleDelete = async () => {
    const posts = api.current.getSelectedRows();
    posts.forEach(post => {
      console.log(post.id);
    });
  }
  const handleUnpin = async () => {
    const posts = api.current.getSelectedRows();
    let allPosts = api.current.getRowModels();
    allPosts = allPosts.filter(post => post.id && !posts.some(p => p.id === post.id));
    allPosts = allPosts.map(post => post.data);
    setR(allPosts);
    posts.forEach(post => {
      fetch('/api/news/pin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
          id: post.id
        })
      });
    });
  }
  return (   
    <div className={classes.root}>
      <Chip
        icon={<DeleteSweepIcon />}
        label="Удалить выбранные"
        clickable
        color="secondary"
        onClick={handleDelete}
      />
      <Chip
        icon={<HighlightOffIcon />}
        label="Открепить выбранные"
        clickable
        color="primary"
        onClick={handleUnpin}
      />
    </div>
  )
}
export default  () => {
    const [rows, setRows] = useState([]);
    setR = setRows;
    const [selected, setSelected] = useState([]);
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
    const onSelect = (props) => {
      const { rowIds } = props;
      setSelected(rowIds);
    }
    return(
        <Container maxWidth="xl" style={{height: "650px", marginTop: "30px"}}>
            <DataGrid rows={rows} 
            columns={columns}
            pageSize={10} 
            checkboxSelection 
            components={{
              header: (props)=> (selected.length ? <CustomToolbar {...props} /> : ()=>{})
            }}
            onSelectionChange={onSelect}/>
        </Container>
    );
}