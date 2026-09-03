import { yupResolver } from "@hookform/resolvers/yup";
import { useRef, useState } from "react";
import { Form, Button, Spinner, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import * as yup from 'yup';

const schema = yup.object().shape({
    fname: yup
        .string()
        .required("First name is required")
        .min(3, "Name must be at least 3 characters")
        .max(20, "Name must not exceed 20 characters")
        .matches(/^[A-Za-z]+$/, "First name can contain only letters"),

    lname: yup
        .string()
        .required("Last name is required")
        .min(3, "Name must be at least 3 characters")
        .max(20, "Name must not exceed 20 characters")
        .matches(/^[A-Za-z]+$/, "Last name can contain only letters"),

    age: yup
        .number()
        .typeError("Age is required.")
        .min(18, "Age must be 18 or above.")
        .max(100, "Age must be 100 or below."),

    password: yup
        .string()
        .required("The password is required.")
        .min(6, "Password must be greater than or equal to 6 characters.")
        .max(10, "You can use a maximum of 10 characters for password.")
        .matches(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>?]/, "Password must contain at least one special character")
        .matches(/\d/, "Password must contain at least one number")
        .test("ValidateSpaces", "Password cannot contain spaces", (value) => {
            return !value.includes(" ")
        }),

    phone: yup
        .string()
        .required("Phone number is required.")
        .matches(/^\d{10}$/, "Phone number contain only 10 digits."),

    email: yup
        .string()
        .required("Email is required.")
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Enter a valid email address."),

    country: yup
        .string()
        .required("Country is required."),

    state: yup
        .string()
        .required("State is required."),

    cities: yup
        .array()
        .min(2, "Please select at least 2 Cities."),

    address: yup
        .string()
        .required("Address is required.")
        .min(10, "Address must be at least 10 characters."),

    pincode: yup
        .string()
        .required("Pin code is required.")
        .matches(/^\d{6}$/, "Pin code must be 6 digits."),

    joiningDate: yup
        .date()
        .typeError("Joining date is required.")
        .test("ValidateDate", "Joining date must be less than or equal to today's date.", (value) => {
            const today = new Date();
            const selectedDate = new Date(value);
            return selectedDate < today
        }),


    gender: yup
        .string()
        .required("Please select gender."),


    hobby: yup
        .array()
        .min(2, "Please select at least 2 hobbies."),


    profilePicture: yup
        .mixed()
        .test("Required", "Profile picture is required.", (value) => {
            return value && value.length > 0;
        })
        .test("AcceptedFormats", "Only JPG, PNG or GIF files are allowed.", (files) => {
            if (!files || files.length === 0) return true;
            const file = files?.[0];
            const allowedTypes = [
                "image/jpeg",
                "image/png",
                "image/gif",
            ];
            return allowedTypes.includes(file.type)
        })

        .test("FileSize", "Profile picture must be maximum 6MB.", (files) => {
            if (!files || files.length === 0) return true;
            const file = files?.[0];
            return file.size <= 6 * 1024 * 1024
        }),


    resume: yup
        .mixed()
        .test("Required", "Resume is required.", (value) => {
            return value && value.length > 0;
        })
        .test("AcceptedFormats", "Only PDF, DOC or DOCX files are allowed.", (files) => {
            if (!files || files.length === 0) return true;
            const file = files?.[0];
            const allowedTypes = [
                "application/pdf",
                "application/msword",
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            ];
            return allowedTypes.includes(file.type)
        })
        .test("FileSize", "Resume must be maximum 8MB.", (files) => {
            if (!files || files.length === 0) return true;
            const file = files?.[0];
            return file.size <= 8 * 1024 * 1024
        }),

    terms: yup
        .boolean()
        .oneOf([true], "You must agree to the terms and conditions."),
});


