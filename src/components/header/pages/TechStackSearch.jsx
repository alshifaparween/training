import React, { useState, useRef } from "react";
import { Button, Form } from "react-bootstrap";

import react1 from "../../../assets/images/react1.png";
import java1 from "../../../assets/images/java1.png";
import jsimages1 from "../../../assets/images/javascript1.png";
import node1 from "../../../assets/images/node1.png";
import android1 from "../../../assets/images/android1.png";
import python1 from "../../../assets/images/pythonn1.png";
import ruby1 from "../../../assets/images/ruby11.png";
import flutter1 from "../../../assets/images/flutter11.png";
import kotlin1 from "../../../assets/images/koltinn1.png";
import angular1 from "../../../assets/images/angularr1.png";
import aws1 from "../../../assets/images/awss1.png";
import mongdb1 from "../../../assets/images/dbb1.png";
import vue1 from "../../../assets/images/vuee1.png";
import flask1 from "../../../assets/images/flask.png";
import jqury1 from "../../../assets/images/jquery1.png";
import php1 from "../../../assets/images/php.png";
import ios1 from "../../../assets/images/ios1.png";
import magento1 from "../../../assets/images/mangento1.png";
import drupal1 from "../../../assets/images/drupal1.png";
import dotnet1 from "../../../assets/images/dott1.png";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";

import styles from "./LandingPage.module.css";
const TechStackSearch = () => {
  const hireDeveloperTechStack = [
    { name: "JavaScript", imgobj: jsimages1 },
    { name: "Java", imgobj: java1 },
    { name: "Andriod", imgobj: android1 },
    { name: "Node.js", imgobj: node1 },
    { name: "React", imgobj: react1 },
  ];
  const [hireDeveloperSearchOutput, sethireDeveloperSearchOutput] = useState(
    []
  );
  const hiredeveloperRef = useRef("");
  const hiredeveloperHandler = () => {
    const searchValue = hiredeveloperRef.current.value.toLowerCase();
    if (searchValue !== "") {
      const searchResult = [];
      console.log(searchResult);
      hireDeveloperTechStack.forEach((obj) => {
        const name = obj.name.toLowerCase();
        if (name.includes(searchValue)) {
          console.log(searchValue, name, obj);
          searchResult.push(obj);
          // console.log(searchResult)
        }
      });
      sethireDeveloperSearchOutput([...searchResult]);
    }
    if (searchValue === "") {
      sethireDeveloperSearchOutput([]);
    }
  };
  return (
    <React.Fragment>
      <div className={styles.tech_stacks}>
        <h1>Hire Talnfinium Top Developers</h1>

        {/* <div className="d-flex justify-content-end">
          <div className={styles.SearchBarTechsatck}>
            <Form className="d-flex">
              <Form.Control
                style={{ borderRadius: "0px" }}
                type="search"
                placeholder="Search"
                className="me-2 frmsrch"
                aria-label="Search"
                ref={hiredeveloperRef}
              />
              <Button
                className={styles.tech_btn}
                onClick={hiredeveloperHandler}
              >
                Search
              </Button>
            </Form>
          </div>
        </div> */}

        {hireDeveloperSearchOutput.length > 0 && (
          <div className={styles.searchbox}>
            {hireDeveloperSearchOutput.map((obj) => {
              return (
                <div
                  className={styles.TechStackSearchResult}
                  style={{ margin: "5% 10%", width: "180px" }}
                >
                  <div className={`${styles.techstacks} `}>
                    <img src={obj.imgobj} alt="" />
                    <h5>{obj.name}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {hireDeveloperSearchOutput.length === 0 && (
          <>
            <div
              className={styles.TechStackSearchResult}
              style={{ margin: "5% 10%" }}
            >
              <div className={`${styles.techstacks}`}>
                <img src={jsimages1} style={{ width: "15%" }} alt="" />
                <h5>Javascript</h5>
              </div>
              <div className={`${styles.techstacks} `}>
                <img src={java1} style={{ width: "15%" }} alt="" />
                <h5>Java</h5>
              </div>
              <div className={`${styles.techstacks} `}>
                <img src={android1} style={{ width: "15%" }} alt="" />
                <h5>Android</h5>
              </div>
              <div className={`${styles.techstacks} `}>
                <img src={node1} style={{ width: "15%" }} alt="" />
                <h5>Node.js</h5>
              </div>
              <div className={`${styles.techstacks} `}>
                <img src={react1} style={{ width: "15%" }} alt="" />
                <h5>React</h5>
              </div>
              <div className={`${styles.techstacks} `}>
                <img src={python1} style={{ width: "15%" }} alt="" />
                <h5>Pytjon</h5>
              </div>
              <div className={`${styles.techstacks} `}>
                <img src={ruby1} style={{ width: "15%" }} alt="" />
                <h5>Ruby</h5>
              </div>
              <div className={`${styles.techstacks} `}>
                <img src={flutter1} style={{ width: "15%" }} alt="" />
                <h5>Flutter</h5>
              </div>
              <div className={`${styles.techstacks} `}>
                <img src={kotlin1} style={{ width: "15%" }} alt="" />
                <h5>Kotlin</h5>
              </div>
              <div className={`${styles.techstacks} `}>
                <img src={angular1} style={{ width: "15%" }} alt="" />
                <h5>Angular</h5>
              </div>
              <div className={`${styles.techstacks} `}>
                <img src={aws1} style={{ width: "15%" }} alt="" />
                <h5>AWS</h5>
              </div>
              <div className={`${styles.techstacks} `}>
                <img src={mongdb1} style={{ width: "15%" }} alt="" />
                <h5>MongoDB</h5>
              </div>
              <div className={`${styles.techstacks} `}>
                <img src={vue1} style={{ width: "15%" }} alt="" />
                <h5>Vue.js</h5>
              </div>
              <div className={`${styles.techstacks} `}>
                <img src={flask1} style={{ width: "15%" }} alt="" />
                <h5>Flask</h5>
              </div>
              <div className={`${styles.techstacks} `}>
                <img src={jqury1} style={{ width: "15%" }} alt="" />
                <h5>jQuery</h5>
              </div>
              <div className={`${styles.techstacks} `}>
                <img src={php1} style={{ width: "15%" }} alt="" />
                <h5>PHP</h5>
              </div>
              <div className={`${styles.techstacks} `}>
                <img src={ios1} style={{ width: "15%" }} alt="" />
                <h5>iOS</h5>
              </div>
              <div className={`${styles.techstacks} `}>
                <img src={magento1} style={{ width: "15%" }} alt="" />
                <h5>Magento</h5>
              </div>
              <div className={`${styles.techstacks} `}>
                <img src={drupal1} style={{ width: "15%" }} alt="" />
                <h5>Drupal</h5>
              </div>
              <div className={`${styles.techstacks} `}>
                <img src={dotnet1} style={{ width: "15%" }} alt="" />
                <h5>.NET</h5>
              </div>
            </div>
          </>
        )}

        <div className="hire_btn2 text-center mt-5">
          <Link className={styles.hire_btn2} to="/hire-developer">
            Hire Talents
          </Link>
        </div>

        {/* <div > <Button className={`align-items-center justify-content-center text-center ${styles.tech_btn22}`}>
              Hire Developers
            </Button></div> */}
      </div>
    </React.Fragment>
  );
};

export default TechStackSearch;
