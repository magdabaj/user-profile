import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './common/TextInput';

const LeaveForm = ({user}) => {
    return (
        <form>
            {/*<h2>{user.id.value ? "Edit" : "Add"} Leave</h2>*/}
            <button type={'submit'} className={'btn btn-primary'} >
                Save
            </button>
            <TextInput/>
        </form>
    )
};

export default LeaveForm;