function Progress ({rounds}) {
    console.log(rounds)
    return (
        <div className="progressBorder">
            <div className="progressBar"
            style={{width: `${rounds * 10}%`
            }}>
            </div>
        </div>
    )
}

export default Progress;

// progress bar pseudo
    // change width to increase by 10% at a time 
    // tie width in with counter 
    // if rounds = 1, progressBar width = 10%