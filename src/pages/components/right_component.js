import React from "react";
import { useState } from "react";

function Right_component () {
    const data = {
        cardData: [
            {
                id: 1,
                img: 'assets/img/brands/1.jpeg',
                title: 'Honda'
            },
            {
                id:2,
                img:'assets/img/brands/2.jpeg',
                title:'Hyundai'
            },
            {
                id:3,
                img:'assets/img/brands/3.jpeg',
                title:'MarutiSuzuki'
            },
            {
                id:4,
                img:'assets/img/brands/4.jpeg',
                title:'Chevrolet'
            },
            {
                id:5,
                img:'assets/img/brands/5.jpeg',
                title:'Daewoo'
            },
            {
                id:6,
                img:'assets/img/brands/6.jpeg',
                title:'Datsun'
            },
            {
                id:7,
                img:'assets/img/brands/7.jpeg',
                title:'Fiat'
            },
            {
                id:8,
                img:'assets/img/brands/8.jpeg',
                title:'Ford'
            },
            {
                id:9,
                img:'assets/img/brands/9.jpeg',
                title:'Mahindra'
            },
            {
                id:10,
                img:'assets/img/brands/10.jpeg',
                title:'Mitsubishi'
            },
            {
                id:11,
                img:'assets/img/brands/11.jpeg',
                title:'Nissan'
            },
            {
                id:12,
                img:'assets/img/brands/12.jpeg',
                title:'Renault'
            },
            {
                id:13,
                img:'assets/img/brands/13.jpeg',
                title:'Skoda'
            },
            {
                id:14,
                img:'assets/img/brands/14.jpeg',
                title:'Tata'
            },
            {
                id:15,
                img:'assets/img/brands/15.jpeg',
                title:'Toyota'
            },
            {
                id:16,
                img:'assets/img/brands/16.jpeg',
                title:'Volkswegan'
            },
            {
                id:17,
                img:'assets/img/brands/17.jpeg',
                title:'AstronMartin'
            },
            {
                id:18,
                img:'assets/img/brands/18.jpeg',
                title:'Audi'
            },
            {
                id:19,
                img:'assets/img/brands/19.jpeg',
                title:'Bentley'
            },
            {
                id:20,
                img:'assets/img/brands/20.jpeg',
                title:'BMW'
            },
            {
                id:21,
                img:'assets/img/brands/21.jpeg',
                title:'Ferrari'
            },
            {
                id:22,
                img:'assets/img/brands/22.jpeg',
                title:'Jaguar'
            },
            {
                id:23,
                img:'assets/img/brands/23.jpeg',
                title:'Lamborghini'
            },
            {
                id:24,
                img:'assets/img/brands/24.jpeg',
                title:'Land Rover'
            },
            {
                id:25,
                img:'assets/img/brands/25.jpeg',
                title:'Meserati'
            },
            {
                id:26,
                img:'assets/img/brands/26.jpeg',
                title:'Mercedes'
            },
            {
                id:27,
                img:'assets/img/brands/27.jpeg',
                title:'Mini'
            },
            {
                id:28,
                img:'assets/img/brands/28.jpeg',
                title:'Porche'
            },
            {
                id:29,
                img:'assets/img/brands/29.jpeg',
                title:'Rolls Royce'
            },
            {
                id:30,
                img:'assets/img/brands/30.jpeg',
                title:'Volvo'
            },
            {
                id:31,
                img:'assets/img/brands/31.jpeg',
                title:'Force'
            },
            {
                id:32,
                img:'assets/img/brands/32.jpeg',
                title:'Isuzu'
            },
            {
                id:33,
                img:'assets/img/brands/33.jpeg',
                title:'HindustanMotors'
            },
            {
                id:34,
                img:'assets/img/brands/34.jpeg',
                title:'Jeep'
            },
            {
                id:35,
                img:'assets/img/brands/35.jpeg',
                title:'Opel'
            },
            {
                id:36,
                img:'assets/img/brands/36.jpeg',
                title:'Ssangyong'
            },
            {
                id:37,
                img:'assets/img/brands/37.jpeg',
                title:'Kia'
            },
            {
                id:38,
                img:'assets/img/brands/38.jpeg',
                title:'Mg'
            },
            {
                id:39,
                img:'assets/img/brands/39.jpeg',
                title:'Photon'
            },
            {
                id:40,
                img:'assets/img/brands/40.jpeg',
                title:'Jayem'
            },
            {
                id:41,
                img:'assets/img/brands/41.jpeg',
                title:'Dc'
            },
            {
                id:42,
                img:'assets/img/brands/42.jpeg',
                title:'Lexus'
            },
            {
                id:43,
                img:'assets/img/brands/43.jpeg',
                title:'Citroe'
            }
    
    
        ]
    }

    const Search = () => {
        const [filter, setFilter]=useState ('');
        const searchText = (event) => {
            setFilter(event.target.value);
        }
        let dataSearch= data.cardData.filter(item =>
             {return Object.keys (item).some (key => item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))})
    
    


    return (
        <div className='column'>
        <div className='border_1'>
    <div className="in">    <h2 className="ones sel">
  SELECT MANUFACTURER
    </h2><input type="search" 
    id="myInput"
 value={filter}
        onChange={searchText.bind(this)} 
        
        placeholder=" 🔍 Search Car Brand" className="form-control search-input" data-table="customers-list"/></div>
    


     
  
  
    {dataSearch.map((item,index)=>{
        return(
            <div className='table customers-list '>
                <div className='gallery'>
                    <img src={item.img} alt="carimage" />
                    <div className='card-body'>
                        <p className='title'>
                            {item.title}

                        </p>
                    </div>
                </div>
        
    
            </div>
        )})}

</div>
   </div>
    )
}
}
export default Right_component;
