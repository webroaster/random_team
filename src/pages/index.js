import { useState } from "react"
import CalcTeam from "../components/CalcTeam"
import Layout from "../components/Layout"
import NameInput from "../components/NameInput"
import Result from "../components/Result"
import TeamNum from "../components/TeamNum"
import UserList from "../components/UserList"

export default function Home() {
  const [users, setUsers] = useState([])
  const [teamNumber, setTeamNumber] = useState(2)

  const shuffle = () => {
    const iterator = users.concat()
    const newUsers = []
    for (let i = iterator.length; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * i)
      newUsers.push(iterator[randomIndex])
      iterator.splice(randomIndex, 1)
    }
    return newUsers
  }

  const createTeam = () => {
    const shuffledUsers = shuffle(users)
    const teams = Array.from({ length: teamNumber }, () => [])
    for (let i = 0; i < shuffledUsers.length; i++) {
      const teamIndex = i % teamNumber
      teams[teamIndex].push(shuffledUsers[i])
    }
    return teams
  }

  return (
    <Layout>
      <h1 className='text-gray-800'>サクッとチーム錬成</h1>
      <TeamNum teamNumber={teamNumber} setTeamNumber={setTeamNumber} />
      <NameInput users={users} setUsers={setUsers} />
      <UserList users={users} setUsers={setUsers} />

      <CalcTeam createTeam={createTeam} users={users} />
    </Layout>
  )
}
