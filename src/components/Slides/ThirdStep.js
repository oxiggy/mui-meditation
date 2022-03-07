import Slide from '../Slide/Slide'
import img from 'assets/images/onboarding-balance.jpg'


const ThirdStep = () => {
  return (
    <Slide
      step={2}
      title={<>Listen the<br/>calming music<br/>help you sleep</>}
      text='50+ music with the calming sound help you to fall asleep faster. Calm can change your life.'
      image={img}
      routeBack={'/top-goal'}
      handleLike={() => {}}
      handleSkip={() => {}}
      handleFinish={() => {}}
    />
  )
}

export default ThirdStep