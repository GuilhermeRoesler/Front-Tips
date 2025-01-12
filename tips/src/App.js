import './App.css';
import { useBlurLoad } from './hooks/useBlurLoad';

import GradientButton1 from './components/GradientButton1';
import GradientButton2 from './components/GradientButton2';
import AccentAndCaretColor from './components/AccentAndCaretColor'
import Inset1 from './components/Inset1'
import Inset2 from './components/Inset2'
import OverflowY from './components/OverflowY'
import IconShadow from './components/IconShadow';
import DetailsAndSummary from './components/DetailsAndSummary';
import AutoHide from './components/AutoHide';
import ClipPath from './components/ClipPath';
import DataAttribute from './components/DataAttribute';
import ConicGradient from './components/ConicGradient';
import GradientTextButton from './components/GradientTextButton';
import Isolation from './components/Isolation';
import Filters from './components/Filters';
import GlowingAnimatedBorder from './components/GlowingAnimatedBorder'
import ElementLeftHas from './components/ElementLeftHas';
import MixBlendMode from './components/MixBlendMode';
import EditableElement from './components/EditableElement';
import NthChildPseudoClass from './components/NthChildPseudoClass';
import Loader from './components/Loader';
import Modals from './components/Modals';
import InterpolateSize1 from './components/InterpolateSize1';
import Subgrid from './components/Subgrid';
import UserValidForm from './components/UserValidForm';
import InterpolateSize2 from './components/InterpolateSize2';
import GridWrapping from './components/GridWrapping';
import ImageGallery1 from './components/ImageGallery1';
import CoolAnimations1 from './components/CoolAnimations1';
import ImageGallery2 from './components/ImageGallery2';
import Hover1 from './components/Hover1';
import Hover2 from './components/Hover2';
import RadioButton1 from './components/RadioButton1';
import RadioButton2 from './components/RadioButton2';

function App() {
  useBlurLoad()

  return (
    <>
      <GradientButton1 />
      <GradientButton2 />
      <AccentAndCaretColor />
      <Inset1 />
      <Inset2 />
      <OverflowY />
      <IconShadow />
      <DetailsAndSummary />
      <AutoHide />
      <ClipPath />
      <DataAttribute />
      <ConicGradient />
      <GradientTextButton />
      <Isolation />
      <Filters />
      <GlowingAnimatedBorder />
      <ElementLeftHas />
      <MixBlendMode />
      <EditableElement />
      <NthChildPseudoClass />
      <Loader />
      <Modals />
      <InterpolateSize1 />
      <Subgrid />
      <UserValidForm />
      <InterpolateSize2 />
      <GridWrapping />
      <ImageGallery1 />
      <CoolAnimations1 />
      <ImageGallery2 />
      <Hover1 />
      <Hover2 />
      <RadioButton1 />
      <RadioButton2 />
    </>
  );
}

export default App;
