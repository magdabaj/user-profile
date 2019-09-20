import {MDBBtn, MDBTabContent} from "mdbreact";
import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {MDBContainer} from "mdbreact";

const buttonStyle = {
    borderRadius: '50px'
};

const LeavesListChild = ({users, onDeleteClick, user}) => {
    const [seePosts, setSeePosts] = useState(false);

    return (
        <>

        <MDBContainer>
        <div  style={{overflowY: 'auto', overflowX: 'auto'}} >
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
                <th scope={'col'}/>
            </tr>
            </thead>
            <tbody>
            {users.map(user => (
                <>
                    <tr key={user.id}>
                        <th scope={'row'}/>
                        <td>
                            <Link to={"/user/" + user.email}>{user.name}</Link>
                        </td>
                        <td>{user.company.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.website}</td>
                        <td><MDBBtn color='danger' style={buttonStyle} onClick={() => onDeleteClick(user)}>Delete</MDBBtn></td>
                        <td>
                            <MDBBtn gradient={'blue'} style={buttonStyle}  onClick={() => setSeePosts(true)}>
                            {seePosts && <Redirect to={'/posts/' + user.email}/>}
                            See posts
                            </MDBBtn>
                        </td>
                    </tr>
                </>
                )

            )}
            </tbody>
        </table>
        </div>
        </MDBContainer>
            </>
    )
};

export default LeavesListChild;

