import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {HomePage, AboutPage, NotFoundPage, PostDetailsPage, PostPage, UsersPage} from "./pages";
import {MainLayout} from "./layouts";
import React from "react";
import {LoginPage} from "./pages/LoginPage/LoginPage";
import {RequireAuth} from "./hot/RequireAuth";

function App() {
  return (
    <div>
      <Routes>
          <Route path={'/'} element={<MainLayout/>}>
              <Route index element={<Navigate to={'home'}/>}/>
              <Route path={'home'} element={<HomePage/>}/>
              <Route path={'users'} element={<UsersPage/>}/>
              <Route path={'posts'} element={
                  <RequireAuth>
                      <PostPage/>
                  </RequireAuth>}>
                  <Route path={':postId'} element={<PostDetailsPage/>}/>
              </Route>
              <Route path={'about'} element={<AboutPage/>}/>
              <Route path={'login'} element={<LoginPage/>}/>
              <Route path={'*'} element={<NotFoundPage/>}/>
          </Route>

      </Routes>
    </div>
  );
}

export {App};
