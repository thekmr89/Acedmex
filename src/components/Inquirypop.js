import { React, useState, useRef } from 'react';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { Input, SelectBox } from './Input';
import { StatesData } from '../data/StateData';
import { useCart } from './Modelscontext';
import { validateName, validateEmail, validateContact, validateSelectboxstate, validateSelectboxdistrict } from './ValidationConfig';

export const Inquirypop = () => {
    const { Inquirymodel, hide_inquirymodel } = useCart();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [selectedState, setSelectedState] = useState(null);
    const [districts, setDistricts] = useState([]);
    const methods = useForm();
    const Inputname = useRef([]);
    const Inputemail = useRef([]);
    const Inputcontact = useRef([]);
    const Inputselectstate = useRef([]);
    const Inputselectdistrict = useRef([]);

    const resetform = () => {
        var form = document.getElementById('myForm');
        form.reset();
        Inputname.current.resetform();
        Inputemail.current.resetform();
        Inputcontact.current.resetform();
        Inputselectstate.current.resetSelectbox();
        Inputselectdistrict.current.resetSelectbox();
        setDistricts(null);
        setSelectedState(null);
    }

    const handleClosePopup = () => {
        hide_inquirymodel();
        setIsSubmitted(false);
        methods.reset();
        resetform();
    };

    const messgClosePopup = () => {
        setIsSubmitted(false);
        methods.reset();
        resetform();
    };


    const onSubmit = (data, e) => {
        console.log(data);
        methods.reset();
        setIsSubmitted(true);
        resetform();
    };



    return (
        <div className={`model Inquirypop ${Inquirymodel ? 'is-open' : ''}`}>
            <button className='close-model' onClick={handleClosePopup}>
                <img src={require('../assets/icon/close.png')} alt="Close" />
            </button>
            <div className="model-body">
                <div className="flex">
                    <div className="colA">
                        <img src={require('../assets/images/home/contact.jpg')} alt="contact" />
                    </div>
                    <div className="colB">
                        <div className="heading text-center">
                            <h4>Enquire Now</h4>
                        </div>
                        <div className="form-wrap">
                            <FormProvider {...methods}>
                                <form id="myForm" onSubmit={methods.handleSubmit(onSubmit)}>
                                    <Controller
                                        name="name"
                                        control={methods.control}
                                        render={({ field, fieldState }) => (
                                            <Input
                                                name="name"
                                                label="Full Name"
                                                type="text"
                                                onChange={(e) => {
                                                    field.onChange(e);
                                                    methods.trigger('name');
                                                }}
                                                ref={Inputname}
                                                error={fieldState.invalid && fieldState.error?.message}
                                            />
                                        )}
                                        rules={validateName.rules}
                                    />
                                    <Controller
                                        name="contact"
                                        control={methods.control}
                                        render={({ field, fieldState }) => (
                                            <Input
                                                name="contact"
                                                label="Contact"
                                                maxLength="10"
                                                onChange={(e) => {
                                                    field.onChange(e);
                                                    methods.trigger('contact');
                                                }}
                                                ref={Inputcontact}
                                                error={fieldState.invalid && fieldState.error?.message}
                                            />
                                        )}
                                        rules={validateContact.rules}
                                    />
                                    <Controller
                                        name="email"
                                        control={methods.control}
                                        render={({ field, fieldState }) => (
                                            <Input
                                                name="email"
                                                label="Email"
                                                onChange={(e) => {
                                                    field.onChange(e);
                                                    methods.trigger('email');
                                                }}
                                                ref={Inputemail}
                                                error={fieldState.invalid && fieldState.error?.message}
                                            />
                                        )}
                                        rules={validateEmail.rules}
                                    />
                                    <Controller
                                        name="state"
                                        control={methods.control}
                                        render={({ field, fieldState }) => (
                                            <SelectBox
                                                options={StatesData.map(state => state.state)}
                                                Sltboxtext="Select State"
                                                onChange={(selectedValue) => {
                                                    field.onChange(selectedValue);
                                                    setSelectedState(selectedValue);
                                                    const selectedStateObj = StatesData.find((stateObj) => stateObj.state === selectedValue);
                                                    Inputselectdistrict.current.handleOptionClick(null)
                                                    setDistricts(selectedStateObj?.districts || []);
                                                }
                                                }
                                                ref={Inputselectstate}
                                                error={fieldState.invalid && fieldState.error?.message}
                                            />
                                        )}
                                        rules={validateSelectboxstate.rules}
                                    />

                                    <Controller
                                        name="district"
                                        control={methods.control}
                                        render={({ field, fieldState }) => (
                                            <SelectBox
                                                name="district"
                                                options={districts}
                                                Sltboxtext="Select District"
                                                onChange={(selectedValue) => {
                                                    field.onChange(selectedValue);
                                                }}
                                                error={fieldState.invalid && fieldState.error?.message}
                                                extraclass={!selectedState ? 'disabled' : ''}
                                                title={!selectedState ? 'Select State First' : ''}
                                                ref={Inputselectdistrict}
                                            />
                                        )}
                                        rules={validateSelectboxdistrict.rules}
                                    />
                                    <div>
                                        <button type="submit">Submit</button>
                                    </div>
                                </form>
                            </FormProvider>
                        </div>
                        {isSubmitted && <div className='thnkmsg'>
                            <div className="msg-wr">
                                <h4>Thank you for your inquiry!</h4>
                                <p>Your query has been submitted, and we will get back to you shortly.</p>
                                <button onClick={messgClosePopup} className="close-msg">Close</button>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
};
