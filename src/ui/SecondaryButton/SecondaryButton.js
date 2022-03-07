import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

const SecondaryButton = styled(Button)({
  padding: '16px 24px',
  fontSize: 16,
  lineHeight: '100%',
  color: '#000',
  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.6) 100%)',
  borderRadius: 20,
  border: '2px solid #fff', '&:hover': {
    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(220, 220, 220, 0.6) 100%)',
  },
  '&:active': {
    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(200, 220, 200, 0.6) 100%)',
  }
})

export default function StyledCustomization({...otherProps}) {
  return <SecondaryButton disableRipple {...otherProps} />;
}
