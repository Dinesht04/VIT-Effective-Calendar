import React from "react";
import {Helmet} from 'react-helmet'

const Calendar = () =>{
    return(
        <div>
        <Helmet>
        <script src="/assets/script.js" type="text/javascript"/>
         </Helmet>
                <div>
                  <meta charSet="UTF-8" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                  <title>Home</title>
                  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
                  <link rel="stylesheet" href="/assets/styles.css" />
                   <style dangerouslySetInnerHTML={{__html: "\n  .sidebar {\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 80px;\n    background-color: #344955;\n    z-index: 100;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  /*.sidebar-icons {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-top: 20px;\n  }\n  */\n\n  .icon {\n    width: 50px;\n    height: 50px;\n    background-color: #50727b;\n    border-radius: 50%;\n  display: flex;\n   justify-content: center;\n    align-items: center;\n    margin-bottom: 20px;\n  }\n\n  .person-icon {\n    width: 50px;\n    height: 50px;\n    background-color: #444;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: auto; \n    margin-bottom: auto;\n    cursor: pointer;\n  }\n\n  .person-icon i {\n    position: relative;\n    color: #fff;\n  }\n\n  .dropdown-menu {\n    display: none;\n    position: absolute;\n    bottom: 30px;\n    left: 0;\n    background-color: #50727b;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    padding: 10px;\n    z-index: 1;\n  }\n\n  .dropdown-menu :hover {\n    background-color: azure;\n    border-radius: 5px;\n  }\n\n  .dropdown-menu a {\n    display: block;\n    color: #333;\n    text-decoration: none;\n    padding: 8px 0;\n  }\n\n  .person-icon.active .dropdown-menu {\n    display: block;\n  }\n\n  .person-icon.active .dropdown-menu {\n    display: block;\n  }\n\n\n  .icon i {\n    color: #fff;\n    font-size: 20px;\n  }\n\n  .person-icon i {\n    color: #fff;\n  }\n\n  .icon i {\n    color: #fff;\n    font-size: 20px;\n  }\n\n  /* Media query for small screens */\n  @media screen and (max-width: 1161px) {\n    .sidebar {\n      width: 60px;\n    }\n\n    .icon {\n      width: 30px;\n      height: 30px;\n    }\n\n    .person-icon {\n      width: 30px;\n      height: 30px;\n    }\n\n    .icon i {\n      font-size: 16px;\n    }\n  }\n\n  @media screen and (max-width: 1161px) {\n\n    .icon,\n    .person-icon {\n      width: 30px;\n      height: 30px;\n    }\n\n    .icon i {\n      font-size: 16px;\n    }\n  }\n\n  @media screen and (max-width: 1000px) {\n    .sidebar {\n      width: 50px;\n    }\n\n    .icon {\n      width: 25px;\n      height: 30px;\n    }\n\n    .person-icon {\n      width: 25px;\n      height: 30px;\n    }\n\n    .icon i {\n      font-size: 16px;\n    }\n  }\n\n  @media screen and (max-width: 1000px) {\n\n    .icon,\n    .person-icon {\n      width: 25px;\n      height: 30px;\n    }\n\n    .icon i {\n      font-size: 16px;\n    }\n  }\n" }} />
                  <div className="sidebar">
                    {/* <div class="sidebar-icons">
                <a href="#">
                  <div class="icon exam-icon"><i class="fas fa-graduation-cap"></i></div>
                </a>
                <a href="#">
                  <div class="icon menu-icon"><i class="fas fa-bars"></i></div>
                </a>
                <a href="#">
                  <div class="icon extra-curricular-icon"><i class="fas fa-trophy"></i></div>
                </a>
              </div> */}
                    <div className="person-icon">
                      <i className="fas fa-user" />
                      <div className="dropdown-menu">
                        <a href="/assets/Sahaj.html">Sahaj Jain</a>
                        <a href="/assets/Nitin.html">Nitin Saini</a>
                        <a href="/assets/Vibhuti.html">Vibhuti Purohit</a>
                        <a href="/assets/Diya.html">Diya Sharma</a>
                        <a href="/assets/Mayank.html">Mayank Suryavanshi</a>
                      </div>
                    </div>
                  </div>
                  <div className="container">
                    <div className="left">
                      <div className="calendar">
                        <div className="month">
                          <i className="fas fa-angle-left prev" />
                          <div className="date">december 2015</div>
                          <i className="fas fa-angle-right next" />
                        </div>
                        <div className="weekdays">
                          <div>Sun</div>
                          <div>Mon</div>
                          <div>Tue</div>
                          <div>Wed</div>
                          <div>Thu</div>
                          <div>Fri</div>
                          <div>Sat</div>
                        </div>
                        <div className="days" />
                        <div className="goto-today">
                          <div className="goto">
                            <input type="text" placeholder="mm/yyyy" className="date-input" />
                            <button className="goto-btn">Go</button>
                          </div>
                          <button className="today-btn">Today</button>
                        </div>
                      </div>
                    </div>
                    <div className="right">
                      <div className="today-date">
                        <div className="event-day">wed</div>
                        <div className="event-date">12th december 2022</div>
                      </div>
                      <div className="events" />
                      <div className="add-event-wrapper">
                        <div className="add-event-header">
                          <div className="title">Add Event</div>
                          <i className="fas fa-times close" />
                        </div>
                        <div className="add-event-body">
                          <div className="add-event-input">
                            <input type="text" placeholder="Event Name" className="event-name" />
                          </div>
                          <div className="add-event-input">
                            <input type="text" placeholder="Event Time From" className="event-time-from" />
                          </div>
                          <div className="add-event-input">
                            <input type="text" placeholder="Event Time To" className="event-time-to" />
                          </div>
                        </div>
                        <div className="add-event-footer">
                          <button className="add-event-btn">Add Event</button>
                        </div>
                      </div>
                    </div>
                    <button className="add-event">
                      <i className="fas fa-plus" />
                    </button>
                  </div>
                </div>
              
                </div>
    )
} 

export default Calendar