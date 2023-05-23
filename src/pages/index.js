
import '../styles/global.css';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import MasterPage from '@/components/master'
import React, { useState } from 'react'
import dynamic from 'next/dynamic';

const UIHomepage = dynamic(() => import('@/components/website/pages/UIHomepage/UIHomepage'));


const home = () => {

    return (
        <MasterPage title=" Home" >
            <UIHomepage />
        </MasterPage>
    )
}

export default home