import stylesvisa from "./Visa.module.css";
import icon from "@assets/icon.png";
import visa from "@assets/visa.png";
import chip from "@assets/chip.png";
import dot from "@assets/more.png";
import dish from "@assets/dish.png";
import play from "@assets/play.png";
import red from "@assets/red.png";
import green from "@assets/green.png";
import dollar from "@assets/dollar.png";
import money from "@assets/money.png";
import bag from "@assets/bag.png";
import calen from "@assets/calendar.png";

const visapage1 = () => {
  return (
    <div className={stylesvisa.containervisa}>
      {/* ส่วนหัว */}
      <div className={stylesvisa.rowcon}>
        <h1 className={stylesvisa.h1}>All my accounts</h1>
        <img style={{ width: 16 }} src={icon} />
      </div>
      <h2 className={stylesvisa.h2}>June 10, 2018</h2>

      {/* ส่วนการ์ด */}
      <div className={stylesvisa.card}>
        <div className={stylesvisa.cardleft}></div>
        <div className={stylesvisa.cardinner}>
          <div className={stylesvisa.front}>
            <img style={{ width: 45, margin: "20px 0 0 20px" }} src={visa} />
            <p className={stylesvisa.avail}>Available Balance</p>
            <div className={stylesvisa.row0}>
              <img style={{ width: 35 }} src={chip} />
              <p>
                <span className={stylesvisa.dollar}>$</span>&nbsp;7,392.00
              </p>
            </div>
            <div className={stylesvisa.row}>
              <p>42012</p>
              <p>3049</p>
              <p>2800</p>
              <p>9815</p>
            </div>
            <div className={stylesvisa.row2}>
              <p style={{ display: "flex" }}>
                EXPIRE &nbsp;
                <img
                  style={{ width: 6, height: 6, alignSelf: "center" }}
                  src={play}
                />
                &nbsp; 02/22
              </p>
              <p style={{ display: "flex" }}>
                CVC CODE &nbsp;
                <img
                  style={{ width: 6, height: 6, alignSelf: "center" }}
                  src={play}
                />
                &nbsp; 230
              </p>
            </div>
          </div>
        </div>
        <div className={stylesvisa.cardright}></div>
      </div>
      <img className={stylesvisa.dot} src={dot} />

      {/* ส่วนสรุป */}
      <div className={stylesvisa.box1}>
        <div style={{borderRight:"1px solid rgb(217, 217, 217)",paddingRight:45}} className={stylesvisa.row1}>
          <p>Income</p>
          <span style={{ display: "flex", fontSize: 14, color: "rgb(31, 177, 31)" }}>
            <img style={{ width: 18, height: 21 }} src={green} />
            &nbsp;$9,302.00
          </span>
        </div>
        <div className={stylesvisa.row1}>
          <p>Expense</p>
          <span style={{ display: "flex", fontSize: 14, color: "red" }}>
            <img style={{ width: 20, height: 18, paddingTop: 2 }} src={red} />
            &nbsp;$2,790.00
          </span>
        </div>
      </div>

      {/* ส่วน Detail */}
      <div className={stylesvisa.rowcon}>
        <h3 style={{ paddingLeft: 15, fontSize: 16, fontWeight:"bold" }}>Detail of movements</h3>
        <img style={{ width: 20 }} src={calen} />
      </div>

      <div className={stylesvisa.boxlist1}>
        <img style={{ width: 30 }} src={dish} />
        <div className={stylesvisa.rowlist}>
          <p
            style={{
              fontSize: 14,
              color: "rgb(64, 72, 84)",
              fontWeight: "bold",
            }}
          >
            Restaurant Manhattan
          </p>
          <p className={stylesvisa.date}>June 10, 2018</p>
        </div>
        <span style={{ display: "flex", fontSize: 14, color: "red",marginLeft:60 }}>
          $170&nbsp;
          <img style={{ width: 15, height: 16, paddingTop: 2 }} src={red} />
        </span>
      </div>

      <div className={stylesvisa.boxlist1}>
        <img style={{ width: 30 }} src={money} />
        <div className={stylesvisa.rowlist}>
          <p
            style={{
              fontSize: 14,
              color: "rgb(64, 72, 84)",
              fontWeight: "bold",
            }}
          >
            Salary Deposit
          </p>
          <p className={stylesvisa.date}>June 1, 2018</p>
        </div>
        <span style={{ display: "flex", fontSize: 14, color: "rgb(31, 177, 31)",marginLeft:95 }}>
          $1,200&nbsp;
          <img style={{ width: 15, height: 20, paddingTop: 2 }} src={green} />
        </span>
      </div>

      <div className={stylesvisa.boxlist1}>
        <img style={{ width: 30 }} src={bag} />
        <div className={stylesvisa.rowlist}>
          <p
            style={{
              fontSize: 14,
              color: "rgb(64, 72, 84)",
              fontWeight: "bold",
            }}
          >
            Central Market
          </p>
          <p className={stylesvisa.date}>May 28, 2018</p>
        </div>
        <span style={{ display: "flex", fontSize: 14, color: "red",marginLeft:110 }}>
          $50&nbsp;
          <img style={{ width: 15, height: 16, paddingTop: 2 }} src={red} />
        </span>
      </div>

      <div className={stylesvisa.boxlist1}>
        <img style={{ width: 30 }} src={dollar} />
        <div className={stylesvisa.rowlist}>
          <p
            style={{
              fontSize: 14,
              color: "rgb(64, 72, 84)",
              fontWeight: "bold",
            }}
          >
            Salary Deposit
          </p>
          <p className={stylesvisa.date}>May 1, 2018</p>
        </div>
        <span style={{ display: "flex", fontSize: 14, color: "rgb(31, 177, 31)",marginLeft:95 }}>
          $1,200&nbsp;
          <img style={{ width: 15, height: 20, paddingTop: 2 }} src={green} />
        </span>
      </div>
    </div>
  );
};

export default visapage1;
