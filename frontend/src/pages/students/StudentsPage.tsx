import React from 'react'
import { Helmet } from "react-helmet"
import { SectionHeading } from '@/components/headings'
import { COMPANY_INFO } from '@/config-global'
import { StudentsTable } from '@/sections/students'

const StudentsPage = () => {
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Students | {COMPANY_INFO.name}</title>
    </Helmet>
    <div className='p-5'>
      <SectionHeading title="All Students" className='mb-4' />
      <StudentsTable />
    </div>
    </>
  )
}

export default StudentsPage