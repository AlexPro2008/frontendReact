import {NavLink} from "react-router";

export const Header = () => {


    return (<>
        <header className="bg-dark text-white py-3 fixed-top">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between">
                    <form action="/login" method="POST" className="d-flex me-3" style={{flexGrow: "1"}}>
                        <div className="mb-3 w-100">
                            <input
                                type="text"
                                className="form-control"
                                id="search"
                                name="search"
                                placeholder="Поиск"
                                required
                            />
                        </div>
                    </form>

                    <NavLink
                        to="auth"
                        className="btn btn-sm btn-outline-secondary d-flex align-items-center"
                        style={{position: "relative", top: "-5px"}}
                    >
                        <i className='bi bi-person me-2'></i>
                        <span>Войти</span>
                    </NavLink>
                </div>
            </div>
        </header>
    </>);
} // Header