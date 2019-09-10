import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './common/TextInput';

const LeaveForm = ({user, onChange, onSave}) => {
    return (
        <form onSubmit={onSave}>
            <h2>{user.id ? "Edit" : "Add"} Leave</h2>
            <button type={'submit'} onSubmit={onSave} className={'btn btn-primary'} >
                Save
            </button>
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
        </form>
    )
};
export default LeaveForm;