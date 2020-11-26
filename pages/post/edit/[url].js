import { observer } from 'mobx-react';
import { useStore } from "mobx-store-provider";
import TextField from '@material-ui/core/TextField';
const EditPost  = () => {
    const { postsStore } = useStore();
    return (
        <form noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </form>
    );
}

export default observer(EditPost);