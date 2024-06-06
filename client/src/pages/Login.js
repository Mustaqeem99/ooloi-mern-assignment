import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { TextInput, ImageInput, DropdownSingle, CheckboxList, RadioList, DatePicker, VideoInput, PDFInput, GenInputStories, Wrapper700, ButtonPrimary } from 'oolib';

const fetchData = async () => {
    const response = await fetch('http://localhost:4000/getLoginComponents');

    if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
    }

    return response.json();
};

const Login = () => {
    const { isLoading, error, data, refetch } = useQuery(
        'data',
        fetchData,
        { enabled: false, }
    );
    // console.log('data: ', data);

    const [formElements, setFormElements] = useState([]);
    const [formData, setFormData] = useState({});
    useEffect(() => {
        refetch(); // getting data from api
    }, []);

    useEffect(() => {
        if (data && data.data) {
            setFormElements(
                data?.data?.map((item) => {
                    const { comp, isRequired, valuePath, props } = item;
                    let component;

                    switch (comp) {
                        case 'TextInput':
                            component =
                                <TextInput type="text" onChange={(data) => console.log(data)} {...props} id={props.id} required={isRequired} />;
                            break;
                        // case 'ImageInput':
                        //     component = <ImageInput set_alert_banner={(data) => console.log(data)} {...props} id={props.id} required={isRequired} />;
                        //     break;
                        case 'DropdownSingle':
                            component = <DropdownSingle onChange={(data) => console.log(data)} {...props} id={props.id} required={isRequired} />;
                            break;
                        case 'CheckboxList':
                            component = <CheckboxList onChange={(data) => console.log(data)} {...props} id={props.id} required={isRequired} />;
                            break;
                        case 'RadioList':
                            component = <RadioList onChange={(data) => console.log(data)} {...props} id={props.id} required={isRequired} />;
                            break;
                        case 'DatePicker':
                            component =
                                <DatePicker onChange={function noRefCheck() { }} {...props} id={props.id} value={null} required={isRequired} />;
                            break;
                        // case 'VideoInput':
                        //     component = <VideoInput {...props} id={props.id} required={isRequired} />;
                        //     break;
                        // case 'PDFInput':
                        //     component =
                        //      <PDFInput   onChange={function noRefCheck() { }} {...props} id={props.id} required={isRequired} />;
                        //     break;
                        default:
                            console.log(`Unknown component type: ${comp}`);
                            break;
                    }

                    return component;
                })
            );
        }
    }, [data]);

    if (isLoading) return <p>Loading data...</p>;

    if (error) {
        console.error('Error:', error);
        return <p>Error fetching data: {error.message}</p>;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Form data:', formData); // No data // Event handler not working with the componenets
    };


    return (
        <body>
            <div class="container">
                <div class="card">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        {formElements.map((element, index) => element)}
                        <br></br>
                        <ButtonPrimary type="submit" value={'Submit'} />
                    </form>
                </div>
            </div>
        </body>


    );



};

export default Login;
