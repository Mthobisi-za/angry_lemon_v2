function Chats(data){
    console.log(data)
    return(
        <>
        
                <div className="top_chat">
                <p className="top_title_chat">Angry version:</p>
                <p className="chat_text">
                    {data.data.q}
                </p>
              </div>
              <div className="bottom_chats">
                <div className="copy_clipboard">
                  <div className="child"><p className="bottom_title_chat">De-angrified version:</p></div>
                  <div className="child second_child">
                    <img src={require('./images/copy.png')} alt="" />
                  </div>
                </div>
               <p className="chat_text">
                    {data.data.a}
                </p>
              </div>
          
        </>
    )
}


export default Chats