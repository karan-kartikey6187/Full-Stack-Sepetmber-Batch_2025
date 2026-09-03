import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';
import Tooltip from 'react-bootstrap/Tooltip';

export const RBOverlays = () => {
    return (
        <>
            <div className='ms-5 mt-5 mb-4'>
                {['top', 'right', 'bottom', 'left'].map((placement) => (
                    <OverlayTrigger
                        trigger="click"
                        key={placement}
                        placement={placement}
                        overlay={
                            <Popover id={`popover-positioned-${placement}`}>
                                <Popover.Header as="h3">{`Popover ${placement}`}</Popover.Header>
                                <Popover.Body>
                                    <strong>Holy guacamole!</strong> Check this info.
                                </Popover.Body>
                            </Popover>
                        }
                    >
                        <Button variant="outline-secondary" className='me-2 fw-medium'>Popover on {placement}</Button>
                    </OverlayTrigger>
                ))}
            </div>
            <hr className='mx-5'/>
            <div className='ms-5 mt-4 mb-5'>
                {['top', 'right', 'bottom', 'left'].map((placement) => (
                    <OverlayTrigger
                        key={placement}
                        placement={placement}
                        overlay={
                            <Tooltip id={`tooltip-${placement}`}>
                                Tooltip on <strong>{placement}</strong>.
                            </Tooltip>
                        }
                    >
                        <Button variant="secondary" className='me-2 fw-medium'>Tooltip on {placement}</Button>
                    </OverlayTrigger>
                ))}
            </div>
        </>
    )
}
