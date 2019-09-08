import React from 'react';
import PropTypes from 'prop-types';

import Node from './node/Node';

class Highlight extends React.Component {
  
    shouldComponentUpdate(newProps) {
        return (newProps.ranges.length !== this.props.ranges.length)
            || (newProps.text !== this.props.text)
            || (newProps.enabled !== this.props.enabled);
    }

    getRange(charIndex) {
        const { ranges } = this.props;
        return (ranges != null) && ranges.find(range =>
            (charIndex >= range.start) && (charIndex <= range.end));
    }

    getLetterNode(index, range) {
        return (
            <Node range={ range }
                charIndex={ index }
                key={ `${this.props.id}-${index}` }
                highlightStyle={ range? range.style : this.props.highlightStyle }>
                { this.props.text[index] }
            </Node>
        );
    }

    rangeRenderer(letterGroup, range, textCharIndex) {
        const { rangeRenderer } = this.props;
        return rangeRenderer? rangeRenderer(letterGroup, range, textCharIndex) : letterGroup;
    }

    getNode(index, range, text) {
        return this.getLetterNode(index, range);
    }

    getRanges() {
        const { text } = this.props;
        
        const newText = [];

        for (let i = 0; i < text.length; i++) {
            const range = this.getRange(i);
            const node = this.getNode(i, range, text);

            if (range == null) {
                newText.push(node);
            }
            else {
                const letterGroup = [ node ];

                // For all the characters in the highlighted range
                let j;
                for(j = i + 1; j <= range.end; j++) {
                    letterGroup.push(this.getLetterNode(j, range));
                }

                i = j - 1;

                newText.push(this.rangeRenderer(letterGroup, range, i));
            }
        }
        
        return newText;
    }

    render() {
        const newText = this.getRanges();
        
        const { style } = this.props;
        return (
            <div style={ style }>
                { newText }
            </div>
        );
    }
}

Highlight.propTypes = {
    ranges: PropTypes.array,
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    text: PropTypes.string,
    enabled: PropTypes.bool,
    highlightStyle: PropTypes.object,
    style: PropTypes.object,
    rangeRenderer: PropTypes.func
};

export default Highlight;