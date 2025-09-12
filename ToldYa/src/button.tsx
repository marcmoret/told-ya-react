function Button () {
    const handleClick = (param:string) => {
        console.log('Button clicked', param);
    };

    return (
        <button className="my-button" onClick={() => handleClick('some value')}>Click me</button>
    )
}

export default Button;