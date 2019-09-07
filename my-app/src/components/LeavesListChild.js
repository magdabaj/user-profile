import React from 'react';
import { Link } from 'react-router-dom';

const LeavesListChild = (props) => {
    const {users, setUser} = props;

    return (
        <table className={'table'}>
            <thead>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>From date</th>
                <th>To date</th>
                {/*<th>Reason</th>*/}
                {/*<th>Type</th>*/}
            </tr>
            </thead>
            <tbody>
            {users.map(user => (
                    <tr key={user.login.md5}>
                        <td>
                            <Link to={"/user/" + user.login.md5} >{user.name.first}</Link>
                        </td>
                        <td>
                            <Link to={"/user/" + user.login.md5} >{user.name.last}</Link>
                        </td>
                        <td>{user.registered.date}</td>
                        <td>{user.dob.date}</td>
                    </tr>
                )

            )}
            </tbody>
        </table>
    )
};

export default LeavesListChild;

