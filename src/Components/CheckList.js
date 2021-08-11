const CheckList = (props) => {
    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <div>
                    <input type="checkbox" />
                    <label>Check all</label>
                </div>
                <div className="checkBoxDiv">
                    {a.map(i => <div><input type="checkbox" /><label>Checkbox {i}</label></div>)}
                </div>
            </div>
        </>
    )
}

export default CheckList;