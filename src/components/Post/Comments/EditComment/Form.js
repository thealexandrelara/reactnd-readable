import React from 'react';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

const EditCommentForm = Form.create({
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    return {
      body: Form.createFormField({
        ...props.body,
        value: props.body.value,
      }),
    };
  },
  onValuesChange(_, values) {
    // console.log(values);
  },
})(props => {
  const { onSubmit, onCancel } = props;
  const { getFieldDecorator, getFieldsError } = props.form;
  return (
    <Form onSubmit={onSubmit}>
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

export default EditCommentForm;
