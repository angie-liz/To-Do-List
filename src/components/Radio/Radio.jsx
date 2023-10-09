import '../../styles/app.css'
function Radio(){
    
    return(
        <div className="Radio">
            <input type="radio" id="Day" name="mode" value="Day" defaultChecked/>
            <label htmlFor="Day">Day</label>
            <input type="radio" id="Night" name="mode" value="Night"/>
            <label htmlFor="Night">Night</label>
        </div>
    )
}

export default Radio;