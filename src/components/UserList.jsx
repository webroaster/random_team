import { ActionIcon } from "@mantine/core"
import { Trash } from "tabler-icons-react"

const UserList = ({ users, setUsers }) => {
  const deleteUser = (i) => {
    setUsers(users.filter((_, index) => index !== i))
  }

  return (
    <>
      <ol className='list-none px-2'>
        {users.map((user, i) => (
          <li key={i} className='mb-2'>
            <div className='flex items-center justify-between text-base text-gray-800'>
              {user}
              <ActionIcon variant='subtle' onClick={() => deleteUser(i)}>
                <Trash size={18} strokeWidth={1.5} color={"#bf4040"} />
              </ActionIcon>
            </div>
          </li>
        ))}
      </ol>
    </>
  )
}

export default UserList
