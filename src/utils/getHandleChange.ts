export const getHandleChange = (e: { target: { name: string; value: string } }, values: {}, setValues: (arg0: any) => void) => {
  const name = e.target.name
  const value = e.target.value
  setValues({ ...values, [name]: value })
}
