import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ArticleListPage from "./pages/ArticleListPage";
import ArticlePage from "./pages/ArticlePage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import NavBar from "./NavBar";
// const Fun = () => {
//     return (
//         <div>
//             <h1>Fun</h1>
//         </div>
//     );
// }
const App = () => {
    //component
    return (
        <div>
            <BrowserRouter>
                <NavBar/>
                <div className="App">
                    <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/articles" element={<ArticleListPage />} />
                    <Route path="/articles/:articleid" element={<ArticlePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                 </Routes>
                </div>
        </BrowserRouter>
        </div>
    );
}
export default App;