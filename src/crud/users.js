import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput } from 'react-admin';
import BookIcon from '@material-ui/core/SvgIcon/SvgIcon';
import PropTypes from 'prop-types'; 
export const UserIcon = BookIcon;

export const UserList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            {/* <DateField source="published_at" /> */}
            {/* <TextField source="average_note" /> */}
            {/* <TextField source="views" /> */}
            {/* <EditButton basePath="/posts" /> */}
        </Datagrid>
    </List>
);

const UserTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const UserEdit = (props) => (
    <Edit title={<UserTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="title" />
            <TextInput source="teaser" options={{ multiLine: true }} />
            <TextInput multiline source="body" />
            <DateInput label="Publication date" source="published_at" />
            <TextInput source="average_note" />
            <TextInput disabled label="Nb views" source="views" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = (props) => (
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