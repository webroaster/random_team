import { NumberInput } from "@mantine/core"

const TeamNum = ({ teamNumber, setTeamNumber }) => {
  return (
    <div className='flex flex-row items-end justify-center w-[100%]'>
      <NumberInput
        placeholder='組数'
        size='md'
        className='block w-[100%]'
        value={teamNumber}
        onChange={setTeamNumber}
        min={1}
      />
      <span className='block ml-4 text-sm'>組</span>
    </div>
  )
}

export default TeamNum
