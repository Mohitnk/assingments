import React from 'react'
import classes from "./Card.module.css"


 function Card() {
    return (
        <div className={classes.container}>
            <div style={{padding:"90px"}}>
               <div  className={classes.mainDiv}>
                    <h5>5 Birthday today</h5>
                    <div style={{display:"flex"}}>
                        <div>
                            <img src="https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg" alt=" Dhoni" />
                        </div>
                        <div>
                            <p>Dhoni <br /> <span>29 years</span>  </p>
                            
                        </div>

                    </div>
                    <div style={{display:"flex"}}>
                    <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvd5x_MPAo1M9M3JeuHiT_2okTWkCLhNdZnQ&usqp=CAU" alt=" Yuvraj singh" />
                        </div>
                        <div>
                            <p>Yuvraj Singh <br /> <span>32 years</span>  </p>
                            
                        </div>
                    </div>
                    <div style={{display:"flex"}}>
                    <div>
                            
                            <img src="data:image/jpeg;base64,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" alt=" Dhoni" />
                        </div>
                        <div>
                            <p>Sachin tendulkar <br /> <span> 38 years</span>  </p>
                            
                        </div>
                    </div>
                    <div style={{display:"flex"}}>
                    <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKFWz0pUt5FP7K6jeQZ8YOaO0YTrVlZnbj1Q&usqp=CAU" alt=" Sachin" />
                        </div>
                        <div>
                            <p>Virender Sehwag <br /> <span>35 years</span>  </p>
                            
                        </div>
                    </div>
                    <div style={{display:"flex"}}>
                    <div>
                            <img src="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQ21dCAz7ZagwiwjBqCKcgyE1mQbrEwxYJw9Npwg5iRX0aok3UKaFNnA9nbJLAK" alt=" Rahul Sharad Dravid" />
                        </div>
                        <div>
                            <p>Rahul Sharad Dravid <br /> <span>45 years</span>  </p>
                            
                        </div>
                    </div>
                    <div style={{textAlign:'center', padding:'14px'}}>
                        <button className={classes.Cbutton}>Clear All</button>
                    </div>
            </div>
            
            </div>           
        </div>
    )
}
export default Card;