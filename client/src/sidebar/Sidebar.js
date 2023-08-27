import React from 'react'
import { Avatar, Card } from 'antd';

const Sidebar = () => {
    return (
        <div>
            <div className='info'>
                <Avatar size={100}>Profile Picture</Avatar>
                <div className='address'>
                    <h3>MindX</h3>
                    <p>Hanoi,Vietnam</p>
                </div>
            </div>
            <div className='profile'>
                <Card title="" bordered={false} style={{ 
                    border: '1px solid', 
                    borderRadius:"10px",
                    width: 200
                    }}>
                    <p>Profile</p>
                    <p>Posts</p>
                    <p style={{
                        borderBottom: '1px solid'
                    }}>Follows</p>
                  
                    <p>My info</p>
                    <p>Privacy</p>
                    <p>Password</p>
                   
                </Card>
                
            </div>
        </div>
    )
}

export default Sidebar