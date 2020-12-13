import { observer } from 'mobx-react';
import { useStore } from "mobx-store-provider";
import TextField from '@material-ui/core/TextField';
import { useRouter } from 'next/router';
import { Editor } from '@tinymce/tinymce-react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useEffect, useState } from 'react';
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));
const EditPost  = () => {
    const { postsStore } = useStore();
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const router = useRouter();
    const [formValues, setFormValues] = useState({
        newsTitle: '',
        newsContent: '',
        tabTitle: '',
        tabDesc: '',
        longDesc: '',
        img: ''
    });
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    useEffect(async ()=>{
        const response = await fetch('/api/news/page', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                id: router.query.url
            })
        });
        const postData = await response.json();
        setFormValues({...postData});
    },[router.query.url]);
    const onChangeHandler = e => {
        setFormValues(values => ({
            ...values,
            [e.target.name]: e.target.value
        }));
    }
    const onSubmit = async e => {
        e.preventDefault();
        await fetch('/api/news/edit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(formValues)
        });
        // router.push(`/postPage/${router.query.url}`);
        console.log(formValues);
    }
    const handleEditorChange = (e) => {
        setFormValues(data => ({
          ...data,
          newsContent: e.target.getContent()
        }));
      }
    return (
        <form className={classes.root} onSubmit={onSubmit}>
        <AppBar position="static">
            <Tabs value={value} onChange={handleChange} 
            aria-label="simple tabs example"          
            variant="scrollable"
            scrollButtons="auto">
            <Tab label="Основная информация" {...a11yProps(0)} />
            <Tab label="Для поисковиков" {...a11yProps(1)} />
            <Tab label="Дополнительно" {...a11yProps(2)} />
            </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
            <TextField 
            id="outlined-basic" 
            label="Название" 
            variant="outlined" 
            className="add-title-field" 
            onChange={onChangeHandler}
            name="newsTitle"
            value={formValues.newsTitle}/>
            <Editor
                initialValue="<p>Initial content</p>"
                init={{
                height: 500,
                menubar: false,
                plugins: [
                    'advlist autolink lists link image', 
                    'charmap print preview anchor help',
                    'searchreplace visualblocks code',
                    'insertdatetime media table paste wordcount'
                ],
                toolbar:
                    'undo redo | formatselect | bold italic | \
                    alignleft aligncenter alignright | \
                    bullist numlist outdent indent | help'
                }}
                onChange={handleEditorChange}
                apiKey="llye9u61s05d1t8wpej0br4kyuqomj0ioj0g97bqkdnqxszo"
                value={formValues.newsContent}
            />
            <Button variant="contained" color="primary" className="btn-sub-add"  type="submit">
                Опубликовать
            </Button>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TextField 
            id="outlined-basic" 
            label="Заголовок в поисковике(title)" 
            variant="outlined" 
            className="add-title-field" 
            onChange={onChangeHandler}
            name="tabTitle"
            value={formValues.tabTitle}/>
            <TextField
              id="outlined-multiline-static"
              label="Описание в поисковике(meta description)"
              multiline
              variant="outlined"
              onChange={onChangeHandler}
              name="tabDesc"
              value={formValues.tabDesc}
              fullWidth
              rowsMin={10}
            />
            <Button variant="contained" color="primary" className="btn-sub-add"  type="submit">
                Опубликовать
            </Button>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <TextField 
            id="outlined-basic" 
            label="Заголовок в поисковике(title)" 
            variant="outlined" 
            className="add-title-field" 
            onChange={onChangeHandler}
            name="img"
            value={formValues.img}/>
            <Button variant="contained" color="primary" className="btn-sub-add" type="submit">
                Опубликовать
            </Button>
        </TabPanel>
    </form>
    );
}

export default observer(EditPost);