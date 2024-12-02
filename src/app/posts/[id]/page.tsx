import React from 'react'
import Layout from '@/components/Layout'
import { PageProps } from '../../../../.next/types/app/layout';




export default async function page({params}: PageProps) {
  const { id } = await params
  return (
    <Layout>
      <div className='flex justify-center w-full'>
        Hello {id}
      </div>
    </Layout>
    
  )
}
