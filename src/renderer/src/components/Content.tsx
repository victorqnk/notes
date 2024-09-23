import { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export const Content = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={twMerge('flex-1 overflow-auto', className)} {...props}>
        {children}
      </div>
    )
  }
)
