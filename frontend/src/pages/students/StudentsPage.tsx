import { SectionHeading } from '@/components/headings'
import { StudentsTable } from '@/sections/students'
import React from 'react'

const StudentsPage = () => {
  return (
    <div className='p-5'>
      <SectionHeading title="All Students" className='mb-4' />
      <StudentsTable />
    </div>
  )
}

export default StudentsPage