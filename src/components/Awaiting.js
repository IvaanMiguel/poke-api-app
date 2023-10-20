import { Spinner } from '@gluestack-ui/themed'

const Awaiting = ({
  awaitingProp = null,
  size = 'small',
  spinnerProps = {},
  children
} = {}) => {
  return (
    <>
      { awaitingProp ? (
        children
      ) : (
        <Spinner { ...spinnerProps } size={ size } />
      ) }
    </>
  )
}

export default Awaiting
