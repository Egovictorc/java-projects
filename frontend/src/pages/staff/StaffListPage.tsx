import React from 'react'
import { Helmet } from "react-helmet"
import { SectionHeading } from '@/components/headings'
import { COMPANY_INFO } from '@/config-global'
import { StaffTable } from '@/sections/staff'

const StaffPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Staff List | {COMPANY_INFO.name}</title>
      </Helmet>
      <div className='p-5'>
        <SectionHeading title="All Staff" className='mb-4' />
        <StaffTable />
      </div>
    </>
  )
}

export default StaffPage