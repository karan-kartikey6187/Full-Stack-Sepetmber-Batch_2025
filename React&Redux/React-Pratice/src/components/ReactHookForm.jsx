import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const ReactHookForm = () => {
    const { formState: { errors }, register, handleSubmit } = useForm();
    const handleOnSubmit = (data) => { console.log(data) };
    return (
        <div className='w-50 mt-5'>
            <Form onSubmit={handleSubmit(handleOnSubmit)}>
                <Form.Group
                    className="mb-3"
                    controlId="firstname"
                >
                    <Form.Label>First name</Form.Label>
                    <Form.Control type=
                        "text" {...register("firstname"
                            , {
                                required: "The Firstname is required."
                                ,
                            })} />
                    <div className="text-danger">{errors?.firstname?.message}</div>
                </Form.Group>
                <Button type=
                    "submit">Submit form</Button>
            </Form>
        </div>
    );
};
export default ReactHookForm;