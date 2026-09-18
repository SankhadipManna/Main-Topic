import React from 'react'
import './container.css'
import{Pencil, SquareChevronRight,Rocket,Wallet} from 'lucide-react'


const Container = () => {
  return (
    <div className='glass-grid'>
  <div className='glass' style={{ '--r': -15 }} data-text="Design">
    <Pencil />
  </div>
  <div className='glass' style={{ '--r': 5 }} data-text="Code">
    <SquareChevronRight />
  </div>
  <div className='glass' style={{ '--r': 25 }} data-text="Launch">
    <Rocket />
  </div>
  <div className='glass' style={{ '--r': -15 }} data-text="Error">
    <Wallet />
  </div>
</div>
  )
}

export default Container
