import React, { useState } from 'react';
import '../styles/Login.css';
import { Divider, Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import api from '../services/api'

const Sign=()=> {
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const novoUsuario = {
        name:name,
        email:email,
        password:password
    }
    
    async function cadastrarUsuario () {
        try {
            await api.post('admin/register', novoUsuario)
            window.location.href="/login"
        } catch (error) {
            alert('Erro, tente novamente')
        }    
    }

    return (
        <div>
            <div className="icon">
                <div className="icon_class"></div>
                <div className="icon_class">
                    <PersonAddIcon fontSize="large"/>
                </div>
                <div className="text">Cadastro</div>
            </div>
            <p></p>
            <div className="row m-2">
                <TextField value={name} onChange={e => setName(e.target.value)} id="completeName" className="p-2" type="text" variant="outlined" label="Entre com seu nome completo" fullWidth/>
                <p></p>
                <TextField value={email} onChange={e => setEmail(e.target.value)} id="email" className="p-2" type="text" variant="outlined" label="Entre com seu Email" fullWidth/>
                <p></p>
                <TextField value={password} onChange={e => setPassword(e.target.value)} id="password" className="p-2" type="text" variant="outlined" label="Entre com sua senha" fullWidth/>
                <p></p>
            <FormControlLabel
                control={
                    <Checkbox
                        icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                        CheckBoxIcon={<CheckBoxIcon fontSize="small" />}
                        name="checkedI"
                    />
                }
                label={
                <div>
                    <Link><span>Aceito os Termos de Serviço </span></Link>
                </div>
                }
            />

            <Button onClick={cadastrarUsuario} variant="contained" color="primary" fullWidth>Cadastrar</Button>
            {/* No clique do botão adicionar o evento que envia o cadastro */}

            </div>
            <Divider variant="middle"/>
            <p className="text-center">
                <Link to="/login" className="text-black-50">
                    <h5>Voce já tem uma conta?</h5>
                </Link>
            </p>
        </div>

    )
}

export default Sign