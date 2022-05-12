import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Input, Select, Checkbox, Button, Row, Col } from 'antd'
import logPng from '../../assets/imgs/logPng.jpg'

import {
  Container,
  TitleContainer,
  LogContainer,
  Card,
  Link,
  Desc,
  Messenger,
} from './style'
import { messengerData } from '../../mock/mockData'

const { Option } = Select

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
}

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
}

const Login = () => {
  const [click, setClick] = useState(false)
  const [form] = Form.useForm()

  const navigate = useNavigate()

  const onFinish = (values) => {

    if (!values.captcha) {
      alert('send message your phone')

      fetch('https://api.uracashback.uz/security/send-verification', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phoneNumber: `998${values.prefix}${values.phone}`
      }),
    })
      .then((response) => {
        return response
      })
      .then((data) => {
        alert(data.status === 204 ? 'code is right sent' : 'code isn`t sent' )
      })
      .catch((err) => alert(err))

      setClick(true)
    } else if (values.captcha) {
      setClick(true)

      fetch('https://api.uracashback.uz/security/verify-login', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phoneNumber: `998${values.prefix}${values.phone}`,
        code: values.captcha
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.token ? navigate('/main') : alert('code isn`t');
        localStorage.setItem('token', data.token)

      })
      .catch((err) => alert(err))

    }
  }

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="90">+90</Option>
        <Option value="93">+93</Option>
        <Option value="99">+99</Option>
      </Select>
    </Form.Item>
  )

  return (
    <React.Fragment>
      <Container>
        <TitleContainer>
          <img src={logPng} alt="" />
        </TitleContainer>
        <LogContainer>
          <Card>
            <Card.Title>Kirish</Card.Title>
            <Form
              {...formItemLayout}
              form={form}
              name="register"
              onFinish={onFinish}
              initialValues={{
                residence: [],
                prefix: '90',
              }}
              scrollToFirstError
            >
              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                  {
                    min:7,
                    required: true,
                    message: 'Please input your phone number!',
                  },
                ]}
              >
                <Input
                  addonBefore={prefixSelector}
                  style={{
                    width: '100%',
                  }}
                />
              </Form.Item>

              <Form.Item
                label="Your code"
                extra="We must make sure that your are a human."
                style={{display: click ? 'flex' : 'none'}}
              >
                <Row gutter={8}>
                  <Col span={12}>
                    <Form.Item
                      name="captcha"
                      noStyle
                      rules={[
                        {
                          required: false,
                          message: 'Please enter the sms code sent to you !',
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
              </Form.Item>

              <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(
                            new Error('phone number must be confirmed'),
                          ),
                  },
                ]}
                {...tailFormItemLayout}
              >
                <Checkbox>The phone number is really mine</Checkbox>
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit" style={{display: !click ? '' : 'none'}} >
                  send phone number
                </Button>
                {/* <Link to={''} > */}
                <Button type="primary" htmlType="submit" style={{display: click ? 'flex' : 'none'}} >
                  send sms code
                </Button>
                {/* </Link> */}
                <Desc>yoki ijtimoiy tarmoqlar orqali kiring</Desc>
                {messengerData.map(
                  ({ id, facebook, insta, youtube, github }) => {
                    return (
                      <Messenger key={id}>
                        {<img src={facebook} alt="" />}
                        {<img src={insta} alt="" />}
                        {<img src={youtube} alt="" />}
                        {<img src={github} alt="" />}
                      </Messenger>
                    )
                  },
                )}
              </Form.Item>
            </Form>
          </Card>
        </LogContainer>
      </Container>
    </React.Fragment>
  )
}

export default Login
