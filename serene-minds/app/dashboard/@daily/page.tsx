import React from 'react'
import Card from '../../components/card'

export default function TimeSpent() {
  return (
    <Card>
      <div   className="radial-progress text-primary  border-2 font-PTSerif text-4xl"
 style={{ "--value": "25", "--size": "10rem", "--thickness": "10px" }}
 role="progressbar">
  25
  </div>

    </Card>
  )
}
