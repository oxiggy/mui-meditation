import Box from '@mui/system/Box'
import { Redirect, Route, Switch } from 'react-router-dom'
//
import bg from 'assets/background.jpg'
import ContainerPhone from 'components/ContainerPhone/ContainerPhone'
import FirstStep from 'components/Slides/FirstStep'
import SecondStep from 'components/Slides/SecondStep'
import ThirdStep from 'components/Slides/ThirdStep'


const Onboarding = () => {

  return (
    <Box
      height='100%'
      width='100%'
      p={3}
      sx={{
        backgroundColor: '#131345',
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        overflow: 'auto',
        '&::-webkit-scrollbar': {
          width: 16,
          backgroundColor: '#131345',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#274395',
          border: '5px solid #131345',
          borderRadius: 16
        }
      }}
    >
      <ContainerPhone>
        <Switch>
          <Route exact path={'/'} component={FirstStep} />
          <Route path={'/top-goal'} component={SecondStep} />
          <Route path={'/calming-music'} component={ThirdStep} />
          <Redirect to={'/'}/>
        </Switch>
      </ContainerPhone>
    </Box>
  )
}

export default Onboarding