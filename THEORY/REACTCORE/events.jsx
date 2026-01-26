//Events are how users talk to your component.
//You pass a function reference, React calls it when event happens

// Example

function Toggle() {
    const [on, setOn] = useState(false)

    return (
        <Pressable onPress={() => setOn(!on)}>
            <Text>{on ? "ON" : "OFF"}</Text>
        </Pressable>
    )
}