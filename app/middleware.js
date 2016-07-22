export const logger = ({ getState }) => {
  return (next) => (action) => {
    console.group(action.type)
    console.log('ACTION:', action)
    // Call the next dispatch method in the middleware chain.
    let returnValue = next(action)
    console.log('NEW STATE:', getState())
    console.groupEnd(action.type)
    return returnValue
  }
}
