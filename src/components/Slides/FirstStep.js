import Slide from '../Slide/Slide'
import img from 'assets/images/onboarding-meditation.jpg'


const FirstStep = () => {
  return (
    <Slide
      step={0}
      title={<>30 days<br/>Meditation<br/>Challenge</>}
      text='100+ guided meditations covering anxiety, focus, stress, gratitude and more.'
      image={img}
      routeNext={'/top-goal'}
      handleClose={() => {}}
      handleLike={() => {}}
      handleSkip={() => {}}
    />
  )
}

export default FirstStep