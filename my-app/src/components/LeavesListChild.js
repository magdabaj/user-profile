import React from 'react';
import { Link } from 'react-router-dom';

const LeavesListChild = ({users}) => {

    return (
        <table className={'table'}>
            <thead>
            <tr>
                <th>Name</th>
                <th>Company</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
                {/*<th>Type</th>*/}
            </tr>
            </thead>
            <tbody>
            {users.map(user => (
                    <tr key={user.id}>
                        <td>
                            <Link to={"/user/" + user.email}>{user.name}</Link>
                        </td>
                        <td>{user.company.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.website}</td>
                    </tr>
                )

            )}
            </tbody>
        </table>
    )
};

export default LeavesListChild;

