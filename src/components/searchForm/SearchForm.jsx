import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';

const CssTextField = withStyles({
    root: {
        width: "50%",
      '& label.Mui-focused': {
        color: '#ccdb37',
      },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#ccdb37',
            },
            '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#ccdb37',
            },
            '&:hover fieldset': {
                borderColor: '#ccdb37',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#ccdb37',
            },
        },
    },
  })(TextField);

const SearchForm = (props) => {
    const [queryToSend, setQueryToSend] = useState("");

    const handleSubmit = (event) => {
        props.setSearchQueryFromForm(queryToSend);
        event.preventDefault();
        
    }

    return (
        <React.Fragment>
            <form noValidate autoComplete="off" onSubmit={e => { handleSubmit(e) }} >
                <CssTextField id="outlined-basic" label="Search for a job" variant="outlined" onChange={e => setQueryToSend(e.target.value)} />
            </form>
            
        </React.Fragment>
    );
}

export default SearchForm;