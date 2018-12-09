import React from 'react';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

const AddCommentForm = Form.create({
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    return {
      author: Form.createFormField({
        ...props.author,
        value: props.author.value,
      }),
      message: Form.createFormField({
        ...props.message,
        value: props.message.value,
      }),
    };
  },
  onValuesChange(_, values) {
    console.log(values);
  },
})(props => {
  const { getFieldDecorator } = props.form;
  return (
    <Form>
      <FormItem label="Author">
        {getFieldDecorator('author', {
          rules: [{ required: true, message: 'Author is required!' }],
        })(<Input />)}
      </FormItem>
      <FormItem label="Message">
        {getFieldDecorator('message', {
          rules: [{ required: true, message: 'Message is required!' }],
        })(<Input.TextArea rows={4} />)}
      </FormItem>
      <FormItem style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Comment
        </Button>
      </FormItem>
    </Form>
  );
});

export default AddCommentForm;
