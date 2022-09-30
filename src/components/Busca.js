import React, { Component } from 'react'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'



export default class Busca extends Component {

    state = {
        termoBusca: ''
    }

    onTermoAlterado = (evento) => {
        console.log(evento.target.value)
        this.setState({temoBusca: evento.target.value})
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onBuscaRealizada(this.state.termoBusca)
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className='flex flex-column'>
                <span className='p-input-icon-right w-full'>
                    <i className='pi pi-search' ></i>
                    <InputText
                        value={this.state.termoBusca}
                        className='w-full'
                        onChange={this.onTermoAlterado}
                        placeholder={this.props.dica}
                    />
                </span>
                <Button 
                    label='OK'
                    className='p-button-outlined mt-2'
                />
                </div>
            </form>
        )
  }
}


Busca.defaultProps = {
    dica: 'Digite algo...'
}