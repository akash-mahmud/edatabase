import React, { useState} from 'react'
import Register from '../components/Register'
import VerifyOTP from '../components/VerifyOTP'
import Bio from '../components/Bio'
import Upload from '../components/Upload'
import ProjectDetails from '../components/ProjectDetails'
import Category from '../components/Category'
import SubCategory from '../components/SubCategory'
import Congration from '../components/Congration'

function Login() {
    const [activeSection, setActiveSection] = useState('register')
    return (
        <div>
            {activeSection === 'register' && 
                <Register
                    setActiveSection={setActiveSection}
                    activeSection={activeSection} 
                />
            }
        {/* <Register /> */}
        {
            activeSection === 'verfyotp' &&
            <VerifyOTP
            setActiveSection={setActiveSection}
            activeSection={activeSection} 
        /> 
        }
        
        {
            activeSection === 'category' &&
            <Category
            setActiveSection={setActiveSection}
            activeSection={activeSection} 
        /> 
        }
        
        {
            activeSection === 'subcategory' &&
            <SubCategory
            setActiveSection={setActiveSection}
            activeSection={activeSection} 
        /> 
        }
        
        {
            activeSection === 'bio' &&
            <Bio
            setActiveSection={setActiveSection}
            activeSection={activeSection} 
        /> 
        }
        
        {
            activeSection === 'upload' &&
            <Upload
            setActiveSection={setActiveSection}
            activeSection={activeSection} 
        /> 
        }
        
        {
            activeSection === 'projectdetails' &&
            <ProjectDetails
            setActiveSection={setActiveSection}
            activeSection={activeSection} 
        /> 
        }
        
        {
            activeSection === 'congration' &&
            <Congration
            setActiveSection={setActiveSection}
            activeSection={activeSection} 
        /> 
        }
        </div>
    )
}

export default Login
