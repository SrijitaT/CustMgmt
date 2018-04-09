import React from 'react';
import PropTypes from 'prop-types';
import { omit } from 'lodash';

const DESKTOP_BREAKPOINT = 575;

class Table extends React.Component {
    state = { index: 0 };
    handlePrev = e => {
        e.preventDefault();
        if (this.state.index > 0) {
            this.setState({ index: this.state.index - 1 });
        }
    };
    handleNext = e => {
        e.preventDefault();
        if (this.state.index < this.props.body.rows.lenght) {
            this.setState({ index: this.state.index + 1 })
        }
    };
    updateDimensions = () => this.setState({ width: typeof window !== 'undefined' ? window.innerWidth || document.innerWidth : 1024 });
    componentWillMount() {
        this.updateDimensions();
    }
    componentDidMount() {
        typeof window !== 'undefined' && window.addEventListener('resize', this.updateDimensions);
    }
    componentWillUnmount() {
        typeof window !== 'undefined' && window.removeEventListener('resize', this.updateDimensions);
    }
    renderDesktop = () => {
        const props = this.props;
        return (
            <table {...omit(props, ['head', 'body', 'lables'])}>
                {props.head &&
                    <thead {...omit(props.head, 'cols', 'lables')}>
                        <tr>
                            {props.head.cols.map((col, idx) => <th key={`head-col-${idx}`} {...omit(col, 'content')}>{col.content}</th>)}
                        </tr>
                    </thead>
                }
                {props.body &&
                    <tbody {...omit(props.body, 'rows')}>
                        {props.body.rows.map((row, idx) => (<tr {...omit(row, 'cols')} key={`tbody-rows-${idx}`}>
                            {row.cols.map((col, i) => <td {...omit(col, 'content')} key={`tobody-row-${idx}-col-${i}`}>{col.content}</td>)}
                        </tr>))}
                    </tbody>
                }
            </table>
        );
    } 
    renderMobile = () => {
        const props = this.props;
        return (
            <React.Fragment>
                <table {...omit(this.props, ['head', 'body', 'lables'])}>
                    {props.head &&
                        <thead>
                            <tr>
                                {props.lables.map((col, idx) => <th key={`head-col-${idx}`} {...omit(col, 'content')}>{col.content}</th>)}
                            </tr>
                        </thead>
                    }
                    {this.props.body &&
                        <tbody {...omit(this.props.body, 'rows')}>
                            {props.head.cols.map((row, idx) => (<tr {...omit(row, 'content')} key={`tbody-rows-${idx}`}>
                                <td {...omit(row, 'content')} style={{textAlign: 'left !important'}}>{row.content}</td>
                                <td {...omit(props.body.rows[this.state.index].cols[idx], 'content')} style={{textAlign: 'right !important'}}>{props.body.rows[this.state.index].cols[idx].content}</td>
                            </tr>))}
                        </tbody>
                    }
                </table>
                <div className="table-page row no-gutters">
                    <div className="col text-center py-2"><a onClick={e => this.handlePrev(e)} tabIndex="1">&lt; Previous</a></div>
                    <div className="col text-center py-2">{this.state.index + 1} of {this.props.body.rows.length}</div>
                    <div className="col text-center py-2"><a onClick={e => this.handleNext()} tabIndex="1">Next &gt;</a></div>
                </div>
            </React.Fragment>
        )
    }

    render() {
        return this.state.width > DESKTOP_BREAKPOINT ? this.renderDesktop() : this.renderMobile();
    }
}

Table.propTypes = {
    head: PropTypes.shape({
        cols: PropTypes.arrayOf(PropTypes.shape({
            content: PropTypes.any,
        })),
    }),
    body: PropTypes.shape({
        rows: PropTypes.arrayOf(PropTypes.shape({
            cols: PropTypes.arrayOf(PropTypes.shape({
                content: PropTypes.any,
            })),
        })),
    }).isRequired
};


export default Table;
