'use client'
import React,{ useState  } from "react";
import { QueryClient, QueryClientProvider } from 'react-query'

export default function Providers({ children }:any) {
    const queryClient = new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            refetchOnReconnect: false,
            retry: false,
            staleTime: 5*60*1000,
          },
        },
      });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}