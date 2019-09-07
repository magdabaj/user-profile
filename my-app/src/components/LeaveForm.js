import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './common/TextInput';

const LeaveForm = ({user}) => {
    return (
        <form>
            <h2>{user.id.value ? "Add" : "Edit"} Leave</h2>
            <button type={'submit'} className={'btn btn-primary'} >
                Save
            </button>
            <TextInput
                name={'name'}
                label = 'Name'
                value={user.name.first}
            />
            <TextInput
                name={'name'}
                label = 'Name'
                value={user.name.last}
            />
            <TextInput
                label={'From date'}
                name={'fromdate'}
                value={user.registered.date}
            />
            <TextInput
                label={'To date'}
                name={'tomdate'}
                value={user.dob.date}
            />
        </form>
    )
};

export default LeaveForm;