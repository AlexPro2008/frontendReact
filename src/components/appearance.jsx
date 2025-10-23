export const Appearance = () => {

    return (<>
        <form  method="POST" className="bg-white p-4 rounded shadow">
            <h1 className="mb-4 text-center">Регистрация</h1>

            <div className="mb-3">
                <label htmlFor="name" className="form-label">Имя пользователя</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Введите имя"
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="surname" className="form-label">Фамилия</label>
                <input
                    type="text"
                    className="form-control"
                    id="surname"
                    name="surname"
                    placeholder="Введите Фамилию"
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Отчество</label>
                            <input
                                type=" text"
                                className=" form-control"
                                id=" patronymic"
                                name=" patronymic"
                                placeholder=" Введите отчество"
                                required
                            />
                        </div>
                        <div class=" mb-3">
                            <label className=" form-label">Логин</label>
                            <input
                                type=" text"
                                className=" form-control"
                                id=" username"
                                name=" username"
                                placeholder=" Введите имя"
                                required
                            />
                        </div>

                        <div className=" mb-3">
                            <label  className=" form-label">Пароль</label>
                            <input
                                type=" password"
                                className=" form-control"
                                id=" password"
                                name=" password"
                                placeholder=" Введите пароль"
                                required
                            />
                        </div>

                        <div id=" error-message" className=" text-danger mb-3"></div>

                        <div className=" d-grid">
                            <button type=" submit" className=" btn btn-dark">Регистрация</button>
                        </div>
                    </form>

    </>);

} // Appearance