import React from 'react';
import {ButtonAuthStyled, GlobalLink} from "../globalStyle";
import {AiOutlineSend} from "react-icons/ai";

function LoginComponent(props) {
    return (
        <div>
            <div>
                Login
            </div>
            <div>
                <form action="">
                    <div>
                        <input type="text" placeholder={"Pseudo"}/>
                    </div>
                    <div>
                        <input type="password" placeholder={"Password"}/>
                    </div>
                    <ButtonAuthStyled type={"submit"}>
                        <span>Connect</span>
                        <AiOutlineSend/>
                    </ButtonAuthStyled>
                </form>
                <span>If you haven't an account <GlobalLink to={'/register'}>Register</GlobalLink></span>

            </div>
        </div>
    );
}

export default LoginComponent;