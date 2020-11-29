import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Editor } from '@tinymce/tinymce-react';
import Button from '@material-ui/core/Button';
import { useStore } from 'mobx-store-provider';
import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react'
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

export default observer(function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { user } = useStore();
  const router = useRouter();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleEditorChange = (e) => {
    console.log(
      'Content was updated:',
      e.target.getContent()
    );
  }
  useEffect(()=>{
    if(!user.userToken) router.push('/');
  }, [user.userToken]);
  return (
    <div className={classes.root}>
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
            <TextField id="outlined-basic" label="Название" variant="outlined" className="add-title-field"/>
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
            />
            <Button variant="contained" color="primary" className="btn-sub-add">
                Опубликовать
            </Button>
        </TabPanel>
        <TabPanel value={value} index={1}>
            Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
            Item Three
        </TabPanel>
    </div>
  );
})