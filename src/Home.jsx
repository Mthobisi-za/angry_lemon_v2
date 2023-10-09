import './Home.css';
function Home(){
return(
    <main>
        <div class="welcome">
        <div class="div_welcome">
            <span>Please insert your username to start using Angry lEMON</span>
            <input type="text" placeholder="Insert Username" class="name"/>
            <button onclick="setUsername()">SUBMIT</button>
        </div>
    </div>
    <br/> 
    <h1 class="title">CHATGPT DEMO</h1>
    <br/> <br/>
    <div class="box">
        
        <div class="top"><h1 class="sub_title">Chat History</h1>
            <div class="content">
                {/* <!-- <div class="text">
                    <span class="span_title">CHATGPT</span>
                    <span class="span_content">Angry Lemon Angry Lemon</span>
                </div> <br> <br>
                <div class="text">
                    <span class="span_title">CHATGPT</span>
                    <span class="span_content">Angry Lemon Angry Lemon</span>
                </div>
                <br> <br>
                <div class="text">
                    <span class="span_title">CHATGPT</span>
                    <span class="span_content">Angry Lemon Angry Lemon</span>
                </div>
                <br> <br>
                <div class="text">
                    <span class="span_title">CHATGPT</span>
                    <span class="span_content">Angry Lemon Angry Lemon</span>
                </div> --> */}
                
            </div>
            <div class="loader-container">
                <span class="loader"></span>
            </div>
            <br/>
        </div>
        <div class="bottom">
            <textarea name="" id="" cols="30" rows="10" placeholder="Your question?" class="text_area"></textarea>
        
        <br/>
        <div class="btns">
            <button class="send"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-send" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M10 14l11 -11" />
                <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
              </svg></button>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-share" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M8.7 10.7l6.6 -3.4" />
                    <path d="M8.7 13.3l6.6 3.4" />
                  </svg>
              </button>
        </div>
    </div>
    </div>
    </main>
)
}
export default Home;