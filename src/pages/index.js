
import '../styles/global.css';

import MasterPage from '@/components/master'
import React from 'react'
import dynamic from 'next/dynamic';

const UIDashBoard = dynamic(() => import('@/components/website/pages/UIDashBoard'));


const home = () => {
    return (
        <MasterPage title="HomePage">
            <UIDashBoard />
        </MasterPage>
    )
}

export default home