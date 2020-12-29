import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Как разместить новость на сайте?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Чтобы разместить новости на сайте, обратитесь в раздел контакты и свяжитесь с нами, размещение возможно как на договорной основе так и на бесплатной
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Кто мы?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Мы команда энтузиастов собирающая новости о бизнесе и франчайзинге, на нашем сайте всегда самая актуальная информация и актуальные новости
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>У Вас расположены ненастоящие новости, либо новости задевают меня, что делать?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Обратитесь по контактам указанным на сайте, мы обязательно разберём данную ситуацию
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}