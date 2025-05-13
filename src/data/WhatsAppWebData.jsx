export const login_fields = [
    {
        label: 'Phone',
        name: 'phone',
        type: 'text',
        placeholder: 'Phone'
    },
    {
        label: 'Password',
        name: 'password',
        type: 'password',
        placeholder: 'Password'
    }
]

export const register_fields = [
    {
        label: 'Name',
        name: 'name',
        type: 'text',
        placeholder: 'Name'
    },
    {
        label: 'Phone',
        name: 'phone',
        type: 'text',
        placeholder: 'Phone'
    },
    {
        label: 'Password',
        name: 'password',
        type: 'password',
        placeholder: 'Password'
    },
    {
        label: 'Confirm Password',
        name: 'confirmPassword',
        type: 'password',
        placeholder: 'Confirm Password'
    }
]

export const login_data = {
    title: 'Login',
    fields: login_fields,
    change_text: ['Don’t have an account?', 'Register Here!'],
}

export const register_data = {
    title: 'Register',
    fields: register_fields,
    change_text: ['Alredy have an account?', 'Login Here!'],
}

export const config_top = ['chat', 'add']
export const config_bottom = ['settings', 'person']