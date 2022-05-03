import React from 'react'
import './Figma.css'
import { MdArrowDropDown } from "react-icons/md";
import { BsCart  } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillPersonFill,BsFacebook,BsTwitter } from "react-icons/bs";
import {AiFillStar}  from "react-icons/ai";
import {AiOutlineStar}  from "react-icons/ai";
import {AiOutlineHeart}  from "react-icons/ai";
import icon from '../Assets/icon.PNG'
import shoe1 from '../Assets/shoe1.png'
import shoe2 from '../Assets/shoe2.png'
import purse from '../Assets/purse.png'
import shoe4 from '../Assets/shoe3.png'
 import shoe5 from '../Assets/shoe4.png'
import Mastercard from "../Assets/Mastercard.png"

const Figma =() =>{
    return(
        <div>
        <div className='a'>
            EN<MdArrowDropDown/>
            USD<MdArrowDropDown/>
           <lable className='b'><BsFillPersonFill/> My Profile</lable>
            <BsCart className='c'/>
            <lable className='c'>Items</lable>
            <lable className='q'> $0.00</lable><AiOutlineSearch/>
        </div>
        <hr></hr> 

        <div>
            <div className='a7'>
         <img src={icon} width='40'height='40'/> </div>
            <lable className='d'>E-Comm</lable>
            <lable className='e' >HOME</lable>
            <lable className='f'>BAGS</lable>
            <lable className='f'>SNEAKERS</lable>
            <lable className='f'>BELT</lable>
            <lable className='f'>CONTACT</lable>

        </div>
        <br/>
        <br/>
        <br/>

        <div className='g'>
        
            <lable className='h'>Home</lable>
            <lable className='i'>/Hot Deal</lable>

        </div>
        <br/>
        <br/>
        <br/>
        <div className='o'>
        <div className='j'>
            <label>Hot Deals</label><br/><br/>
            <label>Nike </label>
            <label className='pp'>2</label><br/><br/>
            <label className='k' >Airmax</label> 
            <label className='kk'>48</label><br/><br/> 
            <label >Nike </label> 
            <label className='cc'>14</label><br/><br/> 
            <label >Adidas</label> 
            <label className='bb'>15</label><br/><br/> 
            <label >Vans </label> 
            <label className='aa'>23</label><br/><br/> 
            <label >All Stars </label> 
            <label className='dd'>1</label><br/><br/> 
            <label >Adidas</label> 
            <label className='bb'>95</label><br/><br/>


           </div>
        <div className='l'>
                <img className='img'src={shoe1} width='190.93px'height='190.46px'/> <br/>
                <label className='m'> Adidas Men Running</label><br/>
                <label className='m'>Sneakers</label><br/>
                <label className='n'>Perforamance and design.Taken right to the edge</label><br/><br/><br/>
                <label className='n'>SHOP NOW</label>
                </div>
              </div>  
       <div className='p'>
                   <label className='c'>13 Items</label>
                   <label className='dad'>Sort By</label>
                   <label className='dad'>Name</label>
                   <MdArrowDropDown className='a'/>
                   <label className='mom'>Show</label>
                   <label className='c'>12</label>
                   <MdArrowDropDown className='a'/>
                            
        </div> 
        <br/>
        
        <div className='u'>
            <label>PRICES</label><br/><br/>
            <label className='s'>Ranger</label>
            <label className='r'>$13.99-$25.99</label><br/><br/>
         <input type="range" min= "$10" max="$100"></input>
        </div>
        <br/>
        
        
    <div className='u'>
      <label>COLOR</label><br/><br/><br/>

      <span className='t'></span>
      <span className='v'></span>
      <span className='w'></span>
      <span className='x'></span>
      <span className='y'></span>
      
     
<span className='z'></span>

     </div>
     <br/>
     
     <div className='u'>
     <label>BRAND</label><br/><br/>
            <label>Nike </label>
            <label className='pp'>99</label><br/><br/>
            <label className='k' >Nike</label> 
            <label className='kkk'>99</label><br/><br/> 
            <label >Adidas</label> 
            <label className='ccc'>99</label><br/><br/> 
            <label >Siemens</label> 
            <label className='bbb'>99</label><br/><br/> 
            </div>
            <br/>
            <div className='aaa'>
                <label className='ddd'>MORE</label>
            </div>

            <div className='shoe'>
               < img src={shoe2} width='259.5px' height='252.5px'/>
               <div className='shoe1'>
               <label className='adi'>Nike Airmax 270 React</label><br/><br/>
               < AiFillStar className='pra'/>
               < AiFillStar className='pra'/>
               < AiFillStar className='pra'/>
               <AiFillStar className='pra'/>
               <AiOutlineStar/>
               <label className='q'>0 reviews</label>
               <label className='bl'>Submit a review</label>
               <hr className='line'></hr> 
                     <label className='k'>$299,43</label>
                    <label className='q'>$634,33</label>
                    <label className='co'>24%off</label><br/><br/>
                    <label>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut</label><br/>
                    <label>    lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin</label><br/>
                    <label>  vulputate g nisl ut dolor ...</label><br/><br/>
                   <div className='o'>
                    <div className='ex'>
                          <span> <BsCart className='aa1' /> Add To Cart</span>
                   </div>
                   <br/>
                  <div className='heart'>
                   <span><AiOutlineHeart className='aa1'/></span>
                    </div>
               </div>
               </div>
               <hr className='line1'></hr> 
            </div>

            <div className='purse'>
               < img src={purse} width='259.5px' height='252.5px'/>
               <div className='purse1'>
               <label className='adi'>Nike Airmax 270 React</label><br/><br/>
               < AiFillStar className='pra'/>
               < AiFillStar className='pra'/>
               < AiFillStar className='pra'/>
               <AiFillStar className='pra'/>
               <AiOutlineStar/>
               <label className='q'>0 reviews</label>
               <label className='bl'>Submit a review</label>
               <hr className='line'></hr> 
                     <label className='k'>$299,43</label>
                    <label className='q'>$634,33</label>
                    <label className='co'>24%off</label><br/><br/>
                    <label>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut</label><br/>
                    <label>    lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin</label><br/>
                    <label>  vulputate g nisl ut dolor ...</label><br/><br/>
                   <div className='o'>
                    <div className='maa'>
                          <span> <BsCart className='aa1' /> Add To Cart</span>
                   </div>
                   <br/>
                  <div className='heart'>
                   <span><AiOutlineHeart className='aa1'/></span>
                    </div>
               </div>
               </div>
               <hr className='line1'></hr> 
               </div>

               <div className='shoe4'>
               < img src={shoe4} width='259.5px' height='252.5px'/>
               <div className='purse1'>
               <label className='adi'>Nike Airmax 270 React</label>

               < AiFillStar className='pra'/>
               < AiFillStar className='pra'/>
               < AiFillStar className='pra'/>
               <AiFillStar className='pra'/>
               <AiOutlineStar/>
               <label className='q'>0 reviews</label>
               <label className='bl'>Submit a review</label>
               <hr className='line'></hr> 
                     <label className='k'>$299,43</label>
                    <label className='q'>$634,33</label>
                    <label className='co'>24%off</label><br/><br/>
                    <label>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut</label><br/>
                    <label>    lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin</label><br/>
                    <label>  vulputate g nisl ut dolor ...</label><br/><br/>
                   <div className='o'>
                    <div className='maa'>
                          <span> <BsCart className='aa1' /> Add To Cart</span>
                   </div>
                   <br/>
                  <div className='heart'>
                   <span><AiOutlineHeart className='aa1'/></span>
                    </div>
               </div>
               </div>
               <hr className='line1'></hr> 
               </div>

               <div className='shoe4'>
                < img src={shoe5} width='259.5px' height='252.5px'/> 
               <div className='purse1'>
               <label className='adi'>Nike Airmax 270 React</label><br/><br/>
               < AiFillStar className='pra'/>
               < AiFillStar className='pra'/>
               < AiFillStar className='pra'/>
               <AiFillStar className='pra'/>
               <AiOutlineStar/>
               <label className='q'>0 reviews</label>
               <label className='bl'>Submit a review</label>
               <hr className='line'></hr> 
                     <label className='k'>$299,43</label>
                    <label className='q'>$634,33</label>
                    <label className='co'>24%off</label><br/><br/>
                    <label>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut</label><br/>
                    <label>    lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin</label><br/>
                    <label>  vulputate g nisl ut dolor ...</label><br/><br/>
                   <div className='o'>
                    <div className='maa'>
                          <span> <BsCart className='aa1' /> Add To Cart</span>
                   </div>
                   <br/>
                  <div className='heart'>
                   <span><AiOutlineHeart className='aa1'/></span>
                    </div>
                 </div>
               </div>
        </div>
        <br/>
        <br/>

        <div className='aaaa'>
        <span className='eee'>1</span>
        <span className='fff'>2</span>
        <span className='ggg'>3</span>
        <span className='fff'>4</span>
        <span className='fff'>5</span>
          </div>  
          <br/>
           <div className='p1'>
          <div>
          <div className='c2'>E-Comm</div>
            <div className='c1'>Lorem ipsum is simply dummy text of the <br/> printing and typesetting industry.Lorem<br/> ipsum has been the industry's starndard<br/> dummy text ever. SInce the 1500s,  when <br/> an unknown printer</div>
            <div className='c3'>Follow Us</div>
            <div className='c4'>Since the 1500s when an unknown <br/> printing took a galley of type and <br/> scrambled</div>
            <BsFacebook className='c5'/>
            <BsTwitter className='c6'/>
            <div className='c7'>Contact Us</div>
            <div className='c8'>E-Comm , 4578 <br/> Marmora Road , <br/> Glasgow D04 89GR</div>

            <div className='v1'>Information</div>
            <div className='v2'>About Us<br/> Information <br/> Pri
    
            <div className='v2'>About Us<br/> Information <br/> Privacy Policy <br/> Terms & Conditions </div>

            <div className='v3'>Service</div>
            <div className='v4'>About Us<br/> Information <br/> Privacy Policy <br/> Terms & Conditions </div>

            <div className='v5'>My Account</div>
            <div className='v6'>About Us<br/> Information <br/> Privacy Policy <br/> Terms & Conditions </div>

            <div className='v7'>Our Offers</div>
            <div className='v8'>About Us<br/> Information <br/> Privacy Policy <br/> Terms & Conditions </div>
            <br/>
            <br/>
            <hr className='hr'></hr>
            <br/>

            <div className='com'>@ 2022 Ecommerence theme by www.bisenbaev.com</div>
            <div className='westren'>
                <img src="https://static.india.com/wp-content/uploads/2018/03/western-union.jpg?impolicy=Medium_Resize&w=1200&h=800" width='100' height='50' alt='westren'></img>
            </div>
            <div className='master'>
                <img src={Mastercard} width='100' height='50' alt='master'></img>
            </div>
            <div className='paypal'>
                <img src="https://pngimg.com/uploads/paypal/paypal_PNG1.png" width='100' height='50' alt='master'></img>
            </div>
            <div className='visa'>
                <img src="https://pngimg.com/uploads/visa/visa_PNG30.png" width='100' height='35'></img>
            </div>
        </div>
        </div>




</div>
</div>

    
    )
}
export default Figma;
