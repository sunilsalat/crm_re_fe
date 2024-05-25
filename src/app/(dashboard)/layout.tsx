import React from 'react'

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <>
        <div>dashboard layout</div>
        <div>{children}</div>
    </>
  )
}

export default layout