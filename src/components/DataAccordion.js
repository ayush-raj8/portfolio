import React from "react";
import { Accordion } from "react-bootstrap";
import data from "./data.js";
import Badge from 'react-bootstrap/Badge';

function DataAccordion() {

    Object.keys(data).map((key,index) => {
        console.log("Outer key: ", key,index);
        data[key].map((value, index) => {
            console.log("Inner key: ", index, value);
        });
    });
    let arr=["warning","light","info","success","danger"];
    let len= arr.length
  return (
        <div  >
            {Object.keys(data).map((key, index) => (
                <Accordion defaultActiveKey={index} style={{backgroundColor: `#00000000`}}>
                <Accordion.Item eventKey={index} key={index} style={{backgroundColor: `#00000000`}}>
                <Accordion.Header style={{ backgroundColor: 'rgba(0,0,0,0)' }} >{key}</Accordion.Header>
                <Accordion.Body >
                
                    {
                        data[key].map((item, subIndex) => {
                            return(  
                            <Accordion defaultActiveKey={subIndex} style={{backgroundColor: `#00000000`}}>
                            <Accordion.Item eventKey={subIndex} key={subIndex} style={{backgroundColor: `#00000000`}}>
                            <Accordion.Header>
                                {item.title} {"  "}
                                { (item.url ? <a href={item.url} target="_blank" rel="noopener noreferrer">
                                                                        <i className="fa fa-external-link" aria-hidden="true"></i></a> :"") }</Accordion.Header>
                                <Accordion.Body>
                                        {   
                                            item.subtitle.split(',').map((word,index) => (
                                                <Badge pill bg={arr[index%len]} text={arr[index%len]==="light"?"dark":"light"}>{word}</Badge>
                                                
                                            ))
                                        }
                                    <br></br>
                                    <p style={{color:"#64ffda "}}>{item.summary}</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            </Accordion>
                            );
                            
                        })
                    }
                </Accordion.Body>
                </Accordion.Item>
                </Accordion>
            ))}
        </div>
  
  );
}

export default DataAccordion;
