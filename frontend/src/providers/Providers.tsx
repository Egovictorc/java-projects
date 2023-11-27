import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
import React, { ReactNode } from 'react'
import { SnackbarProvider } from 'notistack'

// Create a client
const queryClient = new QueryClient()

const Providers = ({children}: {children: ReactNode}) => {


  return (
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider anchorOrigin={{vertical: "top", horizontal: "right"}}>

      {/* The rest of your application */}
      {children}
      </SnackbarProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default Providers