import React, { useState, forwardRef, useImperativeHandle, useRef } from "react";

export const Input = forwardRef((props, ref) => {
    const { name, value, error, label, type, maxLength, onChange } = props;
    const [isValid, setValid] = useState(null);
    useImperativeHandle(ref, () => ({
        resetform() {
            setValid(false);
        }
    }))
    const checkValue = (e) => {
        const inputValue = e.target.value;
        if (!inputValue.length) {
            setValid(false);
        } else {
            setValid(true);
        }
        if (props.checkValue) {
            props.checkValue(e);
        }
    };


    return (
        <div className="form-group">
            <input
                type={type}
                name={name}
                value={value}
                maxLength={maxLength}
                onChange={(e) => {
                    checkValue(e);
                    if (onChange) onChange(e);
                }}
            />
            <label className={isValid ? 'valid' : ''} htmlFor={label}>
                {label}
            </label>
            {
                error ?
                    <span className="msgfrm error">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                        </div>
                        <div className="tooltiop-msg">{error}</div>
                    </span>
                    : isValid ?
                        <span className="msgfrm no-error">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                            </div>
                        </span>
                        : null
            }
        </div>
    );
});

export const SelectBox = forwardRef((props, ref) => {
    const { options, Sltboxtext, onChange, error, extraclass = '', title, name } = props;
    const [selectedValue, setSelectedValue] = useState(null);
    const [OpenSltbox, SetOpen] = useState(false);
    const dfltcls = 'form-group';
    const mixclass = `${dfltcls} ${extraclass || ''}`;
    const listscroll = useRef();

    useImperativeHandle(ref, () => ({
        resetSelectbox() {
            setSelectedValue(null);
            listscroll.current.scrollTo({ top: 0, behavior: 'smooth' });
        },
        handleOptionClick(value) {
            setSelectedValue(value !== null ? value : null);
        }
    }))

    const handleOptionClick = (value) => {
        setSelectedValue(value !== null ? value : null);
        SetOpen(false);
        if (onChange) {
            onChange(value);
        }
    };

    return (
        <div className={mixclass} data-title={title} >
            <div className={`select-box ${OpenSltbox ? 'open' : ''}`} onClick={() => SetOpen(!OpenSltbox)} name={name}>
                <span className="current">
                    <em>{selectedValue !== null ? selectedValue : Sltboxtext}</em> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" /></svg>
                </span>
                <ul className="list" ref={listscroll}>
                    <li onClick={() => handleOptionClick(null)} className={`option ${selectedValue === null ? 'selected' : ''}`}>{Sltboxtext}</li>
                    {options &&
                        options.map((option, index) => {
                            const formattedOption = option ? option.replace(/\s+/g, '').toLowerCase() : '';
                            return (
                                <li onClick={() => handleOptionClick(option)} data-value={formattedOption} key={index} data-key={index} className={`option ${selectedValue === option ? 'selected' : ''}`}>{option}</li>
                            );
                        })}
                </ul>
            </div>
            <input
                hidden
                type="text"
                value={selectedValue !== null ? selectedValue : ''}
                className="hiddenvalinput"
                onChange={(e) => {
                    if (onChange) {
                        onChange(e.target.value);
                    }
                }}
            />
            {error && <span className="msgfrm">
                <div className="tooltiop-msg">{error}</div>
            </span>}
        </div>
    );
});






