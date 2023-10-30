function Contact(){
    return(
        <div>
            <form>
              First Name <input type="text"/><br/>
              Last Name <input type="text"/><br/>
              Address<input type="textarea rows={10} cols={50}"/><br/>
              <input type="Submit" value="Save"/>  
            </form>
        </div>
    )
}
export default Contact;