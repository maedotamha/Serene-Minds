import React from 'react'
export default function DashboardLayout(
    {children,
     streak,
      daily,
      weekly,
    total,
  quote}:{children: React.ReactNode,streak: React.ReactNode, daily: React.ReactNode, weekly: React.ReactNode, total: React.ReactNode, quote: React.ReactNode }) {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center overflow-x-hidden'>
     <div className='w-full rounded'>
      {quote}
      </div>
    {children}
    <div className='flex my-2'>
      
      <div className='flex flex-col'>
        {streak}   
        {daily}
      </div>
      <div className='flex  flex-col'>
        {weekly}
        {total}
      </div>
    </div>
    </div>
)
}
