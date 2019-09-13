import {MDBBtn, MDBContainer} from "mdbreact";
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from "react-router";
import styled from "styled-components";
import TextInput from './common/TextInput';

const buttonStyle = {
    borderRadius: '50px'
};

const Header = styled.div`
    text-align: center;
      margin: 0 1em;
  padding: 0.25em 1em;
`;


const LeaveForm = ({user, onChange, onSave}) => {
    const [redirectToPosts, changeRedirectToPosts ] = useState(false);
    return (
        <form onSubmit={onSave}>
            {redirectToPosts && <Redirect to={'/posts/' + user.email}/>}
            <Header className={'h1 indigo-text'}>{user.id ? "Edit" : "Add"} Leave</Header>
            {/*<h2>{user.id ? "Edit" : "Add"} Leave</h2>*/}
            <TextInput
                name={'name'}
                label = 'Name'
                value={user.name}
                onChange={onChange}
            />
            {/*<TextInput*/}
            {/*    name={'company'}*/}
            {/*    label = 'Company'*/}
            {/*    value={user.company}*/}
            {/*    onChange={onChange}*/}
            {/*/>*/}
            <TextInput
                label={'Email'}
                name={'email'}
                value={user.email}
                onChange={onChange}
            />
            <TextInput
                label={'Phone number'}
                name={'phone'}
                value={user.phone}
                onChange={onChange}
            />
            <TextInput
                label={'Website'}
                name={'website'}
                value={user.website}
                onChange={onChange}
            />
            <MDBBtn  style={buttonStyle} type={'submit'} onSubmit={onSave} gradient="blue">Save</MDBBtn>
            <MDBBtn  style={buttonStyle} type={'submit'} onClick={() => changeRedirectToPosts(true)} gradient="blue">See posts</MDBBtn>
        </form>
    )
};
export default LeaveForm;