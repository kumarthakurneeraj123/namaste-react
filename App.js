import React from 'react';
import ReactDOM from 'react-dom/client';

const Title = ()=>(<h1 id="heading" className='head' tabIndex={1}>
    Namaste React by JSX
    </h1>);

const ele = <h2>Niraj Kumar Thakur is a good boy</h2>

const HeadingComponent = () => <h1 id="heading">Namaste rect by functional component</h1>;
const HeadingComponent1 = ()=>{
    return (
    <div id="container">
        <Title />
        {HeadingComponent()}
        {ele}
        <h1 id="heading1">
            Namaste functional component
        </h1>
    </div>);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent1 />);