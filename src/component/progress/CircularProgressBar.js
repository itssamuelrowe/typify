import React from 'react';
import './circular-progress-bar.css';

class CircularProgressBar extends React.Component {
    render() {
        // Size of the enclosing square
        const sqaureSize = this.props.sqaureSize;
        // SVG centers the stroke width on the radius, subtract out so circle fits in square
        const radius = (this.props.sqaureSize - this.props.strokeWidth) / 2;
        // Enclose cicle in a circumscribing square
        const viewBox = `0 0 ${sqaureSize} ${sqaureSize}`;
        // Arc length at 100% coverage is the circle circumference
        const dashArray = radius * Math.PI * 2;
        // Scale 100% coverage overlay with the actual percent
        const dashOffset = dashArray - dashArray * this.props.percentage / 100;

        return (
            <div>
                <svg
                    width={this.props.sqaureSize}
                    height={this.props.sqaureSize}
                    viewBox={viewBox}>
                    <circle
                        className="circle-background"
                        cx={this.props.sqaureSize / 2}
                        cy={this.props.sqaureSize / 2}
                        r={radius}
                        strokeWidth={`${this.props.strokeWidth}px`}
                    />
                    <circle
                        className="circle-progress"
                        cx={this.props.sqaureSize / 2}
                        cy={this.props.sqaureSize / 2}
                        r={radius}
                        strokeWidth={`${this.props.strokeWidth}px`}
                        // Start progress marker at 12 O'Clock
                        transform={`rotate(-90 ${this.props.sqaureSize / 2} ${this.props.sqaureSize / 2})`}
                        style={{
                          strokeDasharray: dashArray,
                          strokeDashoffset: dashOffset
                        }}
                    />
                    <text
                        className="circle-text"
                        x="50%"
                        y="50%"
                        dy=".3em"
                        textAnchor="middle">
                        { this.props.text }
                    </text>
                </svg>
            </div>
        );
    }
}

CircularProgressBar.defaultProps = {
    sqaureSize: 200,
    percentage: 25,
    strokeWidth: 10,
    text: 'Unknown'
};

export default CircularProgressBar;