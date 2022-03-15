import React from 'react'
import classes from './Form.module.css'

 function Form() {
    return (
     
 
  <div style={{width:'100%'}}>
      <div className={classes.mainDiv}> 
          <h1>CONTACT NO</h1>
          <div className={classes.mainInput}>
              <div>
                <label htmlFor="">First Name </label><br/>
                <input type="text" />
              </div>
              <div>
              <label htmlFor="">Last Name </label><br/>
                <input type="text" />
              </div>
          </div>
          <div className={classes.mainInput}>
              <div>
                <label htmlFor="">Company Name </label><br/>
                <input type="text" />
              </div>
              <div>
              <label htmlFor="">Job Title </label><br/>
                <input type="text" />
              </div>
          </div>
          <div className={classes.mainInput}>
              <div>
                <label htmlFor="">Email </label><br/>
                <input type="text" />
              </div>
              <div>
              <label htmlFor="">Bussiness </label><br/>
                <input type="text" />
              </div>
         </div>
          <div style={{marginLeft:'1px', width:'100%'}}>
          <label  htmlFor="">Street 1</label><br/>
              <input style={{width:'78%'}} type="text"/>
          </div>
          <div className={classes.mainInput}>
              <div>
                <label htmlFor="">City </label><br/>
                <input type="text" />
              </div>
              <div>
              <label htmlFor="">State Province </label><br/>
                <input type="text" />
              </div>
              <div className={classes.mainInput}>
              <div>
                <label htmlFor="">Zip/Postal Code </label><br/>
                <input type="text" />
              </div>
              <div>
              <label htmlFor="">Country/Region </label><br/>
                <input type="text" />
                
              
          
         </div>
      </div>
      
      </div>
     
              <div style={{marginLeft:'1px', width:'100%'}}>
          <label  htmlFor="">Topic</label><br/>
              <input style={{width:'78%'}} type="text"/>
          </div>
        </div>
  </div>
        
  

    )
}
export default Form;