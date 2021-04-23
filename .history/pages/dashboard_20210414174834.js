import React from 'react'
import Sidebar from '../Components/nav/SideNav'
import TopNav from '../Components/nav/TopNav'

class Dashboard extends React.Component {
    render() {
        return (
            <>

            <TopNav />

            <Sidebar />

            </>
        )
    }
}

export default Dashboard