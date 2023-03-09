
import '../styles/global.css';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import MasterPage from '@/components/master'
import React, { useState } from 'react'
import dynamic from 'next/dynamic';

const UIDashBoard = dynamic(() => import('@/components/website/pages/UIDashBoard'));


const home = () => {

    return (
        <MasterPage title="HomePage" >
            <UIDashBoard />
        </MasterPage>
    )
}

export default home