import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
import React, { ReactNode } from 'react'

// Create a client
const queryClient = new QueryClient()

const Providers = ({children}: {children: ReactNode}) => {


  return (
    <QueryClientProvider client={queryClient}>
      {/* The rest of your application */}
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default Providers