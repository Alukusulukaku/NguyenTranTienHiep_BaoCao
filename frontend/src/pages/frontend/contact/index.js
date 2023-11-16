import { useState } from "react";
import contactservice from "../../../services/ContactService";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function submit(e) {
    e.preventDefault();
    var contact = new FormData();
    contact.append("name", name);
    contact.append("email", email);
    contact.append("phone", phone);
    contact.append("title", title);
    contact.append("content", content);
    contact.append("status", 2);

    const result = await contactservice.create(contact);
    if (result.data.success === true) {
      alert("Gửi phản hồi thành công");
    } else {
      alert("Thất bại");
    }
  }
  return (
    <section className="section-content padding-y">
      <div className="container">
        <div>
          <h1>Contact Us</h1>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6 padding-bottom">
            <iframe
              title="Google map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15674.987103826621!2d106.774999!3d10.8306805!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752701a34a5d5f%3A0x30056b2fdf668565!2zVHLGsOG7nW5nIENhbyDEkOG6s25nIEPDtG5nIFRoxrDGoW5nIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1694927782574!5m2!1svi!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <br />
          <div className="col-md-6">
            <form onSubmit={submit} method="post" className="my-form">
              <div className="form-group">
                <label for="form-name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="form-name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label for="form-email">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="form-email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label for="form-subject">Telephone</label>
                <input
                  type="text"
                  className="form-control"
                  id="form-subject"
                  placeholder="Subject"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label for="form-subject">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="form-title"
                  placeholder="Your title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label for="form-message">Email your Message</label>
                <textarea
                  className="form-control"
                  id="form-message"
                  placeholder="Enter your message..."
                  style={{ resize: "none", height: 175 }}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                ></textarea>
              </div>
              <div className="col-md-12 d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-block btn-warning w-50"
                >
                  {" "}
                  Send{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
