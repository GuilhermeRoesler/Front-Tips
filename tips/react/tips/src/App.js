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
    </>
  );
}

export default App;
