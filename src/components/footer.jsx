import {NavLink} from "react-router";

export const Footer = () => {
     return (<>
         <footer className="bg-dark text-white py-3  fixed-bottom">
             <div className="container-fluid px-0 mx-1 d-flex justify-content-center">
                 <nav aria-label="нижнее меню">
                     <ul className="list-unstyled d-flex align-items-center mb-0 text-center list-mobile-style"
                         >

                         <li className="flex-shrink-0" style={{width: "1rem"}}></li>

                         <li className="flex-shrink-0 me-3" style={{scrollSnapAlign: "start"}}>
                             <NavLink to="/"
                                className="text-white text-decoration-none d-block py-2 px-4 fs-5 fw-bold bg-secondary rounded-3">
                                 Карта
                             </NavLink>
                         </li>
                         <li className="flex-shrink-0 me-3" style={{scrollSnapAlign: "start"}}>
                             <NavLink to="/"
                                className="text-white text-decoration-none d-block py-2 px-4 fs-5 fw-bold bg-secondary rounded-3">
                                 Каталог
                             </NavLink>
                         </li>
                         <li className="flex-shrink-0 me-3" style={{scrollSnapAlign: "start"}}>
                             <NavLink href="/Faworite"
                                className="text-white text-decoration-none d-block py-2 px-4 fs-5 fw-bold bg-secondary rounded-3">
                                 Метки
                             </NavLink>
                         </li>
                         <li className="flex-shrink-0 me-3" style={{scrollSnapAlign: "start"}}>
                             <NavLink href="/Way"
                                className="text-white text-decoration-none d-block py-2 px-4 fs-5 fw-bold bg-secondary rounded-3">
                                 Маршруты
                             </NavLink>
                         </li>
                     </ul>
                 </nav>
             </div>
         </footer>
                 </>)
}
