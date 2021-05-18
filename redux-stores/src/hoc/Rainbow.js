import React from 'react'

const Rainbow = (WrappedComponent) => {

    const colours = ['yellow', 'red', 'blue', 'pink', 'orange', 'green'];
    const randomColour = colours[Math.floor(Math.random() * 5)];
    const className = randomColour + '-text';
    
    return (props) => {
        return (
            <div className={className}>
                {/* we pass props to the component */}
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default Rainbow