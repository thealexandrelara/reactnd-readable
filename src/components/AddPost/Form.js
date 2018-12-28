import React from 'react';
import { Form, Input, Modal, Select } from 'antd';

const FormItem = Form.Item;

const AddPostForm = Form.create({
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    return {
      title: Form.createFormField({
        ...props.title,
        value: props.title.value,
      }),
      author: Form.createFormField({
        ...props.author,
        value: props.author.value,
      }),
      body: Form.createFormField({
        ...props.body,
        value: props.body.value,
      }),
      category: Form.createFormField({
        ...props.category,
        value: props.category.value,
      }),
    };
  },
})(props => {
  const { onSubmit, onCancel, visible, categories } = props;
  const { getFieldDecorator } = props.form;
  return (
    <Modal
      visible={visible}
      title="Create a new post"
      okText="Create"
      onCancel={onCancel}
      onOk={onSubmit}
    >
      <Form onSubmit={onSubmit}>
        <FormItem label="Title">
          {getFieldDecorator('title', {
            rules: [{ required: true, message: 'Title is required!' }],
          })(<Input />)}
        </FormItem>
        <FormItem label="Author">
          {getFieldDecorator('author', {
            rules: [{ required: true, message: 'Author is required!' }],
          })(<Input />)}
        </FormItem>
        <FormItem label="Message">
          {getFieldDecorator('body', {
            rules: [{ required: true, message: 'Message is required!' }],
          })(<Input.TextArea rows={4} />)}
        </FormItem>
        <Form.Item label="Category">
          {getFieldDecorator('category', {
            rules: [
              { required: true, message: 'Please select your category!' },
            ],
          })(
            <Select placeholder="Select a category">
              {categories.map(category => (
                <Select.Option key={category.name} value={category.name}>
                  {category.name}
                </Select.Option>
              ))}
            </Select>,
          )}
        </Form.Item>
      </Form>
    </Modal>
  );
});

export default AddPostForm;
