import {MDBBtn} from "mdbreact";
import React from 'react';
import { Link } from 'react-router-dom';

const buttonStyle = {
    borderRadius: '50px'
}

const LeavesListChild = ({users, onDeleteClick}) => {

    return (
        <div  style={{overflowY: 'auto'}} >
        <table className={'table'}>
            <thead>
            <tr>
                <th/>
                <th scope={'col'}>Name</th>
                <th scope={'col'}>Company</th>
                <th scope={'col'}>Email</th>
                <th scope={'col'}>Phone</th>
                <th scope={'col'}>Website</th>
                <th scope={'col'}/>
            </tr>
            </thead>
            <tbody>
            {users.map(user => (
                    <tr key={user.id}>
                        <th scope={'row'}/>
                        <td>
                            <Link to={"/user/" + user.email}>{user.name}</Link>
                        </td>
                        <td>{user.company.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.website}</td>
                        <td><MDBBtn color="danger" style={buttonStyle} onClick={() => onDeleteClick(user)}>Delete</MDBBtn></td>
                    </tr>
                )

            )}
            </tbody>
        </table>
        </div>
    )
};

export default LeavesListChild;

