import { Spinner } from '@gluestack-ui/themed'

const Awaiting = ({
  awaitingProp = null,
  component = null,
  size = 'small',
  spinnerProps = {}
} = {}) => {
  return (
    <>
      { awaitingProp ? (
        component
      ) : (
        <Spinner { ...spinnerProps } size={ size } />
      ) }
    </>
  )
}

export default Awaiting
