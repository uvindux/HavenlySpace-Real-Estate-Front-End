import React, { useState } from 'react'
import './Chat.scss'

function Chat() {
          const [Chat, setChat] = useState(true);
  return (
            <div className='chat'>
                      
                      <div className="messages">
                                <h1>Messages</h1>

                                <div className="message">
                                          <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267" alt="" srcset="" />
                                          <span>Joen doe</span>
                                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A eligendi itaque ad doloribus et ratione rem quos accusamus ex iusto? Fugit, dolorem modi! Libero harum blanditiis excepturi quo ducimus soluta?</p>
                                          
                                </div>
                                <div className="message" onClick={()=>setChat(true)}>
                                          <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267" alt="" srcset="" />
                                          <span>Joen doe</span>
                                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A eligendi itaque ad doloribus et ratione rem quos accusamus ex iusto? Fugit, dolorem modi! Libero harum blanditiis excepturi quo ducimus soluta?</p>

                                </div>
                                <div className="message">
                                          <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267" alt="" srcset="" />
                                          <span>Joen doe</span>
                                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A eligendi itaque ad doloribus et ratione rem quos accusamus ex iusto? Fugit, dolorem modi! Libero harum blanditiis excepturi quo ducimus soluta?</p>

                                </div>
                                <div className="message">
                                          <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267" alt="" srcset="" />
                                          <span>Joen doe</span>
                                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A eligendi itaque ad doloribus et ratione rem quos accusamus ex iusto? Fugit, dolorem modi! Libero harum blanditiis excepturi quo ducimus soluta?</p>

                                </div>
                                <div className="message">
                                          <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267" alt="" srcset="" />
                                          <span>Joen doe</span>
                                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A eligendi itaque ad doloribus et ratione rem quos accusamus ex iusto? Fugit, dolorem modi! Libero harum blanditiis excepturi quo ducimus soluta?</p>

                                </div>

                                {Chat && (
                                          <div className="chatBox">
                                                    <div className="top">
                                                    
                                                              <div className="user">
                                                                        <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267" alt="" srcset="" />
                                                                        john doe
                                                              </div>
                                                              <span className="close" onClick={()=>setChat(false)}>X</span>
                                                    
                                                    </div>
                                                    <div className="center">
                                                              <div className="chatMessage own ">
                                                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod corrupti laborum aliquam incidunt illo sunt deleniti, nobis modi, sequi cumque suscipit enim accusamus ex velit rem cupiditate doloremque distinctio repellat.</p>
                                                                        <span>1 hour ago</span>
                                                              </div>
                                                              <div className="chatMessage">
                                                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod corrupti laborum aliquam incidunt illo sunt deleniti, nobis modi, sequi cumque suscipit enim accusamus ex velit rem cupiditate doloremque distinctio repellat.</p>
                                                                        <span>1 hour ago</span>
                                                              </div>
                                                              <div className="chatMessage">
                                                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod corrupti laborum aliquam incidunt illo sunt deleniti, nobis modi, sequi cumque suscipit enim accusamus ex velit rem cupiditate doloremque distinctio repellat.</p>
                                                                        <span>1 hour ago</span>
                                                              </div>
                                                              <div className="chatMessage own">
                                                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod corrupti laborum aliquam incidunt illo sunt deleniti, nobis modi, sequi cumque suscipit enim accusamus ex velit rem cupiditate doloremque distinctio repellat.</p>
                                                                        <span>1 hour ago</span>
                                                              </div>
                                                              <div className="chatMessage own">
                                                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod corrupti laborum aliquam incidunt illo sunt deleniti, nobis modi, sequi cumque suscipit enim accusamus ex velit rem cupiditate doloremque distinctio repellat.</p>
                                                                        <span>1 hour ago</span>
                                                              </div>
                                                    
                                                    </div>
                                                    <div className="bottom">
                                                    
                                                              <textarea ></textarea>
                                                              <button className='send'>Send</button>
                                                    
                                                    </div>
                                          </div>
                                )}
                      </div>
      
    </div>
  )
}

export default Chat
