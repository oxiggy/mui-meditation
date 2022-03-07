import Slide from '../Slide/Slide'
import img from 'assets/images/onboarding-relax.jpg'


const SecondStep = () => {
  return (
    <Slide
      step={1}
      title={<>Choose<br/>your<br/>top goal</>}
      text='Practice your breathing, relax your body, listen the calming sound music make you feel better.'
      image={img}
      routeBack={'/'}
      routeNext={'/calming-music'}
      handleLike={() => {}}
      handleSkip={() => {}}
    />
  )
}

export default SecondStep