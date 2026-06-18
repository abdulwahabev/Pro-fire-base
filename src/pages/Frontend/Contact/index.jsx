const Contact = () => {
    return (
    <main>
           <div>
        {/* Hero Section */}
        <section className="bg-success text-white py-5">
          <div className="container text-center">
            <h1 className="display-4 fw-bold">Contact Us</h1>
            <p className="lead">
              We'd love to hear from you. Reach out to us for any questions,
              donations, or support.
            </p>
          </div>
        </section>
  
        <div className="container py-5">
          <div className="row g-4">
            {/* Contact Form */}
            <div className="col-lg-7">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="mb-4 text-success">Send Us a Message</h3>
  
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your name"
                        />
                      </div>
  
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Phone Number</label>
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="03XX XXXXXXX"
                        />
                      </div>
                    </div>
  
                    <div className="mb-3">
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                      />
                    </div>
  
                    <div className="mb-3">
                      <label className="form-label">Subject</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter subject"
                      />
                    </div>
  
                    <div className="mb-3">
                      <label className="form-label">Message</label>
                      <textarea
                        rows="5"
                        className="form-control"
                        placeholder="Write your message here..."
                      ></textarea>
                    </div>
  
                    <button
                      type="submit"
                      className="btn btn-success px-4"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
  
            {/* Contact Info */}
            <div className="col-lg-5">
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body">
                  <h4 className="text-success mb-3">
                    Contact Information
                  </h4>
  
                  <p>
                    <strong>Address:</strong>
                    <br />
                    Laal Mills Chowk, Faisalabad
                  </p>
  
                  <p>
                    <strong>Phone:</strong>
                    <br />
                    +92 21 111 729 526
                  </p>
  
                  <p>
                    <strong>Email:</strong>
                    <br />
                    info@saylaniwelfare.com
                  </p>
                </div>
              </div>
  
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body">
                  <h4 className="text-success mb-3">
                    Office Hours
                  </h4>
  
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
  
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h4 className="text-success mb-3">
                    Emergency Support
                  </h4>
  
                  <p>
                    Need immediate assistance?
                    Our support team is available to help.
                  </p>
  
                  <button className="btn btn-outline-success">
                    Call Now
                  </button>
                </div>
              </div>
            </div>
          </div>
  
          {/* Map Section */}
          <div className="mt-5">
            <h3 className="text-center text-success mb-4">
              Find Us On Map
            </h3>
  
            <div className="ratio ratio-21x9 shadow-sm">
              <iframe
                src="https://maps.google.com/maps?q=Faisalabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
                title="Location Map"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
    );
  };
  
  export default Contact;