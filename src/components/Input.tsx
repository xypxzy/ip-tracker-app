import styled from "styled-components";
import {ChangeEvent, FormEvent, useState} from "react";
import {getLocationByIp} from "../features/location/locationAction.ts";
import {useDispatch} from "react-redux";
import rightArrow from '../assets/icon-arrow.svg'

const StyledForm = styled.form`
    display: flex;
    align-items:start;
    justify-content: center;
    
`
const StyledInput = styled.input`
    width: 290px;
    padding: 15px 30px;
    border: none;
    border-radius: 10px 0 0 10px;

    font-family: var(--ff);
    font-size: var(--fz);

    &::placeholder {
        font-family: var(--ff);
        font-size: var(--fz);
    }
`
const StyledSubmit = styled.button`
    border: none;
    padding: 20px 15px;
    background: #000;
    border-radius: 0 10px 10px 0;
    cursor: pointer;

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
            <StyledSubmit type='submit'><img src={rightArrow} alt="right-arrow" /></StyledSubmit>
        </StyledForm>
    );
}

export default Input;