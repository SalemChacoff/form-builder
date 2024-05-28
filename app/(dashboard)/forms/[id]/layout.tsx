import React, { ReactNode } from 'react'

const layout = ({ children } : {children: ReactNode}) => {
  return (
    <div className='flex w-full flex-col flex-grow max-auto'>{children}</div>
  )
}

export default layout