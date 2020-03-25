import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput } from 'react-admin';
import BookIcon from '@material-ui/core/SvgIcon/SvgIcon';
export const EmployeeIcon = BookIcon;

export const EmployeeList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="email" />
            <TextField source="phone" />
             <DateField source="updatedAt" />
            <TextField source="address" />
            <EditButton basePath="/edit" /> 
        </Datagrid>
    </List>
)

const EmployeeTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const EmployeeEdit = (props) => (
    <Edit title={<EmployeeTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="phone" />
            {/* <TextInput source="teaser" options={{ multiLine: true }} /> */}
            {/* <TextInput multiline source="body" /> */}
            <DateInput label="Ultima Atualização" source="updatedAt" />
            {/* <TextInput source="average_note" /> */}
            {/* <TextInput disabled label="Nb views" source="views" /> */}
        </SimpleForm>
    </Edit>
);

export const EmployeeCreate = (props) => (
    <Create title="Create a Post" {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="teaser" options={{ multiLine: true }} />
            <TextInput multiline source="body" />
            <TextInput label="Publication date" source="published_at" />
            <TextInput source="average_note" />
        </SimpleForm>
    </Create>
);