import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { useNavigate, useLoaderData, useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import { useContext, useEffect, useMemo, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import Listdata, { SinglepostsData } from "../../lib/DummyData";

function SinglePage() {
  const loaderPost = useLoaderData();
  const { id } = useParams();
  const resolvedPost = useMemo(() => {
    if (loaderPost) return loaderPost;
    const numericId = Number(id);
    return (
      SinglepostsData.find((item) => item.id === numericId) ||
      Listdata.find((item) => item.id === numericId) ||
      null
    );
  }, [loaderPost, id]);

  const post = useMemo(() => {
    if (!resolvedPost) return null;
    const safeNumber = (value) => {
      if (typeof value === "number") return value;
      if (typeof value === "string") {
        const parsed = parseInt(value, 10);
        return Number.isNaN(parsed) ? 0 : parsed;
      }
      return 0;
    };
    const user = resolvedPost.user || {
      avatar: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      username: "Agent",
    };
    const images =
      resolvedPost.images ||
      (resolvedPost.img ? [resolvedPost.img] : ["/bg.png"]);
    const postDetail = resolvedPost.postDetail || {
      desc: resolvedPost.description || "",
      utilities: "owner",
      pet: "not allowed",
      income: "Not specified",
      size: resolvedPost.size || resolvedPost.area || 0,
      school: safeNumber(resolvedPost.school),
      bus: safeNumber(resolvedPost.bus),
      restaurant: safeNumber(resolvedPost.restaurant),
    };
    return {
      ...resolvedPost,
      images,
      user,
      postDetail,
      isSaved: resolvedPost.isSaved || false,
      bedRooms: resolvedPost.bedRooms ?? resolvedPost.bedroom ?? 0,
      bathroom: resolvedPost.bathroom ?? resolvedPost.bathRooms ?? 0,
    };
  }, [resolvedPost]);

  const [saved, setSaved] = useState(post?.isSaved || false);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    setSaved(post?.isSaved || false);
  }, [post?.isSaved]);

  const handleSave = async () => {
    if (!currentUser) {
      navigate("/login");
    }
    // AFTER REACT 19 UPDATE TO USEOPTIMISTIK HOOK
    setSaved((prev) => !prev);
    try {
      await apiRequest.post("/users/save", { postId: post.id });
    } catch (err) {
      console.log(err);
      setSaved((prev) => !prev);
    }
  };

  if (!post) {
    return (
      <div className="singlePage">
        <div className="details">
          <div className="wrapper">
            <div className="info">
              <h2>Listing not found.</h2>
              <p>Please go back and select another property.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={post.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{post.title}</h1>
                <div className="address">
                  <img src="/icons/pin.svg" alt="" />
                  <span>{post.address}</span>
                </div>
                <div className="price">$ {post.price}</div>
              </div>
              <div className="user">
                <img src={post.user.avatar} alt="" />
                <span>{post.user.username}</span>
              </div>
            </div>
            <div
              className="bottom"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.postDetail.desc),
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/icons/utility.svg" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                {post.postDetail.utilities === "owner" ? (
                  <p>Owner is responsible</p>
                ) : (
                  <p>Tenant is responsible</p>
                )}
              </div>
            </div>
            <div className="feature">
              <img src="/icons/pet.svg" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                {post.postDetail.pet === "allowed" ? (
                  <p>Pets Allowed</p>
                ) : (
                  <p>Pets not Allowed</p>
                )}
              </div>
            </div>
            <div className="feature">
              <img src="/icons/fee.svg" alt="" />
              <div className="featureText">
                <span>Income Policy</span>
                <p>{post.postDetail.income}</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/icons/size.svg" alt="" />
              <span>{post.postDetail.size} sqft</span>
            </div>
            <div className="size">
              <img src="/icons/bed.svg" alt="" />
              <span>{post.bedroom} beds</span>
            </div>
            <div className="size">
              <img src="/icons/bath.svg" alt="" />
              <span>{post.bathroom} bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/icons/school.svg" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>
                  {post.postDetail.school > 999
                    ? post.postDetail.school / 1000 + "km"
                    : post.postDetail.school + "m"}{" "}
                  away
                </p>
              </div>
            </div>
            <div className="feature">
              <img src="/icons/pet.svg" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>{post.postDetail.bus}m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/icons/fee.svg" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>{post.postDetail.restaurant}m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[post]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/icons/chat.svg" alt="" />
              Send a Message
            </button>
            <button
              onClick={handleSave}
              style={{
                backgroundColor: saved ? "#fece51" : "white",
              }}
            >
              <img src="/icons/save.svg" alt="" />
              {saved ? "Place Saved" : "Save the Place"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
