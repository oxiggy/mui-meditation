import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { NavLink } from 'react-router-dom'
//
import Card from 'ui/Card/Card'
import DotsStepper from 'ui/DotsStepper/DotsStepper'
import PrimaryButton from 'ui/PrimaryButton/PrimaryButton'
import SecondaryButton from 'ui/SecondaryButton/SecondaryButton'
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg'
import { ReactComponent as BackIcon } from 'assets/icons/back.svg'
import { ReactComponent as LikeIcon } from 'assets/icons/like.svg'


const Slide = (props) => {
  const { title, text, image, imageAlt = 'image', step, routeNext = null, routeBack = null, handleClose, handleLike, handleSkip, handleFinish } = props

  return (
    <Box width='100%' pb='44px'>
      <Box display='flex' justifyContent='space-between'>
        {!!handleClose && (
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        )}
        {!!routeBack && (
          <IconButton component={NavLink} to={routeBack}>
            <BackIcon />
          </IconButton>
        )}
        {!!handleLike && (
          <IconButton onClick={handleLike}>
           <LikeIcon />
          </IconButton>
        )}
      </Box>
      <Box
        component={'img'}
        src={image}
        alt={imageAlt}
        sx={{
          display: 'block',
          width: 300,
          height: 300,
          borderRadius: '50%',
          backgroundColor: 'rgba(0,0,0,.2)',
          mx: 'auto',
          my: '32px'
        }}
      />
      <Card
        component={Box}
        width={330}
        minHeight={320}
        mx='auto'
        p='30px'
      >
        <Typography component='h1' variant='title'>
          {title}
        </Typography>
        <Typography variant='body1' color='text.secondary' pt={2}>
          {text}
        </Typography>
        <Box
          display='flex'
          justifyContent='space-between'
          py={2}
        >
          {!!handleFinish ? (
            <PrimaryButton fullWidth>Get Started</PrimaryButton>
          ) : (
            <>
              <Button color='secondary' onClick={handleSkip}>Skip</Button>
              <SecondaryButton component={NavLink} to={routeNext}>Next</SecondaryButton>
            </>
          )}
        </Box>
        <DotsStepper value={3} active={step} />
      </Card>
    </Box>
  )
}

export default Slide