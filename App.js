import { ActivityIndicatorRN } from './corecomponents/ActivityIndicatorComponent';
import { AlertAPIComponent } from './corecomponents/AlertComponent';
import { ButtonRN } from './corecomponents/ButtonComponent';
import { GreetArrowCompo, GreetFuncComp } from './corecomponents/Greet';
import { ImageBGCompRN } from './corecomponents/ImageBackground';
import { ImageCompRN } from './corecomponents/ImageComponent';
import { ModalRN } from './corecomponents/ModalComponent';
import { PressableRN } from './corecomponents/PressableComponent';
import { ScrollViewRN } from './corecomponents/ScollViewComponent';
import { StatusBarRN } from './corecomponents/StatusBarComponent';
import { TextCompRN } from './corecomponents/TextComponent';
import { ViewCompRN } from './corecomponents/ViewComponent';
import { DynamicUIDimensionAPIUseState } from './dimensions/DynamicUIDimensionWithUseState';
import { DynamicUIDimensionAPI } from './dimensions/DynamicUIWithDimensionAPI';
import { DynamicUI } from './dimensions/DynamicUserInterface';
import { LayoutCodeEvol } from './layout/26_CodeSetup';
import AbsoluteAndRelativePositionLayout from './layout/AbsoluteAndRelative';
import { AlignContentLayout } from './layout/AlignContent';
import { AlignItemsLayout } from './layout/AlignItems';
import { AlignSelfLayout } from './layout/AlignSelf';
import { Flex } from './layout/Flex';
import { FlexBasisGrowShrink } from './layout/FlexBasisGrowShrink';
import { FlexDirectionBasics } from './layout/FlexDirection';
import FlexWrapLayout from './layout/FlexWrap';
import RowGapAndColumnGap from './layout/Gaps';
import WidthHeightBasics from './layout/HeightAndWidth';
import { JustifyContentBasics } from './layout/JustifyContent';
import { BoxModelRN } from './styles/BoxModel';
import { BoxShadowRN } from './styles/BoxShadow';
import FlexDimensionsBasics, { FixedDimensionsBasics, PercentageDimensionsBasics } from './styles/HeightAndWidthStyle';
import { MultipleStyles } from './styles/MultipleStyles';
import { StyleInheritance } from './styles/StyleInheritance';

export default function App() {


  return (


    /*
     * Core Components And APIS
    */


    // <ViewCompRN/>
    // <TextCompRN/>
    // <ImageCompRN/>
    // <ImageBGCompRN/>
    // <ScrollViewRN></ScrollViewRN>
    // <ButtonRN/>
    // <PressableRN></PressableRN>
    // <ModalRN></ModalRN>
    // <StatusBarRN/>
    // <ActivityIndicatorRN></ActivityIndicatorRN>
    // <AlertAPIComponent />

    // <>
    //   <GreetArrowCompo name="Awinas"></GreetArrowCompo>
    //   <GreetFuncComp name="Kannan"></GreetFuncComp>
    // </>


    /*
     * Styles and StyleSheet API
     */

    // <FixedDimensionsBasics></FixedDimensionsBasics>
    // <FlexDimensionsBasics/>
    // <PercentageDimensionsBasics/>

    // <MultipleStyles></MultipleStyles>
    // <BoxModelRN></BoxModelRN>
    // <BoxShadowRN/>
    // <StyleInheritance/>

    /*
    * FlexBox
    */
  //  <LayoutCodeEvol></LayoutCodeEvol>
  //  <Flex></Flex>
  //  <FlexDirectionBasics/>
    // <JustifyContentBasics></JustifyContentBasics>
    // <AlignItemsLayout></AlignItemsLayout>
    // <AlignSelfLayout/>
    // <AlignContentLayout/>
    // <FlexWrapLayout/>
    // <RowGapAndColumnGap/>
    // <FlexBasisGrowShrink/>
    // <WidthHeightBasics/>
    // <AbsoluteAndRelativePositionLayout/>

    /*
    * Dynamic UI
    */
 
    // <DynamicUI/>
    // <DynamicUIDimensionAPI/>
    <DynamicUIDimensionAPIUseState></DynamicUIDimensionAPIUseState>

  );
};
