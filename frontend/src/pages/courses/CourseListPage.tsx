import React from 'react'
import { Helmet } from "react-helmet"
import { SectionHeading } from '@/components/headings'
import { COMPANY_INFO } from '@/config-global'
import { CoursesTable } from '@/sections/courses'

const CourseListPage = () => {
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Course List | {COMPANY_INFO.name}</title>
    </Helmet>
    <div className='p-5'>
      <SectionHeading title="Course List" className='mb-4' />
      <CoursesTable />
    </div>
    </>
  )
}

export default CourseListPage