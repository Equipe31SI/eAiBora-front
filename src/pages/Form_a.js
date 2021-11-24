import React, { useState } from 'react';
import '../styles/Login.css';
import { Divider, Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import api from '../services/api'

const Form=()=> {
const [title, setTitle] = useState('')
const [date, setDate] = useState('')
const [description, setDescription] = useState('')
const [hour, setHour] = useState('')
const [local, setLocal] = useState('')
const [price, setPrice] = useState('')

const novoEvento = {
        title:title,
        date:date,
        description:description,
        hour:hour,
        local:local,
        price:price
    }
    
    async function criarEvento () {
        try {
            await api.post('/register', novoEvento) //info na api (estrutura)
        } catch (error) {
            alert('Erro, tente novamente')
        }    
    }

    return (
        <div>
            <div className="icon">
                <div className="text">Criar Evento</div>
            </div>
            <p></p>
            <div className="row m-2">
                <TextField value={title} onChange={e => setTitle(e.target.value)} id="tituloEvento" className="p-2" type="text" variant="outlined" label="Título do Evento" fullWidth/>
                <p></p>
                <TextField value={date} onChange={e => setDate(e.target.value)} id="dataEvento" className="p-2" type="text" variant="outlined" label="Data do Evento" /*fullWidth*//>
                <p></p>
                <TextField value={hour} onChange={e => setHour(e.target.value)} id="horarioEvento" className="p-2" type="text" variant="outlined" label="Horário" /*fullWidth*//>
                <p></p>
                <TextField value={local} onChange={e => setLocal(e.target.value)} id="localEvento" className="p-2" type="text" variant="outlined" label="Local do evento" fullWidth/>
                <p></p>
                <TextField value={price} onChange={e => setPrice(e.target.value)} id="precoEvento" className="p-2" type="text" variant="outlined" label="Valor do ingresso" /*fullWidth*//>
                <p></p>
                <TextField value={description} onChange={e => setDescription(e.target.value)} id="descricaoEvento" label="Descreva o evento" multiline rows={3} fullWidth/>
                <p></p>

            <Button onClick={criarEvento} variant="contained" color="primary" fullWidth>Criar evento</Button>
            {/* No clique do botão adicionar o evento que envia o cadastro */}

            </div>
            <Divider variant="middle"/>
            <p className="text-center">
                <Link to="/menu" className="text-black-50">
                    <h5>Voltar para Eventos</h5>
                </Link>
            </p>
        </div>

    )
}

export default Form