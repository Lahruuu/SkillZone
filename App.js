import React from 'react';
import './App.css';
import { Breadcrumb, Layout, Menu } from 'antd';
import { BookOutlined } from '@ant-design/icons';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import HomePage from './components/pages/HomePage.jsx';
import LoginPage from './components/pages/LoginPage.jsx';
import RegisterPage from './components/pages/RegisterPage.jsx';

import CoursePage from './components/pages/CoursePages/CoursePage.jsx';
import TheoryPage from './components/pages/CoursePages/TheoryPage.jsx';
import TaskPage from './components/pages/CoursePages/TaskPage.jsx';
import CourseModulesSections from './components/pages/CoursePages/CourseModulesSections.jsx';
import ModuleSectionTopics from './components/pages/CoursePages/ModuleSectionTopics.jsx';
import TopicTheoryTask from './components/pages/CoursePages/TopicTheoryTask.jsx';


import UserHomePage from './components/pages/User/UserHomePage.jsx';
import UserTestPage from './components/pages/User/UserTestPage.jsx';
import UserTestResultPage from './components/pages/User/UserTestResultsPage.jsx';
import UserCoursePage from './components/pages/User/UserCoursePage.jsx';
import UserTaskPage from './components/pages/User/UserTaskPage.jsx';

import AdminMainPage from './components/pages/Admin/AdminMainPage.jsx';
import AdminManageUsersPage from './components/pages/Admin/AdminManageUsersPage.jsx';
import AdminManageProfPage from './components/pages/Admin/AdminManageProfPage.jsx';
import AdminManageTestPage from './components/pages/Admin/AdminManageTestPage.jsx';




const { Header, Content, Footer } = Layout;

function NavBar() {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ marginLeft: 'auto' }}>
      <Menu.Item key="1">Home</Menu.Item>
      <Menu.Item key="2">Log-in</Menu.Item>
      <Menu.Item key="3">Register</Menu.Item>
    </Menu>
  );
}

// comment 

function App() {
  return (
    <BrowserRouter>
      <Layout style={{ minHeight: '100vh' }}>
        <Header
          style={{
            position: 'fixed',
            zIndex: 1,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div style={{ color: 'white' }} className="demo-logo">
            SkillZone
          </div>
        </Header>
        <Content style={{ padding: '0 48px', marginTop: 64 }}>
          <Routes>
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route path="/course/:courseId" element={<CoursePage />} />
            <Route path="/topic/:topicId" element={<TopicTheoryTask />} />
            <Route path="/task/:id" element={<TaskPage />} />
            <Route path="/theory/:id" element={<TheoryPage />} />
            <Route path="/course_modules/:courseId" element={<CourseModulesSections />} />
            <Route path="/course_topics/:courseId/:moduleId/:sectionId" element={<ModuleSectionTopics />} />

            <Route path="/user_home" element={<UserHomePage />} />
            <Route path="/profession_test/:id" element={<UserTestPage />} />
            <Route path="/user_test_results" element={<UserTestResultPage />} />
            <Route path="/user_courses" element={<UserCoursePage />} />
            <Route path="/user_tasks" element={<UserTaskPage />} />

            <Route path="/admin_main" element={<AdminMainPage />} />
            <Route path="/admin_users" element={<AdminManageUsersPage />} />
            <Route path="/admin_prof" element={<AdminManageProfPage />} />
            <Route path="/admin_test" element={<AdminManageTestPage />} />
          </Routes>
        </Content>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
