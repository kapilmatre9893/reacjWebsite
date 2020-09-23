import React from 'react';
import Carousel from 'react-bootstrap/Carousel';



import Card from './Card';
import Sdata from './Sdata';

const Carou = () =>{

    return (
        <>
          <div className="my-5">
      <h1 className="text-center"> Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
          
        <div className="row">
        <div className="col-12 mx-auto">
       
      <Carousel>
  <Carousel.Item>
  
    <div className="d-flex aling-item-center">
    <div className="row gy-4">

<Card imgsrc={Sdata[0].imgsrc}
      title={Sdata[0].title}
      text={Sdata[0].text}    
/>
<Card imgsrc={Sdata[1].imgsrc}
      title={Sdata[1].title}
      text={Sdata[1].text}    
/>
<Card imgsrc={Sdata[3].imgsrc}
      title={Sdata[3].title}
      text={Sdata[3].text}    
/>
</div>
</div>

  </Carousel.Item>
  <Carousel.Item>

   
  <div className="d-flex aling-item-center">
  <div className="row gy-4">

<Card imgsrc={Sdata[0].imgsrc}
      title={Sdata[0].title}
      text={Sdata[0].text}    
/>
<Card imgsrc={Sdata[1].imgsrc}
      title={Sdata[1].title}
      text={Sdata[1].text}    
/>
<Card imgsrc={Sdata[3].imgsrc}
      title={Sdata[3].title}
      text={Sdata[3].text}    
/>
</div>
</div>
  </Carousel.Item>
  <Carousel.Item>
  <div className="d-flex aling-item-center">
  <div className="row gy-4">

<Card imgsrc={Sdata[0].imgsrc}
      title={Sdata[0].title}
      text={Sdata[0].text}    
/>
<Card imgsrc={Sdata[1].imgsrc}
      title={Sdata[1].title}
      text={Sdata[1].text}    
/>
<Card imgsrc={Sdata[3].imgsrc}
      title={Sdata[3].title}
      text={Sdata[3].text}    
/>
</div>
</div>
  </Carousel.Item>
</Carousel>
</div>
</div>
</div>

        </>
    );

};


export default Carou;