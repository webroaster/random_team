import { Button, TextInput } from "@mantine/core"
import { useState } from "react"

const NameInput = ({ users, setUsers }) => {
  const [newUser, setNewUser] = useState("")
  const addUser = () => {
    setUsers([...users, newUser])
    setNewUser("")
  }

  return (
    <>
      <form className='flex flex-row items-end justify-center w-[100%]'>
        <TextInput
          className='block w-[100%]'
          mt='md'
          placeholder='名前'
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />
        <Button
          onClick={addUser}
          ml='xs'
          disabled={newUser === ""}
          color='cyan'
        >
          追加
        </Button>
      </form>
    </>
  )
}

export default NameInput
