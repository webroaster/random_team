import { Button, TextInput } from "@mantine/core"
import { useState, useRef } from "react"

const NameInput = ({ users, setUsers }) => {
  const [newUser, setNewUser] = useState("")
  const inputRef = useRef(null)

  const addUser = (e) => {
    e.preventDefault()
    setUsers([...users, newUser])
    setNewUser("")
    inputRef.current.focus()
  }

  return (
    <>
      <form
        onSubmit={addUser}
        className='flex flex-row items-center justify-center w-[100%] pt-4'
      >
        <TextInput
          className='block w-[100%]'
          size='md'
          placeholder='名前'
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          ref={inputRef}
        />
        <Button type='submit' ml='xs' disabled={newUser === ""} color='cyan'>
          追加
        </Button>
      </form>
    </>
  )
}

export default NameInput
