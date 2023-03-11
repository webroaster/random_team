import { useDisclosure } from "@mantine/hooks"
import { Modal, Button } from "@mantine/core"
import { CreativeCommonsNd } from "tabler-icons-react"
import Result from "./Result"
import { useState } from "react"

const CalcTeam = ({ createTeam, users }) => {
  const [opened, { open, close }] = useDisclosure(false)
  const [result, setResult] = useState()

  return (
    <>
      <Modal opened={opened} onClose={close}>
        <Modal.Title className='font-bold text-center text-2xl mb-4 text-[#17A9BF]'>
          錬成結果
        </Modal.Title>
        <Result result={result} />
      </Modal>

      <Button
        size='lg'
        color='cyan'
        fullWidth={true}
        leftIcon={
          <CreativeCommonsNd size={24} strokeWidth={1.5} color={"#fff"} />
        }
        disabled={users.length === 0}
        onClick={() => {
          open()
          setResult(createTeam())
        }}
      >
        チーム錬成
      </Button>
    </>
  )
}

export default CalcTeam
