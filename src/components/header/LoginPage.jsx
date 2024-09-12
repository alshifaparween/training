import "./loginpage.css"
import ReactDOM from 'react-dom/client'; // Make sure this is imported



import { Button, Flex } from 'antd';
import { Input, Form, InputNumber } from "antd";
import { Margin } from "@mui/icons-material";
import { styled } from "@mui/material";
import FormItem from "antd/es/form/FormItem";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


// const layout = {  
//     labelCol: {
    
//         span: 12,
        
//     },
//     wrapperCol: {
//         span: 12,
//     },
// };

/* eslint-disable no-template-curly-in-string */
// const validateMessages = { 
//     required: '${label} is required!',
//     types: {
//         email: '${label} is not a valid email!',
//         number: '${label} is not a valid number!',
//     },
//     number: {
//         range: '${label} must be between ${min} and ${max}',
//     },
// };
/* eslint-enable no-template-curly-in-string */

// const onFinish = (values) => {
//     console.log(values);
// };
const LoginPage = () => (
    <>
         
         <div className="form-container">
      <form>
        {/* Name */}
        <h2 style={{marginLeft:'10rem',fontWeight:'bold' ,fontSize:'35px'}}>Form</h2>
        <div className="form-group"  style={{marginTop:'8px'}}>
          <label htmlFor="name">Name:-</label>
          <input type="text" id="name" className="form-input" required />
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email:-</label>
          <input type="email" id="email" className="form-input" required />
        </div>

        {/* Contact */}
        <div className="form-group">
          <label htmlFor="contact">Contact:-</label>
          <input type="text" id="contact" className="form-input" required />
        </div>

        {/* Country */}
        <div className="form-group">
          <label htmlFor="country">Country:-</label>
          <input type="text" id="country" className="form-input" required />
        </div>

        {/* Message */}
        <div className="form-group "  >
          <label htmlFor="message">Message:-</label>
          <textarea id="message" className="form-input" rows="3" required  ></textarea>
        </div>

        {/* Submit */}
        <button type="submit" className="btn-submit">Submit</button>
      </form>
    </div>
      
    






            {/* <Form
                {...layout   }

                
                name="nest-messages"
                onFinish={onFinish}
                style={{
                    width: 500,
                    display: "Flex",
                    flexDirection: 'column',
                    alignItems: 'start',
                    

                }}
                validateMessages={validateMessages}
            >


<Form.Item    >
<h1   style={{ marginLeft: '12rem', marginTop: '2rem' ,text:'center'}}>FORM</h1>
</Form.Item>
               
                <Form.Item


                    name={['user', 'name']}
                 
                    label="Name"
                    style={{ marginLeft: '-28px', marginTop: '0' }}
                    rules={[
                        {
                            required: true,

                        },
                    ]}
                >
                    <Input   style={{width:'300px',height:'35px',border:'none',borderBottom:'black'}} />
                </Form.Item>
                <Form.Item
                    name={['user', 'email']}
                    label="Email"
                    style={{ marginLeft: '-28px',}}
                    rules={[
                        {
                            type: 'email',
                        },
                    ]}
                >
                    <Input    style={{width:'310px',height:'35px'}}/>
                </Form.Item>
                <Form.Item
                    name={['user', 'number']}
                    label="Contact Number"
                    style={{ marginLeft: '-28px' }}

                   
                >
                    <InputNumber  style={{width:'282px',height:'35px'}} />
                </Form.Item>
                <Form.Item name={['user', 'website']} label="Country "
                 style={{ marginLeft: '-28px' }}>
                    <Input   style={{width:'300px',height:'35px'}}  />
                </Form.Item>
                <Form.Item name={['user', 'Message']} label="Message" style={{ marginLeft: '-28px' }}>
                    <Input.TextArea    style={{width:'300px',height:'60px'}} />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        ...layout.wrapperCol,
                        offset: 8,
                    }}
                >
                    <Button type="primary" htmlType="submit"   style={{ marginRight: '32rem' }}>
                        Submit
                    </Button>
                </Form.Item>
            </Form> */}
        



    </>
);
export default LoginPage;




