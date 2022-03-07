import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

const PrimaryButton = styled(Button)(({ theme }) => ({
  padding: '16px 24px',
  fontSize: 16,
  lineHeight: '100%',
  color: '#fff',
  borderRadius: 20,
  background: `linear-gradient(200.42deg, ${theme.palette.primary.light} 10%, ${theme.palette.primary.dark} 100%)`,
  '&:hover': {
    background: `linear-gradient(200.42deg, ${theme.palette.primary.light} 10%, ${theme.palette.primary.dark} 90%)`,
  },
  '&:active': {
    background: `linear-gradient(200.42deg, ${theme.palette.primary.light} 10%, ${theme.palette.primary.dark} 80%)`,
  }
}))

export default function StyledCustomization({...otherProps}) {
  return <PrimaryButton disableRipple {...otherProps} />;
}
