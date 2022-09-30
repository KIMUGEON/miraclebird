import React, { useState, useEffect } from "react";
import styles from "./MypageFeed.module.css";
import Modal from "react-bootstrap/Modal";
import seasonInfo from "../../pages/season.json";
import { NOW_ACCESS_TOKEN, API_BASE_URL } from "/src/constants";
import axios from "axios";

function MypageFeed(props) {
  const [challengeData, setChallengeData] = useState("");

  useEffect(() => {

    var startdate = seasonInfo[0].startDate + "_00:00:00.000";
    var enddate = seasonInfo[0].endDate + "_23:59:59.000";

    axios({
      url: API_BASE_URL + "/verification/heatmap/" + props.userData.userIdx,
      method: "GET",
      headers: {
        Authorization: "Bearer " + NOW_ACCESS_TOKEN,
      },
      params: {
        start_date: startdate,
        end_date: enddate,
      },
    })
      .then((res) => {
        setChallengeData(res.data);
        console.log('feed',challengeData[1])
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.userData]);

  const SEOSON_SELECT = [
    {
      values: [
        { date: "2022-09-03", count: 1, url: "./miraclemorning.png" },
        { date: "2022-09-04", count: 2, url: "./health.jpg" },
        { date: "2022-09-05", count: 3, url: "./miraclemorning.png" },
        { date: "2022-09-08", count: 1, url: "./miraclemorning.png" },
        { date: "2022-09-09", count: 2, url: "./health.jpg" },
        { date: "2022-09-10", count: 3, url: "./miraclemorning.png" },
        { date: "2022-09-11", count: 2, url: "./study.jpg" },
        { date: "2022-09-12", count: 1, url: "./miraclemorning.png" },
        { date: "2022-09-13", count: 3, url: "./miraclemorning.png" },
      ],
    },
    {
      values: [
        { date: "2022-10-03", count: 1, url: "./study.jpg" },
        { date: "2022-10-04", count: 2, url: "./health.jpg" },
        { date: "2022-10-05", count: 3, url: "./miraclemorning.png" },
        { date: "2022-10-08", count: 1, url: "./miraclemorning.png" },
        { date: "2022-10-09", count: 2, url: "./study.jpg" },
        { date: "2022-10-10", count: 3, url: "./study.jpg" },
        { date: "2022-10-11", count: 2, url: "./miraclemorning.png" },
        { date: "2022-10-12", count: 1, url: "./study.jpg" },
        { date: "2022-10-13", count: 3, url: "./miraclemorning.png" },
        { date: "2022-10-14", count: 1, url: "./study.jpg" },
        { date: "2022-10-16", count: 2, url: "./study.jpg" },
        { date: "2022-10-17", count: 2, url: "./health.jpg" },
      ],
    },
    {
      values: [
        { date: "2022-11-03", count: 1, url: "./health.jpg" },
        { date: "2022-11-04", count: 2, url: "./study.jpg" },
        { date: "2022-11-05", count: 3, url: "./miraclemorning.png" },
        { date: "2022-11-08", count: 1, url: "./study.jpg" },
        { date: "2022-11-11", count: 2, url: "./study.jpg" },
        { date: "2022-11-12", count: 1, url: "./health.jpg" },
        { date: "2022-11-13", count: 3, url: "./study.jpg" },
        { date: "2022-11-14", count: 1, url: "./health.jpg" },
        { date: "2022-11-16", count: 2, url: "./miraclemorning.png" },
        { date: "2022-11-17", count: 2, url: "./study.jpg" },
        { date: "2022-11-20", count: 1, url: "./study.jpg" },
        { date: "2022-11-21", count: 2, url: "./study.jpg" },
        { date: "2022-11-22", count: 1, url: "./miraclemorning.png" },
        { date: "2022-11-23", count: 3, url: "./study.jpg" },
      ],
    },
  ];
  let [idx, setIdx] = useState(0);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <select
        className={styles.selectBox}
        onChange={(e) => setIdx(e.target.value)}>
        {seasonInfo.map((item) => {
          return (
            <option key={item.season} value={item.season}>
              시즌 {item.season}
            </option>
          );
        })}
      </select>
      <div className={styles.feeds}>
        <div className={styles.list}>
          <button className={styles.listbtn} onClick={() => handleShow()}>
            <img src="/list.png" className={styles.listicon}></img>
          </button>
        </div>
        <div className={styles.feedsImg}>
          <img
            src={SEOSON_SELECT[idx].values[0].url}
            // src={challengeData[1].selfie}
            className={styles.feedImg}
            alt="feedImg"
          />
        </div>
      </div>

      <Modal
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className={styles.dialog}>
        <Modal.Header className={styles.modalheader} closeButton></Modal.Header>
        <Modal.Body className={styles.body}>
          <div className={styles.modalcontent}>
            {SEOSON_SELECT[idx].values.map((item) => {
              return (
                <>
                  <img src={item.url} className={styles.feedImg} />
                  <div className={styles.imgdate}>{item.date}</div>
                </>
              );
            })}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MypageFeed;
