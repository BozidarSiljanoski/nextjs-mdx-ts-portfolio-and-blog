const Button = ({ text }) => {
    return <buton onClick={event => event.target.innerText = 'You clicked the button'}>
        {text}
    </buton>
}