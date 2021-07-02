function Progress ({rounds}) {
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