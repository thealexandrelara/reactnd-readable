import React from 'react';
import { Form, Input, Card } from 'antd';

const FormItem = Form.Item;

const CustomizedForm = Form.create({
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    return {
      name: Form.createFormField({
        ...props.name,
        value: props.name.value,
      }),
    };
  },
  onValuesChange(_, values) {
    console.log(values);
  },
})((props) => {
  const { getFieldDecorator } = props.form;
  return (
    <Form layout="vertical">
      <FormItem label="Nome">
        {getFieldDecorator('name', {
          rules: [{ required: true, message: 'É necessário inserir um nome' }],
        })(<Input />)}
      </FormItem>
    </Form>
  );
});

class AddPost extends React.Component {
  state = {
    fields: {
      name: {
        value: 'benjycui',
      },
    },
  };

  handleFormChange = (changedFields) => {
    this.setState(({ fields }) => ({
      fields: { ...fields, ...changedFields },
    }));
  };

  render() {
    const { fields } = this.state;
    return (
      <Card>
        <CustomizedForm {...fields} onChange={this.handleFormChange} />
      </Card>
    );
  }
}

export default AddPost;
