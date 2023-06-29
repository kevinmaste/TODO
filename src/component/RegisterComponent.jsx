import React from 'react';
import {Link} from "react-router-dom";
import {ButtonAuthStyled, GlobalLink} from "../globalStyle";
import {AiOutlineSend} from "react-icons/ai";

function RegisterComponent(props) {
    return (
        <div>
            <div>
                Register
            </div>
            <div>
                <form action="">
                    <div>
                        <input type="text" placeholder={"Pseudo"}/>
                    </div>
                    <div>
                        <input type="email" placeholder={"Email"}/>
                    </div>
                    <div>
                        <input type="password" placeholder={"Password"}/>
                    </div>
                    <ButtonAuthStyled type={"submit"}>
                       <span>Create</span>
                        <AiOutlineSend/>
                    </ButtonAuthStyled>
                </form>
                <span>If you have already an account <GlobalLink to={'/login'}>Login</GlobalLink></span>
            </div>
        </div>
    );
}

export default RegisterComponent;