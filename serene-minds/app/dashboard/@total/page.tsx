import React from 'react'
import Card from '../../components/card'

export default function TimeSpent() {
  return (
    <Card>
      <div   className="radial-progress text-accent border-primary border-2 font-PTSerif text-4xl"
 style={{ "--value": "15", "--size": "10rem", "--thickness": "10px" }}
 role="progressbar">
  15
  </div>

    </Card>
  )
}
