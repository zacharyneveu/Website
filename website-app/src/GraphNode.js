import React from 'react';

/** @brief Class to draw a circular node on a cluser graph
 * @param color The color of the circle
 * @param size The size of the circle
 */
export class GraphNode extends React.Component {
    render() {
        const nodeStyle = {
            backgroundColor: this.props.color,
            height: this.props.size,
            width: this.props.size,
            borderRadius: this.props.size
        }
        return(
            <div style={nodeStyle}></div>
        );
    }
}