import React from 'react'
import {Helmet } from "react-helmet"

import { SectionHeading } from '@/components/headings'
import { COMPANY_INFO } from '@/config-global'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import EditStaffForm from '@/sections/staff/EditStaffForm'
import { getStaffById } from '@/lib/handlers'

const EditStaffPage = () => {
    const queryClient = useQueryClient();
    const { id } = useParams();
    // Queries
    const { data: staff, isLoading, isSuccess, isError, error } = useQuery({ queryKey: ['staff'], queryFn: () => getStaffById(Number(id)) })

    console.log("staff ", staff)

    if(isLoading ) {
        return (<p> fetching staff info ...</p>)
    }
    if(!staff) {
        return <p>Staff does not exist</p>
    }
    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Edit Staff | {COMPANY_INFO.name}</title>
        </Helmet>
        <div className='p-5'>
            <SectionHeading title="Edit Staff" />
            <div className='mt-5 max-w-screen-md'>

            <EditStaffForm staff={staff} />
            </div>
        </div>
        </>
    )
}

export default EditStaffPage