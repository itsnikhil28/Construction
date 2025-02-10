import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Mainlayout from './Layout/Mainlayout'
import Main from './Pages/Main'
import Services from './Pages/Services'
import Aboutus from './Pages/Aboutus'
import Projects from './Pages/Projects'
import Blogs from './Pages/Blogs'
import Contactus from './Pages/Contactus'
import Login from './Admin/Login'
import Dashboard from './Admin/Dashboard'
import Authcheck from './Authcheck/Authcheck'
import Adminlayout from './Layout/AdminLayout'
import AdminServices from './Admin/Services/AdminServices'
import AdminServicesCreate from './Admin/Services/AdminServicesCreate'
import AdminServicesUpdate from './Admin/Services/AdminServicesUpdate'
import AdminProjects from './Admin/Projects/AdminProjects'
import AdminProjectsCreate from './Admin/Projects/AdminProjectsCreate'
import AdminProjectsUpdate from './Admin/Projects/AdminProjectsUpdate'
import AdminArticles from './Admin/Articles/AdminArticles'
import AdminArticlesCreate from './Admin/Articles/AdminArticlesCreate'
import AdminArticlesUpdate from './Admin/Articles/AdminArticlesUpdate'
import AdminTestinomials from './Admin/Testinomials/AdminTestinomials'
import AdminTestinomialsCreate from './Admin/Testinomials/AdminTestinomialsCreate'
import AdminTestinomialsUpdate from './Admin/Testinomials/AdminTestinomialsUpdate'
import AdminMembers from './Admin/Members/AdminMembers'
import AdminMembersCreate from './Admin/Members/AdminMembersCreate'
import AdminMembersUpdate from './Admin/Members/AdminMembersUpdate'
import ServiceDetail from './Pages/ServiceDetail'
import ProjectDetail from './Pages/ProjectDetail'
import Blogdetail from './Pages/Blogdetail'

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Mainlayout />,
            children: [
                {
                    path: '/',
                    element: <Main />
                },
                {
                    path: '/about-us',
                    element: <Aboutus />
                },
                {
                    path: '/our-services',
                    element: <Services />
                },
                {
                    path: '/our-services/:id',
                    element: <ServiceDetail />
                },
                {
                    path: '/our-projects',
                    element: <Projects />
                },
                {
                    path: '/our-projects/:id',
                    element: <ProjectDetail />
                },
                {
                    path: '/our-blogs',
                    element: <Blogs />
                },
                {
                    path: '/our-blogs/:id',
                    element: <Blogdetail />
                },
                {
                    path: '/contact-us',
                    element: <Contactus />
                },
                {
                    path: '/admin',
                    element: <Login />,
                },
                {
                    path: '/admin',
                    element: <Authcheck><Adminlayout /></Authcheck>,
                    children: [
                        {
                            path: 'dashboard',
                            element: <Authcheck><Dashboard /></Authcheck>
                        },
                        {
                            path: 'services',
                            element: <Authcheck><AdminServices /></Authcheck>
                        },
                        {
                            path: 'services/create',
                            element: <Authcheck><AdminServicesCreate /></Authcheck>
                        },
                        {
                            path: 'services/:id/update',
                            element: <Authcheck><AdminServicesUpdate /></Authcheck>
                        },
                        {
                            path: 'projects',
                            element: <Authcheck><AdminProjects /></Authcheck>
                        },
                        {
                            path: 'projects/create',
                            element: <Authcheck><AdminProjectsCreate /></Authcheck>
                        },
                        {
                            path: 'projects/:id/update',
                            element: <Authcheck><AdminProjectsUpdate /></Authcheck>
                        },
                        {
                            path: 'articles',
                            element: <Authcheck><AdminArticles /></Authcheck>
                        },
                        {
                            path: 'articles/create',
                            element: <Authcheck><AdminArticlesCreate /></Authcheck>
                        },
                        {
                            path: 'articles/:id/update',
                            element: <Authcheck><AdminArticlesUpdate /></Authcheck>
                        },
                        {
                            path: 'testinomials',
                            element: <Authcheck><AdminTestinomials /></Authcheck>
                        },
                        {
                            path: 'testinomials/create',
                            element: <Authcheck><AdminTestinomialsCreate /></Authcheck>
                        },
                        {
                            path: 'testinomials/:id/update',
                            element: <Authcheck><AdminTestinomialsUpdate /></Authcheck>
                        },
                        {
                            path: 'members',
                            element: <Authcheck><AdminMembers /></Authcheck>
                        },
                        {
                            path: 'members/create',
                            element: <Authcheck><AdminMembersCreate /></Authcheck>
                        },
                        {
                            path: 'members/:id/update',
                            element: <Authcheck><AdminMembersUpdate /></Authcheck>
                        }
                    ]
                }
            ]
        }
    ])

    return (<RouterProvider router={router} ></RouterProvider>)
}

export default App
