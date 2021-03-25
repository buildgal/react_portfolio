import "./index.css";

function Contact (){
    return(
        <div className="contactInfo">
            <h1>Contact Information</h1>
                      
                      <div className="form-group">
                        <label for="exampleFormControlInput1">Email: gjaquelin7@outlook.com</label>
                        {/* <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                          </input> */}
                      </div>

                      <div className="form-group">
                        <label for="exampleFormControlInput1">Phone: 713-471-3089</label>
                        {/* <input type="form-control" class="form-control"></input> */}
                      </div>

                      <div className="form-group">
                        {/* <label for="exampleFormControlTextarea1">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        <input type="submit" value="Send"></input> */}
                        {/*Example mailto:jeneen@domain.com&subject=Question%20about%20PIR&body=I%20have%20a%20question%20about%20the%20PIR.%20http://<domain.com>/sites/<folder>/Home.aspx*/}
                      </div>
            
                


        </div>
    );
}
export default Contact;