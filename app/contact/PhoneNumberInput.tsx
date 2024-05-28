import React from 'react'
import { MuiTelInput } from 'mui-tel-input'


export default function PhoneNumberInput () {
  const [phone, setPhone] = React.useState<string>('')
  const handleChange = (newPhone:string) => {
    setPhone(newPhone)
  }

  return (
    <MuiTelInput fullWidth required defaultCountry='FR' value={phone} onChange={handleChange} />
  )
}