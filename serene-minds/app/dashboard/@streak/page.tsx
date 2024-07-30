import React from 'react'
import Card from '../../components/card'
import Image from "next/image";

export default function Streak() {
  return (
    <Card>
      <Image src='/flame.png' alt="" width={100} height={100}/>
      <h1 className=' text-7xl font-PTSerif'>0</h1>
    </Card>
  )
}
