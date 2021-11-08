import React from 'react';
import '../styles/Login.css';
import { Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import PersonIcon from '@material-ui/icons/Person';

const Login=()=> {
    return (
        <div>
            <div className="icon">
                <div className="icon_class"></div>
                <div className="icon_class">
                    <PersonIcon fontSize="large"/>
                </div>
                <div className="text">Login</div>
            </div>
            <p></p>
            <div className="row m-2">
                <TextField id="email" className="p-2" type="text" variant="outlined" label="Entre com seu Email" fullWidth/>
                <p></p>
                <TextField id="password" className="p-2" type="text" variant="outlined" label="Entre com sua senha" fullWidth/>
                <p></p>
            <FormControlLabel
                control={
                    <Checkbox
                        icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                        CheckBoxIcon={<CheckBoxIcon fontSize="small" />}
                        name="checkedI"
                    />
                }
                label="Lembrar"
            />

            <Button variant="contained" color="primary" fullWidth>Entrar</Button>
            <p></p>
            <Link to="/sign" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="" fullWidth>Criar uma conta</Button>
            </Link>
            </div>
        </div>

    )
}

export default Login