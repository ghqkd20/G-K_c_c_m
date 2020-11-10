import { render } from '@testing-library/react';
import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Problem extends React.Component{
    render(){
        return(
            <TableRow>
                <TableCell>{this.props.number}</TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.professor}</TableCell>
                <TableCell>{this.props.try}</TableCell>
            </TableRow>
        );
    }
}


export default Problem;