import { Container, TextField, Typography  } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { useState } from "react";
export default  () => {
    const [formValues, setFormValues] = useState({
        siteTitle: '',
        sitemapLink: '',
        regularTitle: '',
        regularContent: '',
        regularImg: '',
        checkingPeriod: ''
    });
    const handleChange = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }
    const addResourse = (e) =>{
        e.preventDefault();
        fetch('/api/resources/addResource', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(formValues)
          });
    }
    return(
        <Container maxWidth="xl">
            <Typography>
            <h1>Добавление ресурса-источника</h1>
            </Typography>
            <form onSubmit={addResourse}>
                <TextField label="Наименование ресурса" variant="outlined" name="siteTitle" className="add-title-field" value={formValues.siteTitle} onChange={handleChange}/>
                <TextField label="Ссылка на карту ресурса" variant="outlined" name="sitemapLink" className="add-title-field" value={formValues.sitemapLink} onChange={handleChange}/>
                <TextField label="Селектор заголовка" variant="outlined" name="regularTitle" className="add-title-field" value={formValues.regularTitle} onChange={handleChange}/>
                <TextField label="Селектор контента" variant="outlined" name="regularContent" className="add-title-field" value={formValues.regularContent} onChange={handleChange}/>
                <TextField label="Селектор миниатюры" variant="outlined" name="regularImg" className="add-title-field" value={formValues.regularImg} onChange={handleChange}/>
                <TextField label="Период обхода в минутахх" variant="outlined" name="checkingPeriod" className="add-title-field" value={formValues.checkingPeriod} onChange={handleChange}/>
                <Button variant="contained" color="primary" type="submit">
                    Добавить
                </Button>
            </form>
        </Container>
    );
}