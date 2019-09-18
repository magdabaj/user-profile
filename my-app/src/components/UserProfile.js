import {MDBContainer, MDBIcon} from "mdbreact";
import React from 'react';
import bcImg from '../images/bridge-1385938_960_720.jpg';
import msgIcon from '../images/baseline_grade_black_48dp.png';
import styled from 'styled-components';
import fallowIcon from '../images/baseline_reply_black_48dp.png';

const Img = styled.img`
    width: 100%;
    height: auto
`;

const MsgFallowContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const ProfileOptions = styled.div`
    height: 50px;
    width: 50%;
    cursor: pointer
`;

const Msg = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around; 
    vertical-align: middle;
    border: 2px 3px 2px 3px solid #3f51b5;
    box-shadow: 2px 2px 1px #3f51b5;
`;

const IconText = styled.div`
    color: grey;
    font-size: 1.5em;
`;

const UserProfile = ({user}) => {
    console.log(user);
    return (
        <div>
            <div>
                <Img src={bcImg} alt={'profile photo'}/>
                <MsgFallowContainer >
                    <ProfileOptions onClick={() => {
                        // todo display messages
                    }}>
                        <Msg>
                            <div style={{width: '20%'}}/>
                            <MDBIcon far icon="envelope" size={'2x'}  className="indigo-text pr-2" />
                            <IconText className={'indigo-text font-weight-bold'}>Message</IconText>
                            <div style={{width: '20%'}}/>
                        </Msg>
                    </ProfileOptions>
                    <ProfileOptions>
                        <Msg>
                            <div style={{width: '20%'}}/>
                            <MDBIcon icon="user-plus" lgs size={'2x'}  className="indigo-text pr-2" />
                            <IconText className={'indigo-text font-weight-bold'}>Fallow</IconText>
                            <div style={{width: '20%'}}/>
                        </Msg>
                    </ProfileOptions>
                </MsgFallowContainer>
            </div>
        </div>
    )
};

export default UserProfile;