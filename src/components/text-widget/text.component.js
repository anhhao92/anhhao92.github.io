import React from 'react'
export default class TextWidget extends React.PureComponent {
    render() {
        return(
            <div>
                {this.props.configs.text}
            </div>
        )
    }
}
