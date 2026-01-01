import React from "react";
import { SinglepostsData, UserData } from "../../lib/DummyData";
import Slider from "../../Components/slider/Slider";
import "./SinglePage.scss";

function SinglePage() {
  const post = SinglepostsData[0];
  const user = UserData[0];

  return (
    <div className="singlePage">
      <div className="details">

        {/* LEFT SIDE */}
        <div className="wrapper">

          <Slider images={post.images} />

          <div className="info">
            <div className="top">
              <h1>{post.title}</h1>
              <p className="address">{post.address}</p>
              <p className="price">£{post.price}</p>
            </div>

            <div className="userSection">
              <img src={user.image} alt={user.name} className="userImage" />
              <div>
                <h4>{user.name}</h4>
                <p>{user.role}</p>
              </div>
            </div>

            <div className="description">
              <h3>About this property</h3>
              <p>{post.description}</p>
            </div>
          </div>
        </div>

        {/* RIGHT FEATURES PANEL */}
        <div className="features">
          <h2 className="sectionTitle">Property Features</h2>

          <div className="featureGroup">
            <h3 className="groupTitle">General</h3>

            <ul className="featureList">
              <li className="featureItem">
                <span className="icon">🛏️</span>
                <b>Bedrooms:</b> {post.bedRooms}
              </li>

              <li className="featureItem">
                <span className="icon">🛁</span>
                <b>Bathrooms:</b> {post.bathroom}
              </li>

              <li className="featureItem">
                <span className="icon">📏</span>
                <b>Size:</b> {post.size} sqft
              </li>

              <li className="featureItem">
                <span className="icon">🌆</span>
                <b>City:</b> {post.city}
              </li>

              <li className="featureItem">
                <span className="icon">🏫</span>
                <b>School:</b> {post.school}
              </li>

              <li className="featureItem">
                <span className="icon">🚌</span>
                <b>Bus Stop:</b> {post.bus}
              </li>

              <li className="featureItem">
                <span className="icon">🍽️</span>
                <b>Restaurant:</b> {post.restaurant}
              </li>
            </ul>
          </div>

          <div className="mapBox">
            <iframe
              width="100%"
              height="250"
              frameBorder="0"
              style={{ borderRadius: "10px" }}
              src={`https://www.google.com/maps?q=${post.latitude},${post.longitude}&z=15&output=embed`}
              allowFullScreen
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SinglePage;
