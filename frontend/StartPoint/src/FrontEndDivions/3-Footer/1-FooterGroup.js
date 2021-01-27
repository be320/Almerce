import React, { useState, useRef } from "react"
import MicRecorder from 'mic-recorder-to-mp3'
import './_Footer.css'
import UploadImage from './UploadImage'
import VoiceNote from './VoiceNote'
import SendArrow from './SendArrow'
import TypeArea from './TypeArea'
import * as ChatBotActions from '../4-Redux/Actions/ChatBotActions'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import UploadImageTab from './UploadImageTab'

const FooterContainer = (props) => {
  const inputRef = useRef();
  const InitialAudioState = {
    isRecording: false,
    blobURL: '',
    };

  const [TextField, setTextField] = useState('');
  const [AudioState, setAudioState] = useState(InitialAudioState);

  const Mp3Recorder = React.useMemo(() => new MicRecorder({
    bitRate: 128
  }), []);

 

//---------------------------------Image--------------------------------------
  const handleImageSubmit = (event) => {
   
    props.actions.clientSideActions.sendSelectedImages(
      {
        
          elementType: 'ImageTemplate',
          serverSide: false,
          imageList: props.selectedImages,
          index:props.refIndex.current.index+=1
        
      }
      )
  }
  
  const handleImageInput = (event) => {
    var listOfImages=[]
    var count = props.selectedImages.length 

    Array.from(event.target.files).forEach(item => {
      listOfImages.push( {imageURL:URL.createObjectURL(item),
        idValue:count++}) });

    props.actions.clientSideActions.updateImagesList(
          {
            listOfImages: listOfImages,
          }
    )
    event.target.value='';  
  }

  const removeSelectedImage=(event)=>{
    props.actions.clientSideActions.removeImages(
      {
        idValue: event.target.getAttribute("idValue")
      }
    )
  }


  //---------------------------------Audio--------------------------------------
  const start = () => {
       Mp3Recorder.start().then(() => {
       setAudioState({isRecording : true , blobURL : ''});
      }).catch((e) => console.error(e)); 
  };
  
  const DeleteVN = () => //user clicked X button
  {
    Mp3Recorder.stop()
    setAudioState(InitialAudioState);

  };

  const handleAudioSubmit = (event) => {
    event.preventDefault();
    Mp3Recorder
    .stop()
    .getMp3()
    .then(([buffer, blob]) => {
      debugger
      const bu = URL.createObjectURL(blob);
        props.actions.clientSideActions.sendAudioMessage(
          {
            elementType: 'AudioTemplate', 
            audio: { isRecording: false, blobURL :bu },
            index:props.refIndex.current.index+=1
          }
        );  
      setAudioState(InitialAudioState);
    }).catch((e) => { 
      console.log(e)
    });  
    }
  //---------------------------------Text--------------------------------------
  const handleTextChange = (event) => {
    setTextField(event.target.value);
  }

  const onHeightChange = (height) => {
    props.actions.clientSideActions.sendWindowHeight(
      {
        height: height+8
      }
    );
  }
  
  const onEnterPress = (e) => {
    if(e.key === "Enter") {
      handleTextSubmit(e);
    }
  }

  const handleTextSubmit = (event) => {
    event.preventDefault();

    // props.actions.clientSideActions.sendTemplate(
    //   {
    //     elementType:"ProductCardTemplate",
    //     cards:[{ imgSrc :"https://safwatoys.com/image/cache/catalog/W50-2/x122c5919-e115-43fc-a6c8-d283ce0ffb72-230x230.jpg.pagespeed.ic.ZrBiS-lubg.webp",ProductUrl:"https://safwatoys.com/index.php?route=product/product&product_id=1049",productHeader:"لوحة تلوين بالرمل W50-2",productParagraph:"لوحة معها رمل ملون يقوم الطفل بلصقها ف مكانها المناسب حسب الصورة الملونة لتتحول الي صوره ملونه بشكل مميز ينمي العضلات الدقيقة واصابع اليد ومهارات التحكم تزيد ثقة الطفل بنفسه متاح عدة اشكال تساعد في تمييز الطفل للالوان وتنميه مهاره المطابقة مناسبه للاطفال فرط الحركه مناسب لسن 4 سنين"
    // ,id:"78"},{ imgSrc :"https://safwatoys.com/image/cache/catalog/W50-2/x122c5919-e115-43fc-a6c8-d283ce0ffb72-230x230.jpg.pagespeed.ic.ZrBiS-lubg.webp",ProductUrl:"https://safwatoys.com/index.php?route=product/product&product_id=1049",productHeader:"لوحة تلوين بالرمل W50-2",productParagraph:"لوحة معها رمل ملون يقوم الطفل بلصقها ف مكانها المناسب حسب الصورة الملونة لتتحول الي صوره ملونه بشكل مميز ينمي العضلات الدقيقة واصابع اليد ومهارات التحكم تزيد ثقة الطفل بنفسه متاح عدة اشكال تساعد في تمييز الطفل للالوان وتنميه مهاره المطابقة مناسبه للاطفال فرط الحركه مناسب لسن 4 سنين"
    // ,id:"78"},{ imgSrc :"https://safwatoys.com/image/cache/catalog/W50-2/x122c5919-e115-43fc-a6c8-d283ce0ffb72-230x230.jpg.pagespeed.ic.ZrBiS-lubg.webp",ProductUrl:"https://safwatoys.com/index.php?route=product/product&product_id=1049",productHeader:"لوحة تلوين بالرمل W50-2",productParagraph:"لوحة معها رمل ملون يقوم الطفل بلصقها ف مكانها المناسب حسب الصورة الملونة لتتحول الي صوره ملونه بشكل مميز ينمي العضلات الدقيقة واصابع اليد ومهارات التحكم تزيد ثقة الطفل بنفسه متاح عدة اشكال تساعد في تمييز الطفل للالوان وتنميه مهاره المطابقة مناسبه للاطفال فرط الحركه مناسب لسن 4 سنين"
    // ,id:"78"},{ imgSrc :"https://safwatoys.com/image/cache/catalog/W50-2/x122c5919-e115-43fc-a6c8-d283ce0ffb72-230x230.jpg.pagespeed.ic.ZrBiS-lubg.webp",ProductUrl:"https://safwatoys.com/index.php?route=product/product&product_id=1049",productHeader:"لوحة تلوين بالرمل W50-2",productParagraph:"لوحة معها رمل ملون يقوم الطفل بلصقها ف مكانها المناسب حسب الصورة الملونة لتتحول الي صوره ملونه بشكل مميز ينمي العضلات الدقيقة واصابع اليد ومهارات التحكم تزيد ثقة الطفل بنفسه متاح عدة اشكال تساعد في تمييز الطفل للالوان وتنميه مهاره المطابقة مناسبه للاطفال فرط الحركه مناسب لسن 4 سنين"
    // ,id:"78"},{ imgSrc :"https://safwatoys.com/image/cache/catalog/W50-2/x122c5919-e115-43fc-a6c8-d283ce0ffb72-230x230.jpg.pagespeed.ic.ZrBiS-lubg.webp",ProductUrl:"https://safwatoys.com/index.php?route=product/product&product_id=1049",productHeader:"لوحة تلوين بالرمل W50-2",productParagraph:"لوحة معها رمل ملون يقوم الطفل بلصقها ف مكانها المناسب حسب الصورة الملونة لتتحول الي صوره ملونه بشكل مميز ينمي العضلات الدقيقة واصابع اليد ومهارات التحكم تزيد ثقة الطفل بنفسه متاح عدة اشكال تساعد في تمييز الطفل للالوان وتنميه مهاره المطابقة مناسبه للاطفال فرط الحركه مناسب لسن 4 سنين"
    // ,id:"78"}]		
    // }
    //   );

    // props.actions.clientSideActions.sendTemplate(
    //   {
    //   message:{TextField:"اللعبة ديه لولد ولا بنت؟"},
    //   elementType:'ChoiceTemplate',
    //   choices:["بنت","ولد","نتالا","للااتى","gvh","بنت","ولد","نتالا","للااتى","gvh"]
    //   }
    // );

    if (TextField !== '') {
    
      props.actions.clientSideActions.sendTemplate(
        {
          elementType: 'MessageTemplate',
          serverSide: false,
          message: { TextField },
          index:props.refIndex.current.index+=1

        }
      );
    }
    else {
      //focus type area 
      inputRef.current.focus();
    }
    setTextField('');
  }
  
  return <>
  {props.selectedImages.length!==0 ? 
   <UploadImageTab
    handleImageSubmit={handleImageSubmit} 
    removeSelectedImage={removeSelectedImage}/>:''
  }
  <div className="footer d-flex flex-row justify-content-start align-items-end">
      <form>
        <UploadImage imagesLength={props.selectedImages.length} handleImageInput={handleImageInput} />
      </form>

      <form onSubmit={handleAudioSubmit} >
        <VoiceNote AudioState={AudioState} start={start} DeleteVN={DeleteVN}/>
      </form>

      <form onKeyDown={onEnterPress} className="d-flex flex-row align-items-end" onSubmit={handleTextSubmit}>
        <TypeArea inputRef={inputRef} TextField={TextField} handleTextChange={handleTextChange}
          onHeightChange={onHeightChange} />
        {/* <Emoji TextField={TextField} setTextField={setTextField}/> */}
        <SendArrow TextField={TextField} />
      </form>
    </div>
 
  </>
}

// this function map the component with the actions
//so this will be passed to this component via props as if the store 
//is the parent of this component.
const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      clientSideActions: bindActionCreators(ChatBotActions, dispatch),
    },
  };
}

const mapStateToProps =(state)=>{
  return {
    selectedImages: state[1],
    footerHeight: state[0],
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FooterContainer);