import { faAddressBook, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import SiteLoader from "../../hooks/loader";

function Contact() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);

  const [statusOk, setStatusOk] = useState(null);
  const [statusBad, setStatusBad] = useState(null);

  useEffect(() => {
    let subscribe = true;
    if (subscribe) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
    }

    return () => {
      subscribe = false;
    };
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    emailjs
      .send("service_47nusls", "template_he6xulg", data, "aHefCKRxgW_roS3Li")
      .then(
        function (response) {
          setStatusOk("S U C C E S S !");
        },
        function (error) {
          setStatusBad("FAILED. Please try again.");
        }
      );
      reset()
  };

  return (
    <>
      <Header />
      <section className="contact_section">
        <div className="contact_title">Get in Touch</div>
        <div className="contact_interface">
          <div className="left">
            <div className="txt">
              I am interested in freelance opportunities - especially ambitious
              or large projects. Also, I would be delighted to become part of
              your team. However, if you have other request or question, don't
              hesitate to contact me using below form either:
            </div>
            <div className="forms">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form__group field">
                  <input
                    type="text"
                    className="form__field"
                    placeholder="Name"
                    name="name"
                    id="name"
                    {...register("name")}
                  />
                  <label htmlFor="name" className="form__label">
                    Name
                  </label>
                </div>
                <div className="form__group field">
                  <input
                    type="email"
                    className="form__field"
                    placeholder="Email"
                    name="email"
                    id="email"
                    {...register("email", { required: true })}
                  />
                  <label htmlFor="email" className="form__label">
                    Email
                  </label>
                </div>
                {errors.exampleRequired && <span>This field is required</span>}
                <div className="form__group field">
                  <input
                    type="text"
                    className="form__field"
                    placeholder="Subject"
                    name="subject"
                    id="subject"
                    {...register("subject")}
                  />
                  <label htmlFor="subject" className="form__label">
                    Subject
                  </label>
                </div>
                <textarea
                  placeholder="Type anything you want"
                  {...register("text")}
                />
                <button type="submit">Submit</button>
                {statusOk && (
                  <p className="status" style={{ color: "white" }}>
                    {statusOk}
                  </p>
                )}
                {statusBad && (
                  <p className="status" style={{ color: "red" }}>
                    {statusBad}
                  </p>
                )}
              </form>
            </div>
          </div>
          <hr />
          <div className="right">
            <div className="contact_title_txt">
              <h2>CONTACT INFORMATION</h2>
            </div>

            <div className="address">
              <div className="address_icon">
                <FontAwesomeIcon icon={faAddressBook} color="#3698F3" />
              </div>
              <div className="address_info">
                <address>
                  Tel: +995 599391080 <br />
                  Georgia, Tbilisi
                </address>
              </div>
            </div>
            <div className="mail">
              <FontAwesomeIcon icon={faMailBulk} color="#3698F3" />
              <a href="mailto:lomsianidzegiorgi123@gmail.com">
                lomsianidzegiorgi123@gmail.com
              </a>
            </div>
            <div className="map_container">
              {lat && long ? (
                <MapContainer
                  center={[lat, long]}
                  zoom={13}
                  scrollWheelZoom={false}
                  style={{ height: "100%", width: "100%" }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[lat, long]}>
                    <Popup>You are here, My Besto Friendo</Popup>
                  </Marker>
                </MapContainer>
              ) : (
               <SiteLoader />
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
