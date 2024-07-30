import React from 'react'
import Card from '../../components/card'
export default function TotalTime() {
  return (
    <Card>
<div className='flex items-center'>
  <div className='font-PTSerif  text-primary mr-2'>Monday</div>
<progress className="progress progress-primary w-56" value={0} max="100"></progress>
</div>
<div className='flex items-center'>
  <div className='font-PTSerif  text-primary mr-2'>Tuesday</div>
<progress className="progress progress-primary w-56" value={20} max="100"></progress>
</div>
<div className='flex items-center'>
  <div className='font-PTSerif  text-primary mr-2'>Wednesday </div>
<progress className="progress progress-primary w-56" value={10} max="100"></progress>
</div>
<div className='flex items-center'>
  <div className='font-PTSerif  text-primary mr-2'>Thursday</div>
<progress className="progress progress-primary w-56" value={0} max="100"></progress>
</div>
<div className='flex items-center'>
  <div className='font-PTSerif  text-primary mr-2'>Friday</div>
<progress className="progress progress-primary w-56" value={60} max="100"></progress>
</div>    </Card >
  )
}
