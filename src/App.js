import './App.css';
import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layout/MainLayout";
import {RoutesEndpoint} from "./routes/routes";
import {HomePage} from "./api/pages/HomePage/HomePage";
import {TodosPage} from "./api/pages/TodosPage/TodosPage";
import {AlbumsPage} from "./api/pages/AlbumsPage/AlbumsPage";
import {CommentsPage} from "./api/pages/CommentsPage/CommentsPage";
import PostByComment from "./api/pages/CommentDetailsPage/PostByComment";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path = {RoutesEndpoint.index} element = {<MainLayout />}>
                <Route path={RoutesEndpoint.index} index element={<HomePage/>}/>
                <Route path={RoutesEndpoint.todos} element={<TodosPage/>}/>
                <Route path={RoutesEndpoint.albums} element={<AlbumsPage/>}/>
                <Route path={RoutesEndpoint.comments} element={<CommentsPage/>}>
                    <Route path={RoutesEndpoint.postById} element={<PostByComment/>}/>
                </Route>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
