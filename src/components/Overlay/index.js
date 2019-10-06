import React from 'react'
import { OverlayStyles }  from './styles'

export default class Overlay extends React.Component {
    render(){
        return (
            <div style={OverlayStyles}>
                {this.props.children}
            </div>
        )
    }
}