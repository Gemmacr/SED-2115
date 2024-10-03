const App = () => {
    const [ counter, setCounter ] = useState(0)
    return (
    <div>
    <div>{counter}</div>
    <button onClick={() =>
    console.log('clicked')}> plus
    </button>
    </div>
    )
    }
    const click = () => {
    const [ counter, setCounter ] = useState(0)
    const handleClick = () => {
     console.log('clicked')
    }
    return (
    <div>
    <div>{counter}</div>
    <button onClick={handleClick}>
    View music Chart Table
    </button>
    </div>
    )
    }
