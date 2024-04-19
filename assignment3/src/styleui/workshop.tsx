import stylesworkshop from "./Workshop.module.css";
import bar from "@assets/menu_bar.png";
import left from "@assets/arrow_left_icon.png";
import right from "@assets/arrow_right_icon.png";
import plane from "@assets/airport_icon.png";
import money from "@assets/easy_booking_icon.png";
import people from "@assets/group_icon.png";
import star from "@assets/star_icon.png";

const workshop = () => {
  return (
    <div className={stylesworkshop.containerw}>
      {/* ส่วนของ navbar */}
      <ul className={stylesworkshop.navul}>
        <div>
          <li className={stylesworkshop.title}>IsLand</li>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <li className={stylesworkshop.navli}>Our tours</li>
          <li className={stylesworkshop.navli}>About us</li>
          <li className={stylesworkshop.navli}>About us</li>
          <li className={stylesworkshop.navli}>Booking</li>
          <li className={stylesworkshop.navli}>FAQ</li>
        </div>
        <div>
          <li>
            <img className={stylesworkshop.bar} src={bar} />
          </li>
        </div>
      </ul>

      {/* ส่วนของ banner */}
      <div className={stylesworkshop.bg}>
        <div className={stylesworkshop.textim}>
          Explore the sights of the Azores
        </div>
        <div className={stylesworkshop.textim2}>
          A place where noture and adventure unite
        </div>
        <button className={stylesworkshop.buttonbook}>Book now</button>
        <div style={{ display: "flex" }}>
          <div className={stylesworkshop.circle}>
            <img className={stylesworkshop.left} src={left} />
          </div>
          <div className={stylesworkshop.circle2}>
            <img className={stylesworkshop.left} src={right} />
          </div>
        </div>
      </div>

      {/* ส่วนของ top value */}
         <h1
        style={{
          fontSize: 48,
          textAlign: "center",
          marginTop: 80,
          fontWeight: 700,
        }}
      >
        Top values for you
      </h1>
      <p
        style={{
          color: "#707070",
          fontSize: 18,
          textAlign: "center",
          marginTop: 25,
          fontWeight: 500,
        }}
      >
        Try variety of benefirts when using our services
      </p>
      <div className={stylesworkshop.columngroup}>
        <div style={{margin:"0 auto 25px", textAlign: "center" }}>
          <div className={stylesworkshop.circle3}>
            <img className={stylesworkshop.icon} src={plane} />
          </div>
          <p className={stylesworkshop.name}>Airport pickup</p>
          <p className={stylesworkshop.content}>
            xxxxxxxx xxxxxxxx xxxx xxxxxxxxxxxxx
          </p>
        </div>
        <div style={{margin:"0 auto 25px", textAlign: "center" }}>
          <div className={stylesworkshop.circle3}>
            <img className={stylesworkshop.icon} src={money} />
          </div>
          <p className={stylesworkshop.name}>Easy booking</p>
          <p className={stylesworkshop.content}>
            xxxxxxxx xxxxxxxx xxxx xxxxxxxxxxxxx
          </p>
        </div>
        <div style={{margin:"0 auto 25px", textAlign: "center" }}>
          <div className={stylesworkshop.circle3}>
            <img className={stylesworkshop.icon} src={people} />
          </div>
          <p className={stylesworkshop.name}>Best tour guide</p>
          <p className={stylesworkshop.content}>
            xxxxxxxx xxxxxxxx xxxx xxxxxxxxxxxxx
          </p>
        </div>
        <div style={{margin:"0 auto 25px", textAlign: "center" }}>
          <div className={stylesworkshop.circle3}>
            <img className={stylesworkshop.icon} src={people} />
          </div>
          <p className={stylesworkshop.name}>Lots of promos</p>
          <p className={stylesworkshop.content}>
            xxxxxxxx xxxxxxxx xxxx xxxxxxxxxxxxx
          </p>
        </div>
      </div>

      {/* ส่วนของ choose tour */}
      <h1 className={stylesworkshop.choose}
          style={{
            fontSize: 48,
            fontWeight: 700,
          }}
        >
          Choose your tour
        </h1>
        <div style={{ /* padding:"0 80px", */margin: "auto" }}>
        <div className={stylesworkshop.columngroup2}>
          <div className={stylesworkshop.box}>
            <div className={stylesworkshop.inside1}>
              <div className={stylesworkshop.col}>
                <p className={stylesworkshop.rating}>5.0</p>
                <img
                  style={{ width: 13, height: 12, marginTop: 6 }}
                  src={star}
                />
              </div>
            </div>
            <div className={stylesworkshop.detailbox}>
              <p className={stylesworkshop.detail}>Alone with nature $ 100</p>
              <div className={stylesworkshop.circlenext}>
                <img className={stylesworkshop.arrownext} src={right} />
              </div>
            </div>
          </div>

          <div className={stylesworkshop.box}>
            <div className={stylesworkshop.inside2}>
              <div className={stylesworkshop.col}>
                <p className={stylesworkshop.rating}>4.9</p>
                <img
                  style={{ width: 13, height: 12, marginTop: 6 }}
                  src={star}
                />
              </div>
            </div>
            <div className={stylesworkshop.detailbox}>
              <p className={stylesworkshop.detail}>
                The beach <br /> $ 200
              </p>
              <div className={stylesworkshop.circlenext}>
                <img className={stylesworkshop.arrownext} src={right} />
              </div>
            </div>
          </div>

          <div className={stylesworkshop.box}>
            <div className={stylesworkshop.inside3}>
              <div className={stylesworkshop.col}>
                <p className={stylesworkshop.rating}>5.0</p>
                <img
                  style={{ width: 13, height: 12, marginTop: 6 }}
                  src={star}
                />
              </div>
            </div>
            <div className={stylesworkshop.detailbox}>
              <p className={stylesworkshop.detail}>
                Mountain nature <br /> $ 150
              </p>
              <div className={stylesworkshop.circlenext}>
                <img className={stylesworkshop.arrownext} src={right} />
              </div>
            </div>
          </div>

          <div className={stylesworkshop.box}>
            <div className={stylesworkshop.inside4}>
              <div className={stylesworkshop.col}>
                <p className={stylesworkshop.rating}>4.8</p>
                <img
                  style={{ width: 13, height: 12, marginTop: 6 }}
                  src={star}
                />
              </div>
            </div>
            <div className={stylesworkshop.detailbox}>
              <p className={stylesworkshop.detail}>
                Airport thailand <br /> $ 80
              </p>
              <div className={stylesworkshop.circlenext}>
                <img className={stylesworkshop.arrownext} src={right} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className={stylesworkshop.seeall}>See all</button>
    </div>
  );
};

export default workshop;
