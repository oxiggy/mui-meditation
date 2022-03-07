import BasePaper  from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

const Paper = styled(({...props}) => (
  <BasePaper {...props} />
))({
  background: 'linear-gradient(86.16deg, rgba(255, 255, 255, 0.1) 11.14%, rgba(255, 255, 255, 0.05) 113.29%)',
  backdropFilter: 'blur(25px)',
  border: '3px solid rgba(255, 255, 255, 0.15)',
  boxShadow: '10px 10px 60px -8px rgb(0 0 0 / 20%)',
  borderRadius: '40px',
})

export default Paper