export const getHandleChange = (e: { target: { name: any; value: any } }, values: any, setValues: (arg0: any) => void) => {
  const name = e.target.name
  const value = e.target.value
  setValues({ ...values, [name]: value })
}