export const RHFWithYup = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            fname: "Karan",
            lname: "Kartikey",
            age: 18,
            password: "Karan@1234",
            phone: "9876543210",
            email: "karan32@gmail.com",
            country: "india",
            state: "gujarat",
            cities: ["ahmedabad", "delhi"],
            address: "Kathayatbara, Bageshwar, Uttarakhand-263642",
            pincode: "263642",
            joiningDate: new Date().toISOString().split("T")[0],
            hobby: ["Drawing", "Singing"],
            gender: "Male",

        }
    })

    const emptyValues= {
            fname: "",
            lname: "",
            age: null,
            password: "",
            phone: "",
            email: "",
            country: "",
            state: "",
            cities: [],
            address: "",
            pincode: "",
            joiningDate: null,
            hobby: [],
            gender: "",

        }
    const [loading, setLoading] = useState(false);

    const handleSubmitForm = (data) => {

        console.log("Submitted:", data);

        setLoading(true);

        setTimeout(() => {
            toast.success("The Form has been Submitted.")
            refFrom.current.reset(emptyValues)
            reset(emptyValues)
            setLoading(false);
        }, 1000);
    };

    const refFrom = useRef()

    return (
        <Form className="mx-5 my-5" onSubmit={handleSubmit(handleSubmitForm)} ref={refFrom}>
            <h2 className="text-start mb-4 fs-3 fw-semibold">Registration Details</h2>
            <fieldset className="my-form" disabled={loading}>
                <Row>
                    <Col lg={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                {...register("fname")}
                            />
                            <div className="text-danger">{errors?.fname?.message}</div>
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                {...register("lname")}
                            />
                            <div className="text-danger">{errors?.lname?.message}</div>
                        </Form.Group>
                    </Col>

                    <Col lg={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Age</Form.Label>
                            <Form.Control
                                type="number"
                                {...register("age")}
                            />
                            <div className="text-danger">
                                {errors?.age?.message}
                            </div>
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="text"
                                {...register("password")}
                            />
                            <div className="text-danger">{errors?.password?.message}</div>
                        </Form.Group>
                    </Col>

                    <Col lg={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Phone Number</Form.Label>

                            <Form.Control
                                type="tel"
                                {...register("phone")}
                            />
                            <div className="text-danger">{errors?.phone?.message}</div>
                        </Form.Group>
                    </Col>

                    <Col lg={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>

                            <Form.Control
                                type="email"
                                {...register("email")}
                            />
                            <div className="text-danger">{errors?.email?.message}</div>
                        </Form.Group>
                    </Col>


                    <Col lg={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Country</Form.Label>

                            <Form.Select
                                {...register("country")}
                            >
                                <option value="">Select country</option>
                                <option value="india">India</option>
                                <option value="usa">USA</option>
                                <option value="canada">Canada</option>
                                <option value="uk">UK</option>
                            </Form.Select>

                            <div className="text-danger">
                                {errors?.country?.message}
                            </div>
                        </Form.Group>
                    </Col>

                    <Col lg={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>State</Form.Label>

                            <Form.Select
                                {...register("state")}
                            >
                                <option value="">Select state</option>
                                <option value="gujarat">Gujarat</option>
                                <option value="maharashtra">Maharashtra</option>
                                <option value="rajasthan">Rajasthan</option>
                                <option value="delhi">Delhi</option>
                            </Form.Select>

                            <div className="text-danger">
                                {errors?.state?.message}
                            </div>
                        </Form.Group>
                    </Col>

                    <Col lg={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Select Preferred Cities</Form.Label>

                            <Form.Select
                                multiple
                                className="over overflow-visible"
                                style={{ height: "100px" }}
                                {...register("cities")}
                            >
                                <option value="ahmedabad">Ahmedabad</option>
                                <option value="delhi">Delhi</option>
                                <option value="somnath">Somnath</option>
                            </Form.Select>

                            <div className="text-danger">
                                {errors?.cities?.message}
                            </div>
                        </Form.Group>
                    </Col>

                    <Col lg={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Your Complete Address</Form.Label>

                            <Form.Control
                                as="textarea"
                                rows={3}
                                {...register("address")}
                            />

                            <div className="text-danger">
                                {errors?.address?.message}
                            </div>
                        </Form.Group>
                    </Col>

                    <Col lg={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Zip/Pin Code</Form.Label>
                            <Form.Control
                                type="text"
                                {...register("pincode")}
                            />
                            <div className="text-danger">{errors?.pincode?.message}</div>
                        </Form.Group>
                    </Col>


                    <Col lg={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Joining Date</Form.Label>
                            <Form.Control
                                type="date"
                                {...register("joiningDate")}
                            />
                            <div className="text-danger">{errors?.joiningDate?.message}</div>
                        </Form.Group>
                    </Col>

                    <Col lg={6}>
                        <Form.Group className="mb-3" controlId="gender">
                            <Form.Label>Gender</Form.Label>
                            <br />
                            {["Male", "Female", "Transgender"].map((gender, index) => {
                                return (
                                    <Form.Check
                                        key={index}
                                        inline
                                        label={gender}
                                        id={gender}
                                        type="radio"
                                        value={gender}
                                        {...register("gender")}
                                    />
                                );
                            })}
                            <div className="text-danger">{errors?.gender?.message}</div>
                        </Form.Group>
                    </Col>

                    <Col lg={6}>
                        <Form.Group className="mb-3" controlId="hobby">
                            <Form.Label>Hobbies</Form.Label>
                            <br />
                            {["Drawing", "Singing", "Dancing"].map((hobby, index) => {
                                return (
                                    <Form.Check
                                        key={index} inline label={hobby} id={hobby}
                                        type="checkbox"
                                        value={hobby}
                                        {...register("hobby")
                                        }
                                    />);
                            })}
                            <div className="text-danger">{errors?.hobby?.message}</div>
                        </Form.Group>
                    </Col>


                    <Col lg={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Profile Picture</Form.Label>
                            <Form.Control
                                type="file"
                                {...register("profilePicture")}
                            />
                            <div className="text-danger">{errors?.profilePicture?.message}</div>
                        </Form.Group>
                    </Col>


                    <Col lg={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Resume</Form.Label>
                            <Form.Control
                                type="file"
                                {...register("resume")}
                            />
                            <div className="text-danger">{errors?.resume?.message}</div>
                        </Form.Group>
                    </Col>

                    <Col lg={12}>
                        <Form.Group className="mb-3">
                            <Form.Check
                                type="checkbox"
                                label="Agree to terms and conditions"
                                {...register("terms")}
                            />
                            <div className="text-danger">{errors?.terms?.message}</div>
                        </Form.Group>
                    </Col>

                </Row>

                <Button
                    disabled={loading}
                    size="lg"
                    type="submit"
                >
                    {loading ? (
                        <>
                            <Spinner animation="border" role="status" size="sm" className="me-1">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                            Submit
                        </>
                    ) : (
                        "Submit"
                    )}
                </Button>
            </fieldset>
            <ToastContainer />
        </Form>
    );
}