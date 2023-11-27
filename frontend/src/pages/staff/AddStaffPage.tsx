import React from 'react'
import { Helmet } from "react-helmet"

import { SectionHeading } from '@/components/headings'
import { COMPANY_INFO } from '@/config-global'
import { NewStaffForm } from '@/sections/staff'

const AddStaffPage = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Add Staff | {COMPANY_INFO.name}</title>
            </Helmet>
            <div className='p-5'>
                <SectionHeading title="Add Staff" />
                <div className='mt-5 max-w-screen-md'>

                    <NewStaffForm />
                </div>
            </div>
        </>
    )
}

export default AddStaffPage