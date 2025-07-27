import { Fade } from './Fade'
import { cn } from '../utils'
import { LoadingIcon } from '@/icons'

export const ContainerLoader = ({ loading }) =>
  loading && (
    <div className="center absolute top-0 left-0 right-0 bottom-0 z-50 bg-black/25">
      <LoadingIcon className="animate-spin duration-500 h-10 w-10" />
    </div>
  )

export const PageLoader = ({ loading }) =>
  loading && (
    <div className="center fixed top-0 left-0 right-0 bottom-0 z-30 bg-black/25">
      <LoadingIcon className="animate-spin duration-500 h-10 w-10" />
    </div>
  )

export const FadePageLoader = ({ children, loading, className, ...rest }) => {
  return (
    <>
      <Fade
        isVisible={loading}
        className={cn('center fixed top-0 left-0 right-0 bottom-0 z-[60]', className)}
        {...rest}
      >
        <LoadingIcon className="animate-spin duration-500 h-10 w-10" />
      </Fade>

      {!loading && children}
    </>
  )
}
