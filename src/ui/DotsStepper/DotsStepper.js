import { styled } from '@mui/material/styles'

const Step = styled('div')(({ theme }) => {
  return ({
    width: 8,
    height: 8,
    background: theme.palette.divider,
    borderRadius: '50%',
  })
})

const StepContainer = styled('div')({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  gap: '8px',
})

const DotsStepper = ({ value, active }) => {
  const content = []
  for (let i = 0; i < value; i++) {
    content.push(
      <Step key={i} sx={active === i ? { background: '#fff' } : undefined} />
    )
  }

  return (
    <StepContainer>
      {content}
    </StepContainer>
  )
}

export default DotsStepper
