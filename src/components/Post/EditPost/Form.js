import React from 'react';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

const EditPostForm = Form.create({
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    return {
      title: Form.createFormField({
        ...props.title,
        value: props.title.value,
      }),
      body: Form.createFormField({
        ...props.body,
        value: props.body.value,
      }),
    };
  },
})(props => {
  const { onSubmit, onCancel } = props;
  const { getFieldDecorator } = props.form;
  return (
    <Form onSubmit={onSubmit}>
      <FormItem label="Title">
        {getFieldDecorator('title', {
          rules: [{ required: true, message: 'Title is required!' }],
        })(<Input />)}
      </FormItem>
      <FormItem label="Message">
        {getFieldDecorator('body', {
          rules: [{ required: true, message: 'Message is required!' }],
        })(<Input.TextArea rows={4} />)}
      </FormItem>
      <FormItem style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button className="login-form-button" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          style={{ marginLeft: 8 }}
        >
          Edit
        </Button>
      </FormItem>
    </Form>
  );
});

export default EditPostForm;
