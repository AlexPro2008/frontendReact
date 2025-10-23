// для регистрации маршрутов
import {Map} from "./components/map";
import {Route, Router, Routes} from "react-router";
import {Footer} from "./components/footer";
import ShowMapJs, {showMapJs} from "./components/showMap";
import {Header} from "./components/header";
import {Auth} from "./components/auth";
import {Appearance} from "./components/appearance";

function App() {





       return (<>
               <div className="container-sm container-xl">
           <div className="d-flex flex-column">
               <Header/>
               <main >
                       <Routes>
                           <Route path="/" element={<ShowMapJs/>}/>
                           <Route path="auth" element={<Auth/>}/>
                           <Route path="reg" element={<Appearance/>}/>

                       </Routes>

               </main>
               <Footer/>
           </div>
           </div>
           </>
           );
           } // App

           export default App;
