import {NavLink} from "react-router";

export const Auth = () => {

    return (<>


                <form action="/login" method="POST" className="bg-white p-4 rounded shadow">
                    <h1 className="mb-4 text-center">Вход</h1>

                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Имя пользователя</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            name="username"
                            placeholder="Введите имя"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Пароль</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            placeholder="Введите пароль"
                            required
                        />
                    </div>

                    <NavLink className="w-25 h-25 nav-link" to="/reg">Зарегистрировать</NavLink>

                    <div id="error-message" className="text-danger mb-3"></div>

                    <div className="d-grid">
                        <button type="submit" className="btn btn-dark">Войти</button>
                    </div>


                </form>



    </>)

} // Auth