import {useState} from 'react';

const useInput = (validateValue: any) => {
    const [value, setValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const hasError = value.length >= 0 ? !validateValue(value) : false;

    const inputHighlightedHandler = (e: any) => {
        setIsTouched(e);
    };

    return {
        value,
        isTouched,
        hasError,
        setValue,
        inputHighlightedHandler,
    };
};

export default useInput;
