import { SectionHeading } from '@/components/headings'
import { StaffTable } from '@/sections/staff'
import React from 'react'

const StaffPage = () => {
  return (
    <div className='p-5'>
      <SectionHeading title="All Staff" className='mb-4' />
      <StaffTable />
    </div>
  )
}

export default StaffPage