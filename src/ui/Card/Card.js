import BasePaper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

const Card = styled(({ ...props}) => (
  <BasePaper {...props} />
))({
  background: 'linear-gradient(181.35deg, rgba(255, 255, 255, 0.5) 1.15%, rgba(255, 255, 255, 0) 98.91%)',
  backdropFilter: 'blur(25px)',
  border: '3px solid rgba(255, 255, 255, 0.15)',
  boxShadow: 'none',
  borderRadius: '30px',
})

export default Card
