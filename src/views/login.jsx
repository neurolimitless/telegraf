import React from 'react';

class Login extends React.Component {

    render() {
        return (
            <div id="login-container">
                <form action={"/login"} method='POST'>
                    <input name="[user]login" type="text"/>
                    <input name="[user]password" type="text"/>
                    <div>
                        <button type="button">Очистить</button>
                        <button type="submit">Отправить</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login
