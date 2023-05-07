import styled from "styled-components";
import {ChangeEvent, FormEvent, useState} from "react";
import {getLocationByIp} from "../features/location/locationAction.ts";
import {useDispatch} from "react-redux";

const StyledForm = styled.form`

`
const StyledInput = styled.input`

`
const StyledSubmit = styled.button`

`

function Input() {
    const [inputValue, setInputValue] = useState<string>('');

    const dispatch = useDispatch();
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // @ts-ignore
        dispatch(getLocationByIp(inputValue))
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <StyledInput type='text' placeholder='Input IP Address' onChange={handleInputChange}/>
            <StyledSubmit type='submit'>Submit</StyledSubmit>
        </StyledForm>
    );
}

export default Input;