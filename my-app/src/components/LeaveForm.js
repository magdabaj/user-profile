import {MDBBtn, MDBContainer} from "mdbreact";
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from "react-router";
import styled from "styled-components";
import TextInput from './common/TextInput';
import _ from 'lodash';

const buttonStyle = {
    borderRadius: '50px'
};

const Header = styled.div`
    text-align: center;
      margin: 0 1em;
  padding: 0.25em 1em;
`;


const LeaveForm = ({user, onChange, onCompanyChange, onSave, errors = {}}) => {
    const [redirectToPosts, changeRedirectToPosts ] = useState(false);
    return (
        <form onSubmit={onSave}>
            {redirectToPosts && <Redirect to={'/posts/' + user.email}/>}
            <Header className={'h1 indigo-text'}>{user.id ? "Edit" : "Add"} Leave</Header>
            {errors.onSave && (
                <div className={'alert alert-danger'} role={'alert'}>
                    {errors.onSave}
                </div>
            )}
            <TextInput
                name={'name'}
                label = 'Name'
                value={user.name}
                onChange={onChange}
                error={errors.name}
            />
            <TextInput
                name={'company'}
                label = 'Company'
                value={_.get(user, 'company.name')}
                error={errors.companyName}
                onChange={onCompanyChange}
            />
            <TextInput
                label={'Email'}
                name={'email'}
                value={user.email}
                onChange={onChange}
                error={errors.email}
            />
            <TextInput
                label={'Phone number'}
                name={'phone'}
                value={user.phone}
                onChange={onChange}
                error={errors.phone}
            />
            <TextInput
                label={'Website'}
                name={'website'}
                value={user.website}
                onChange={onChange}
                error={errors.website}
            />
            <MDBBtn
                style={buttonStyle}
                type={'submit'}
                onSubmit={onSave}
                color={'indigo'}
            >
                Save
            </MDBBtn>
            {user.id
                ? <MDBBtn  style={buttonStyle} onClick={() => changeRedirectToPosts(true)} color={'indigo'}>See posts</MDBBtn>
                : null
            }
                </form>
    )
};
export default LeaveForm;