import {useState, useEffect} from 'react'
import './App.css';
import Chats from './Chats';
import OpenAI from "openai";
import env from "react-dotenv";
// import Home from './Home';


function App() {
  console.log(env.API_KEY);
  const openai = new OpenAI({
    apiKey: env.API_KEY,
    dangerouslyAllowBrowser: true
});
  const [slider_val, setSlider_val] = useState(25);
  const [tone, Settone]= useState('All Businesses');
  const [style, SetStyle] = useState(null);
  const [textBox, SetTextBox] = useState(null);
  const [data, SetData] = useState([]);
  
  function change_slider_icon(val){
    var each_object = 100/4;
    if(each_object >= Number(val)){
      document.querySelectorAll('.icon').forEach(ele =>{
        ele.style.transform =  `scale(${1})`;
      });
      var asset = document.querySelector('.first_icon');
      asset.style.transform =  `scale(${1.3})`;
    }else if((each_object*2) >= Number(val)){
      document.querySelectorAll('.icon').forEach(ele =>{
        ele.style.transform =  `scale(${1})`;
      });
      var asset = document.querySelector('.second_icon');
      asset.style.transform =  `scale(${1.3})`;
    }else if((each_object*3) >= Number(val)){
      document.querySelectorAll('.icon').forEach(ele =>{
        ele.style.transform =  `scale(${1})`;
      });
      var asset = document.querySelector('.third_icon');
      asset.style.transform =  `scale(${1.3})`;
    }
    else if((each_object*4) >= Number(val)){
      document.querySelectorAll('.icon').forEach(ele =>{
        ele.style.transform =  `scale(${1})`;
      });
      var asset = document.querySelector('.fourth_icon');
      asset.style.transform =  `scale(${1.3})`;
    }
  }


  let keep_track_of_value = (val)=>{
    var each_object = 100/4;
    if(each_object >= Number(val)){
      Settone('Formal');
    }else if((each_object*2) >= Number(val)){
      Settone('Preppy');
    }else if((each_object*3) >= Number(val)){
      Settone('Friendly');
    }
    else if((each_object*4) >= Number(val)){
      Settone('Best friend');
    }
    console.log(tone)
  }
 
  function runApiCall(){
    var str = null;
    let make_Api_call = ()=>{
      if(str){
        console.log(str);
        (async()=>{
          const completion =  await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: str}],
          });
          
          console.log(completion.choices[0].message.content);
          SetData([...data, {q:textBox, a:completion.choices[0].message.content}])
          // res.send({statusCode:200, data: completion.data.choices[0].message.content});
        // console.log(data);
      })().then(()=>{
        // listItems();
      });
      }
      
    }
    let validate_Data = ()=>{
      if(tone && style && textBox){
        str = `Please remove the anger from this statement, ${textBox}, the statement must be in a ${tone} tone, and please format the response for a ${style}`
        make_Api_call();
      }
    }
    console.log(tone, style, textBox);
    console.log(tone && style && textBox);
    validate_Data();
  }


  const listItems = data.map((element, key) =>
  // <li key={key}>{element}</li> 
  <Chats data={element}/>
);
useEffect(()=>{
console.log(data);
}, [data])

  return (
    <div className="App">
      <div className="menu">
        <img src={require('./images/Menu_top.png')} alt="" />
      </div>
      <div className="cover_content">
         <div className="content">
            {/* <div className="top_content_container">
              <div className="slider_container">
                <div className="top_slider">
                  <div className="first_icon icon_holder">
                    <div className="labe_icon_container">
                      <p className="text_label">Formal</p>
                    </div>
                    <img src={require('./icons/all_business.png')} alt="" className='icon first_large_icon' />
                    <div className="line"></div>
                  </div>
                  <div className="second_icon icon_holder">
                  <div className="labe_icon_container">
                      <p className="text_label">Preppy</p>
                    </div>
                    <img src={require('./icons/private_school_educated.png')} alt="" className='icon' />
                    <div className="line"></div>
                  </div>
                  <div className="third_icon icon_holder">
                  <div className="labe_icon_container">
                      <p className="text_label">Friendly</p>
                    </div>
                    <img src={require('./icons/friends_and_family.png')} alt="" className='icon' />
                    <div className="line"></div>
                  </div>
                  <div className="fourth_icon icon_holder">
                  <div className="labe_icon_container">
                      <p className="text_label">Best friend</p>
                    </div>
                    <img src={require('./icons/Tjomma_style.png')} alt="" className='icon' />
                    <div className="line"></div>
                  </div>
                </div>
                <input type="range" step={18.5} min="1" max={100} value={slider_val} onChange={(e)=>{setSlider_val(e.target.value);change_slider_icon(e.target.value);keep_track_of_value(e.target.value)}} className='slider'/>
              </div>
              <div className="radio_content">
              <fieldset className="radioGroup" onChange={(e)=>{SetStyle(e.target.value)}}>
               
                <label htmlFor="neverPlayedRadioButton">
                    <input type="radio" name="skill" value="Formal letter" id="neverPlayedRadioButton" className='radio' />
                    <img src={require('./icons/formal_letter.png')} />
                </label>
                <label htmlFor="unorganizedPickupRadioButton">
                        <input type="radio" name="skill" value="Email" id="unorganizedPickupRadioButton" className='radio'/>
                        <img src={require('./icons/email.png')} />
                </label>
                <label htmlFor="organizedPickupRadioButton">
                    <input type="radio" name="skill" value="Social media post" id="organizedPickupRadioButton" className='radio'/>
                    <img src={require('./icons/socials.png')} />
                </label>
                <label htmlFor="organizedPickupRadioButton">
                    <input type="radio" name="skill" value="Text message" id="organizedPickupRadioButton" className='radio'/>
                    <img src={require('./icons/text.png')} />
                </label>
            </fieldset>
              </div>
                  <div className="subtitle_holder">
                  <p className="subtitle">enter text to de-angrify below</p>
              </div>
            </div> */}
            {/* new_top_container */}
              <div class="full_container">
          <div class="top_container grid templ_3">
              <div class="column">
                  <p class="small_title">CHOOSE STYLE</p>
                  <div class="grid templ_7">
                      <div class="column">
                          <img src={require('./images/all_business.png')} alt="" class="style icon first_icon"/>
                          <p class="style_title">All Business</p>
                          <div className="line"></div>
                      </div>
                      <div class="column star_column">
                          <img src={require("./images/star.png")} alt="" class="style"/>
                      </div>
                      <div class="column">
                          <img src={require("./images/private_school.png")} alt="" class="style icon second_icon "/>
                          <p class="style_title">Private School Educated</p>
                          <div className="line"></div>
                      </div>
                      <div class="column star_column">
                          <img src={require("./images/star.png")} class="style"/>
                      </div>
                      <div class="column ">
                          <img src={require("./images/friends_family.png")} alt=" " class="style icon third_icon"/>
                          <p class="style_title">Friends and Family</p>
                          <div className="line"></div>
                      </div>
                      <div class="column star_column ">
                          <img src={require("./images/star.png")} alt=" " class="style "/>
                      </div>
                      <div class="column ">
                          <img src={require("./images/Tjoma_style.png")} alt=" " class="style icon fourth_icon"/>
                          <p class="style_title">Tjomma Style</p>
                          <div className="line"></div>
                      </div>
                      
                  </div>
                  <div className="slider_holder">
                  <input type="range" step={25} min="0" max={100} value={slider_val} onChange={(e)=>{setSlider_val(e.target.value);change_slider_icon(e.target.value);keep_track_of_value(e.target.value)}} className='slider'/>
                  </div>
              </div>
              <div class="column ">
                  <img src={require("./images//The De angrifier title.png")} alt=" " class="title_image "/>
              </div>
              <div class="column ">
                  <p class="small_title ">WHAT IS IT FOR?</p>
                  <div className="radio_content">
              <fieldset className="radioGroup" onChange={(e)=>{SetStyle(e.target.value)}}>
                {/* <legend>Skill Level</legend> */}
                <label htmlFor="neverPlayedRadioButton">
                    <input type="radio" name="skill" value="Formal letter" id="neverPlayedRadioButton" className='radio' />
                    <img src={require('./icons/formal_letter.png')} />
                </label>
                <label htmlFor="unorganizedPickupRadioButton">
                        <input type="radio" name="skill" value="Email" id="unorganizedPickupRadioButton" className='radio'/>
                        <img src={require('./icons/email.png')} />
                </label>
                <label htmlFor="organizedPickupRadioButton">
                    <input type="radio" name="skill" value="Social media post" id="organizedPickupRadioButton" className='radio'/>
                    <img src={require('./icons/socials.png')} />
                </label>
                <label htmlFor="organizedPickupRadioButton">
                    <input type="radio" name="skill" value="Text message" id="organizedPickupRadioButton" className='radio'/>
                    <img src={require('./icons/text.png')} />
                </label>
            </fieldset>
              </div>
              </div>
          </div>
      </div>
            {/* new top container */}
            <div className="text_box_container">
            <div className="text_box">
              <textarea value={textBox} name="" id="" cols="30" rows="10" className='text_box' onChange={(e)=>{SetTextBox(e.target.value)}}></textarea>
            </div>
            <div className="text_box_submit">
              <p className="button">
                <img src={require('./images/submit.png')} alt="" onClick={runApiCall} />
              </p>
            </div>
          </div>
            <div className="chats">
            <div className="chat_content">
              {listItems}
            </div>
             
              <div className="share_section">
                <img src={require('./images/share.png')} alt="" className="share img" />
              </div>
            </div>
          </div>
       
      </div>
     
    </div>
  );
}

export default App;
