import { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionButton } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { DashCircle, PlusCircle } from 'react-bootstrap-icons';
import { AccordionData } from '../data/AccordionData';


function MyAccordion({ children, eventKey, callback }) {
    
    const { activeEventKey } = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton(eventKey);

    return (
        <div
            type="button"
            className={`${activeEventKey === eventKey ? "text-primary" : "text-dark"}`}
            onClick={decoratedOnClick}
        >
            <div className='d-flex justify-content-between align-items-center fs-5 fw-bold'>
                {children}
                {activeEventKey === eventKey ? <DashCircle className=' fs-5'/> : <PlusCircle className=' fs-5'/>}
            </div>
        </div>
    );
}


export const RBAccordion = () => {
    return (
        <Accordion defaultActiveKey="0" className='border-0 px-2 pb-4'>
            {
                AccordionData.map((item, index) => {
                    return(
                    <div className='px-3 pt-3' key={index}>
                        <div className='pb-3 border-bottom border-2'>
                            <MyAccordion eventKey={index.toString()}>{item.question}</MyAccordion>
                        </div>
                        <Accordion.Collapse eventKey={index.toString()} className='fw-medium mt-1'>
                            <div>{item.answer}</div>
                        </Accordion.Collapse>
                    </div>
                    )
                })
            }
        </Accordion>
    )
}
