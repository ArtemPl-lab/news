import { Container, Typography } from "@material-ui/core";
export default  () => {

    return(
        <Container>
            <Typography>
                <h1>Контакты</h1>
                <p>Уважаемый гость, Вы можете связаться с нами по электронной почте по всем вопросам:<a href="mailto:franch-bizness@yandex.ru">franch-bizness@yandex.ru</a></p>
            </Typography> 
        </Container>
    );
}