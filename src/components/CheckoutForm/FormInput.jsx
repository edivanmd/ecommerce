import React from 'react';
import { TextField, Grid, useFormControl } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';

const FormInput = ({ name, label, required }) => {
    const { control } = useFormContext();
    //console.log(name)
    return (
        <Grid item xs={12} sm={6}>
            <Controller
                name={name}
                control={control}
                rules={{ required: true }}
                render={({ 
                    field: { onChange, value },
                    fieldState: { error },
                    formState,
                }) => (
                    <TextField 
                        helperText={error ? error.message : null}
                        size="small"
                        error={!!error}
                        onChange={onChange}
                        value={value}
                        fullWidth
                        label={label}
                        variant="outlined"
                    />
                )}
            />
        </Grid>
    )
}

export default FormInput