import { LabelProps } from '@/types/LabelProps'
import React from 'react'

const Label:React.FC<LabelProps> = ({text, docriveClass}) => {
  return (
    <h4 className={`px-2 py-1 ${docriveClass} uppercase text-xs font-semibold`}>{text}</h4>
  )
}

export default Label