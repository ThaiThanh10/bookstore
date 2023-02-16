import '../styles/global.css';
import MasterPage from '@/components/master'
import dynamic from 'next/dynamic';

import React from 'react'
const UITask = dynamic(() => import('@/components/website/pages/UITask'));
const task = () => {
    return (
        <MasterPage title="Task">
            <UITask />
        </MasterPage>
    )
}

export default task