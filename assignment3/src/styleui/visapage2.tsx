import stylesvisa from "./Visa.module.css";
import dish from "@assets/dish.png";
import play from "@assets/play.png";
import red from "@assets/red.png";
import green from "@assets/green.png";
import dollar from "@assets/dollar.png";
import money from "@assets/money.png";
import bag from "@assets/bag.png";
import calen from "@assets/calendarwh.png";
import down from "@assets/arrowdown.png";
import nav from "@assets/menu.png";

const visapage2 = () => {
  return (
    <div className={stylesvisa.containervisa2}>
      <div className={stylesvisa.rowconvisa2}>
        <img style={{ width: 18 }} src={nav} />
        <img style={{ width: 18 }} src={calen} />
      </div>
      <p style={{ textAlign: "center" }} className={stylesvisa.avail2}>
        Available Balance
      </p>
      <p style={{ color: "white", textAlign: "center", fontSize: 24 }}>
        <span className={stylesvisa.dollar}>$</span>&nbsp;7,392.00
      </p>
      <p style={{ textAlign: "center" }} className={stylesvisa.date}>
        June 9, 2018
      </p>

      <div className={stylesvisa.box}>
        <div style={{ marginTop: 10 }} className={stylesvisa.row}>
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

      <div className={stylesvisa.box1}>
        <div className={stylesvisa.row1}>
          <p>Income</p>
          <span
            style={{ display: "flex", fontSize: 14, color: "rgb(31, 177, 31)" }}
          >
            <img style={{ width: 18, height: 21 }} src={green} />
            &nbsp;$9,302.00
          </span>
        </div>
        <div style={{borderLeft:"1px solid rgb(221, 221, 221)", height:50}}></div>
        <div className={stylesvisa.row1}>
          <p>Expense</p>
          <span style={{ display: "flex", fontSize: 14, color: "red" }}>
            <img style={{ width: 20, height: 18, paddingTop: 2 }} src={red} />
            &nbsp;$2,790.00
          </span>
        </div>
      </div>
      <div className={stylesvisa.rowconvisa2}>
        <h3
          style={{
            paddingLeft: 5,
            fontSize: 18,
            color: "black",
            fontWeight: 600,
          }}
        >
          Detail of movements
        </h3>
        <p style={{ display: "flex", fontSize: 14, color: "black" }}>
          weekly&nbsp;&nbsp;
          <img
            style={{ width: 12, height: 12, alignSelf: "center", marginTop: 3 }}
            src={down}
          />
        </p>
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
        <span
          style={{
            display: "flex",
            fontSize: 14,
            color: "red",
          }}
        >
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
            Deposit Freelance
          </p>
          <p className={stylesvisa.date}>June 7, 2018</p>
        </div>
        <span
          style={{
            display: "flex",
            fontSize: 14,
            color: "rgb(31, 177, 31)",
          }}
        >
          $800&nbsp;
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
          <p className={stylesvisa.date}>June 6, 2018</p>
        </div>
        <span
          style={{
            display: "flex",
            fontSize: 14,
            color: "red",
          }}
        >
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
          <p className={stylesvisa.date}>June 1, 2018</p>
        </div>
        <span
          style={{
            display: "flex",
            fontSize: 14,
            color: "rgb(31, 177, 31)",
          }}
        >
          $4,200&nbsp;
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
          <p className={stylesvisa.date}>June 1, 2018</p>
        </div>
        <span
          style={{
            display: "flex",
            fontSize: 14,
            color: "red",
          }}
        >
          $37&nbsp;
          <img style={{ width: 15, height: 16, paddingTop: 2 }} src={red} />
        </span>
      </div>
    </div>
  );
};
export default visapage2;
