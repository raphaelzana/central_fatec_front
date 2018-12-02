import React, { Component } from 'react'

import { Pagination } from 'react-bootstrap'
const { Item } = Pagination

export default class Paginator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: 1
        }
    }
    
    changePage (page) {
        this.setState({ active: page })
    }

    renderItens() {
        return this.props.itens.map(item => (
            <Item key={item} active={this.state.active === item} onClick={() => this.changePage(item)}>{item}</Item>
        ))
    }
    
    render() {
        return (
            <Pagination>
                {this.renderItens()}
            </Pagination>
        )
    }
}
