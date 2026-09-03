import { useRef, useState } from "react";
import { Form, Button, Spinner, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

export const RHFWithoutYup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
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
  const [loading, setLoading] = useState(false);

  const handleSubmitForm = (data) => {

    console.log("Submitted:", data);

    setLoading(true);

    setTimeout(() => {
      toast.success("The Form has been Submitted.")
      refFrom.current.reset()
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
                {...register("fname", {
                  required: "First Name is required."
                  ,
                  minLength: {
                    value: 3, message: "Name must be at least 3 characters"
                  },
                  maxLength: { value: 20, message: "Name must not exceed 20 characters" },
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "First name can contain only letters",
                  },
                })}
              />
              <div className="text-danger">{errors?.fname?.message}</div>
            </Form.Group>
          </Col>
          <Col lg={6}>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                {...register("lname", {
                  required: "Last Name is required."
                  ,
                  minLength: {
                    value: 3, message: "Name must be at least 3 characters"
                  },
                  maxLength: { value: 20, message: "Name must not exceed 20 characters" },
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "Last name can contain only letters",
                  },
                })}
              />
              <div className="text-danger">{errors?.lname?.message}</div>
            </Form.Group>
          </Col>

          <Col lg={6}>
            <Form.Group className="mb-3">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                {...register("age", {
                  required: "Age is required.",
                  min: {
                    value: 18,
                    message: "Age must be 18 or above.",
                  },
                  max: {
                    value: 100,
                    message: "Age must be below 100.",
                  },
                })}
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
                {...register("password", {
                  required: "The password is required.",

                  minLength: {
                    value: 6,
                    message: "Password must be greater than or equal to 6 characters.",
                  },
                  maxLength: {
                    value: 10,
                    message: "You can use a maximum of 10 characters for password.",
                  },

                  validate: (value) => {
                    if (value.includes(" ")) {
                      return "Password cannot contain spaces";
                    }
                    const hasSpecialChar =
                      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>?]/.test(value);

                    const hasNumber = /\d/.test(value);
                    if (!hasSpecialChar || !hasNumber) {
                      return "Password must contain at least one special character and one number.";
                    }
                    return true;
                  },
                })}
              />
              <div className="text-danger">{errors?.password?.message}</div>
            </Form.Group>
          </Col>

          <Col lg={6}>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>

              <Form.Control
                type="tel"
                {...register("phone", {
                  required: "Phone number is required.",
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Phone number must be 10 digits.",
                  },
                })}
              />
              <div className="text-danger">{errors?.phone?.message}</div>
            </Form.Group>
          </Col>

          <Col lg={6}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>

              <Form.Control
                type="email"
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Enter a valid email address.",
                  },
                })}
              />
              <div className="text-danger">{errors?.email?.message}</div>
            </Form.Group>
          </Col>


          <Col lg={6}>
            <Form.Group className="mb-3">
              <Form.Label>Country</Form.Label>

              <Form.Select
                {...register("country", {
                  required: "Country is required.",
                })}
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
                {...register("state", {
                  required: "State is required.",
                })}
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
                {...register("cities", {
                  required: "City is required.",
                  validate: (value) =>
                    value?.length >= 2 || "Please select at least 2 Cities.",
                })}
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
                {...register("address", {
                  required: "Address is required.",
                  minLength: {
                    value: 10,
                    message: "Address must be at least 10 characters.",
                  },
                })}
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
                {...register("pincode", {
                  required: "Pin code is required.",
                  pattern: {
                    value: /^\d{6}$/,
                    message: "Pin code must be 6 digits.",
                  },
                })}
              />
              <div className="text-danger">{errors?.pincode?.message}</div>
            </Form.Group>
          </Col>


          <Col lg={6}>
            <Form.Group className="mb-3">
              <Form.Label>Joining Date</Form.Label>
              <Form.Control
                type="date"
                {...register("joiningDate", {
                  required: "Joining date is required.",
                  validate: (value) => {
                    const today = new Date();
                    const selectedDate = new Date(value);
                    return (selectedDate < today || "Joining date must be less than or equal to today's date.");
                  },
                })}
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
                    {...register("gender", {
                      required: "Please select gender.",
                    })}
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
                    {...register("hobby"
                      , {
                        required: "Hobbies is required",
                        validate: (value) =>
                          value?.length >= 2 || "Please select at least 2 hobbies.",
                      })
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
                {...register("profilePicture", {
                  required: "Profile picture is required.",

                  validate: {
                    acceptedFormats: (files) => {
                      if (!files || files.length === 0) return true;
                      const file = files?.[0];
                      const allowedTypes = [
                        "image/jpeg",
                        "image/png",
                        "image/gif",
                      ];
                      return (
                        allowedTypes.includes(file.type) ||
                        "Only JPG, PNG or GIF files are allowed."
                      );
                    },

                    fileSize: (files) => {
                      if (!files || files.length === 0) return true;
                      const file = files?.[0];
                      return (file.size <= 6 * 1024 * 1024 || "Profile picture must be maximum 6MB.");
                    },
                  },
                })}
              />
              <div className="text-danger">{errors?.profilePicture?.message}</div>
            </Form.Group>
          </Col>


          <Col lg={6}>
            <Form.Group className="mb-3">
              <Form.Label>Resume</Form.Label>
              <Form.Control
                type="file"
                {...register("resume", {
                  required: "Resume is required.",

                  validate: {
                    acceptedFormats: (files) => {
                      if (!files || files.length === 0) return true;
                      const file = files?.[0];
                      const allowedTypes = [
                        "application/pdf",
                        "application/msword",
                        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                      ];
                      return (
                        allowedTypes.includes(file.type) ||
                        "Only PDF, DOC or DOCX files are allowed."
                      );
                    },
                    fileSize: (files) => {
                      const file = files?.[0];
                      if (!files || files.length === 0) return true;
                      return (file.size <= 8 * 1024 * 1024 || "Resume must be maximum 8MB.");
                    },
                  },
                })}
              />
              <div className="text-danger">{errors?.resume?.message}</div>
            </Form.Group>
          </Col>

          <Col lg={12}>
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Agree to terms and conditions"
                {...register("terms", {
                  required: "You must agree to the terms and conditions.",
                })}
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