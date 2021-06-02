import React from "react"

export default function Dashboard() {
  return (
    <>
      <div className="row">
        <div className="col-sm-6 col-md-3">
          <div className="card card-stats card-round">
            <div className="card-body ">
              <div className="row align-items-center">
                <div className="col-icon">
                  <div className="icon-big text-center icon-primary bubble-shadow-small">
                    <i className="fas fa-users" />
                  </div>
                </div>
                <div className="col col-stats ml-3 ml-sm-0">
                  <div className="numbers">
                    <p className="card-category">Visitors</p>
                    <h4 className="card-title">1,294</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="card card-stats card-round">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-icon">
                  <div className="icon-big text-center icon-info bubble-shadow-small">
                    <i className="far fa-newspaper" />
                  </div>
                </div>
                <div className="col col-stats ml-3 ml-sm-0">
                  <div className="numbers">
                    <p className="card-category">Subscribers</p>
                    <h4 className="card-title">1303</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="card card-stats card-round">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-icon">
                  <div className="icon-big text-center icon-success bubble-shadow-small">
                    <i className="far fa-chart-bar" />
                  </div>
                </div>
                <div className="col col-stats ml-3 ml-sm-0">
                  <div className="numbers">
                    <p className="card-category">Sales</p>
                    <h4 className="card-title">$ 1,345</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="card card-stats card-round">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-icon">
                  <div className="icon-big text-center icon-secondary bubble-shadow-small">
                    <i className="far fa-check-circle" />
                  </div>
                </div>
                <div className="col col-stats ml-3 ml-sm-0">
                  <div className="numbers">
                    <p className="card-category">Order</p>
                    <h4 className="card-title">576</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <div className="card-head-row">
                <div className="card-title">User Statistics</div>
                <div className="card-tools">
                  <a
                    href="/"
                    className="btn btn-info btn-border btn-round btn-sm mr-2"
                  >
                    <span className="btn-label">
                      <i className="fa fa-pencil" />
                    </span>
                    Export
                  </a>
                  <a href="/" className="btn btn-info btn-border btn-round btn-sm">
                    <span className="btn-label">
                      <i className="fa fa-print" />
                    </span>
                    Print
                  </a>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="chart-container" style={{ minHeight: "375px" }}>
                <canvas id="statisticsChart" />
              </div>
              <div id="myChartLegend" />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-secondary">
            <div className="card-header">
              <div className="card-title">Daily Sales</div>
              <div className="card-category">March 25 - April 02</div>
            </div>
            <div className="card-body pb-0">
              <div className="mb-4 mt-2">
                <h1>$4,578.58</h1>
              </div>
              <div className="pull-in">
                <canvas id="dailySalesChart" />
              </div>
            </div>
          </div>
          <div className="card card-info bg-info-gradient">
            <div className="card-body">
              <h4 className="mb-1 fw-bold">Tasks Progress</h4>
              <div id="task-complete" className="chart-circle mt-4 mb-3" />
            </div>
          </div>
        </div>
      </div>
      <div className="row row-card-no-pd">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <div className="card-head-row">
                <h4 className="card-title">Users Geolocation</h4>
                <div className="card-tools">
                  <button className="btn btn-icon btn-link btn-primary btn-xs">
                    <span className="fa fa-angle-down" />
                  </button>
                  <button className="btn btn-icon btn-link btn-primary btn-xs btn-refresh-card">
                    <span className="fa fa-sync-alt" />
                  </button>
                  <button className="btn btn-icon btn-link btn-primary btn-xs">
                    <span className="fa fa-times" />
                  </button>
                </div>
              </div>
              <p className="card-category">
                Map of the distribution of users around the world
              </p>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="table-responsive table-hover table-sales">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>
                            <div className="flag">
                              <img
                                src="../assets/img/flags/id.png"
                                alt="indonesia"
                              />
                            </div>
                          </td>
                          <td>Indonesia</td>
                          <td className="text-right">2.320</td>
                          <td className="text-right">42.18%</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="flag">
                              <img
                                src="../assets/img/flags/us.png"
                                alt="united states"
                              />
                            </div>
                          </td>
                          <td>USA</td>
                          <td className="text-right">240</td>
                          <td className="text-right">4.36%</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="flag">
                              <img
                                src="../assets/img/flags/au.png"
                                alt="australia"
                              />
                            </div>
                          </td>
                          <td>Australia</td>
                          <td className="text-right">119</td>
                          <td className="text-right">2.16%</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="flag">
                              <img src="../assets/img/flags/ru.png" alt="russia" />
                            </div>
                          </td>
                          <td>Russia</td>
                          <td className="text-right">1.081</td>
                          <td className="text-right">19.65%</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="flag">
                              <img src="../assets/img/flags/cn.png" alt="china" />
                            </div>
                          </td>
                          <td>China</td>
                          <td className="text-right">1.100</td>
                          <td className="text-right">20%</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="flag">
                              <img src="../assets/img/flags/br.png" alt="brazil" />
                            </div>
                          </td>
                          <td>Brasil</td>
                          <td className="text-right">640</td>
                          <td className="text-right">11.63%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mapcontainer">
                    <div id="map-example" className="vmap" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <div className="card-title">Top Products</div>
            </div>
            <div className="card-body pb-0">
              <div className="d-flex">
                <div className="avatar">
                  <img
                    src="../assets/img/logoproduct.svg"
                    alt="..."
                    className="avatar-img rounded-circle"
                  />
                </div>
                <div className="flex-1 pt-1 ml-2">
                  <h5 className="fw-bold mb-1">CSS</h5>
                  <small className="text-muted">Cascading Style Sheets</small>
                </div>
                <div className="d-flex ml-auto align-items-center">
                  <h3 className="text-info fw-bold">+$17</h3>
                </div>
              </div>
              <div className="separator-dashed" />
              <div className="d-flex">
                <div className="avatar">
                  <img
                    src="../assets/img/logoproduct2.svg"
                    alt="..."
                    className="avatar-img rounded-circle"
                  />
                </div>
                <div className="flex-1 pt-1 ml-2">
                  <h5 className="fw-bold mb-1">J.CO Donuts</h5>
                  <small className="text-muted">The Best Donuts</small>
                </div>
                <div className="d-flex ml-auto align-items-center">
                  <h3 className="text-info fw-bold">+$300</h3>
                </div>
              </div>
              <div className="separator-dashed" />
              <div className="d-flex">
                <div className="avatar">
                  <img
                    src="../assets/img/logoproduct3.svg"
                    alt="..."
                    className="avatar-img rounded-circle"
                  />
                </div>
                <div className="flex-1 pt-1 ml-2">
                  <h5 className="fw-bold mb-1">Ready Pro</h5>
                  <small className="text-muted">Bootstrap 4 Admin Dashboard</small>
                </div>
                <div className="d-flex ml-auto align-items-center">
                  <h3 className="text-info fw-bold">+$350</h3>
                </div>
              </div>
              <div className="separator-dashed" />
              <div className="pull-in">
                <canvas id="topProductsChart" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <div className="card-title fw-mediumbold">Suggested People</div>
              <div className="card-list">
                <div className="item-list">
                  <div className="avatar">
                    <img
                      src="../assets/img/jm_denis.jpg"
                      alt="..."
                      className="avatar-img rounded-circle"
                    />
                  </div>
                  <div className="info-user ml-3">
                    <div className="username">Jimmy Denis</div>
                    <div className="status">Graphic Designer</div>
                  </div>
                  <button className="btn btn-icon btn-primary btn-round btn-sm">
                    <i className="fa fa-plus" />
                  </button>
                </div>
                <div className="item-list">
                  <div className="avatar">
                    <img
                      src="../assets/img/chadengle.jpg"
                      alt="..."
                      className="avatar-img rounded-circle"
                    />
                  </div>
                  <div className="info-user ml-3">
                    <div className="username">Chad</div>
                    <div className="status">CEO Zeleaf</div>
                  </div>
                  <button className="btn btn-icon btn-primary btn-round btn-sm">
                    <i className="fa fa-plus" />
                  </button>
                </div>
                <div className="item-list">
                  <div className="avatar">
                    <img
                      src="../assets/img/talha.jpg"
                      alt="..."
                      className="avatar-img rounded-circle"
                    />
                  </div>
                  <div className="info-user ml-3">
                    <div className="username">Talha</div>
                    <div className="status">Front End Designer</div>
                  </div>
                  <button className="btn btn-icon btn-primary btn-round btn-sm">
                    <i className="fa fa-plus" />
                  </button>
                </div>
                <div className="item-list">
                  <div className="avatar">
                    <img
                      src="../assets/img/mlane.jpg"
                      alt="..."
                      className="avatar-img rounded-circle"
                    />
                  </div>
                  <div className="info-user ml-3">
                    <div className="username">John Doe</div>
                    <div className="status">Back End Developer</div>
                  </div>
                  <button className="btn btn-icon btn-primary btn-round btn-sm">
                    <i className="fa fa-plus" />
                  </button>
                </div>
                <div className="item-list">
                  <div className="avatar">
                    <img
                      src="../assets/img/talha.jpg"
                      alt="..."
                      className="avatar-img rounded-circle"
                    />
                  </div>
                  <div className="info-user ml-3">
                    <div className="username">Talha</div>
                    <div className="status">Front End Designer</div>
                  </div>
                  <button className="btn btn-icon btn-primary btn-round btn-sm">
                    <i className="fa fa-plus" />
                  </button>
                </div>
                <div className="item-list">
                  <div className="avatar">
                    <img
                      src="../assets/img/jm_denis.jpg"
                      alt="..."
                      className="avatar-img rounded-circle"
                    />
                  </div>
                  <div className="info-user ml-3">
                    <div className="username">Jimmy Denis</div>
                    <div className="status">Graphic Designer</div>
                  </div>
                  <button className="btn btn-icon btn-primary btn-round btn-sm">
                    <i className="fa fa-plus" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-primary bg-primary-gradient bubble-shadow">
            <div className="card-body">
              <h4 className="mt-3 b-b1 pb-2 mb-4 fw-bold">Active user right now</h4>
              <h1 className="mb-4 fw-bold">17</h1>
              <h4 className="mt-3 b-b1 pb-2 mb-5 fw-bold">Page view per minutes</h4>
              <div id="activeUsersChart" />
              <h4 className="mt-5 pb-3 mb-0 fw-bold">Top active pages</h4>
              <ul className="list-unstyled">
                <li className="d-flex justify-content-between pb-1 pt-1">
                  <small>/product/readypro/index.html</small> <span>7</span>
                </li>
                <li className="d-flex justify-content-between pb-1 pt-1">
                  <small>/product/azzara/demo.html</small> <span>10</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <div className="card-title">Feed Activity</div>
            </div>
            <div className="card-body">
              <ol className="activity-feed">
                <li className="feed-item feed-item-secondary">
                  <time className="date" dateTime="9-25">
                    Sep 25
                  </time>
                  <span className="text">
                    Responded to need <a href="/">Volunteer opportunity</a>
                  </span>
                </li>
                <li className="feed-item feed-item-success">
                  <time className="date" dateTime="9-24">
                    Sep 24
                  </time>
                  <span className="text">
                    Added an interest <a href="/">Volunteer Activities</a>
                  </span>
                </li>
                <li className="feed-item feed-item-info">
                  <time className="date" dateTime="9-23">
                    Sep 23
                  </time>
                  <span className="text">
                    Joined the group{" "}
                    <a href="single-group.php">Boardsmanship Forum</a>
                  </span>
                </li>
                <li className="feed-item feed-item-warning">
                  <time className="date" dateTime="9-21">
                    Sep 21
                  </time>
                  <span className="text">
                    Responded to need <a href="/">In-Kind Opportunity</a>
                  </span>
                </li>
                <li className="feed-item feed-item-danger">
                  <time className="date" dateTime="9-18">
                    Sep 18
                  </time>
                  <span className="text">
                    Created need <a href="/">Volunteer Opportunity</a>
                  </span>
                </li>
                <li className="feed-item">
                  <time className="date" dateTime="9-17">
                    Sep 17
                  </time>
                  <span className="text">
                    Attending the event <a href="single-event.php">Some New Event</a>
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <div className="card-head-row">
                <div className="card-title">Support Tickets</div>
                <div className="card-tools">
                  <ul
                    className="nav nav-pills nav-secondary nav-pills-no-bd nav-sm"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="pills-today"
                        data-toggle="pill"
                        href="/pills-today"
                        role="tab"
                        aria-selected="true"
                      >
                        Today
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="pills-week"
                        data-toggle="pill"
                        href="/pills-week"
                        role="tab"
                        aria-selected="false"
                      >
                        Week
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="pills-month"
                        data-toggle="pill"
                        href="/pills-month"
                        role="tab"
                        aria-selected="false"
                      >
                        Month
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="d-flex">
                <div className="avatar avatar-online">
                  <span className="avatar-title rounded-circle border border-white bg-info">
                    J
                  </span>
                </div>
                <div className="flex-1 ml-3 pt-1">
                  <h5 className="text-uppercase fw-bold mb-1">
                    Joko Subianto <span className="text-warning pl-3">pending</span>
                  </h5>
                  <span className="text-muted">
                    I am facing some trouble with my viewport. When i start my
                  </span>
                </div>
                <div className="float-right pt-1">
                  <small className="text-muted">8:40 PM</small>
                </div>
              </div>
              <div className="separator-dashed" />
              <div className="d-flex">
                <div className="avatar avatar-offline">
                  <span className="avatar-title rounded-circle border border-white bg-secondary">
                    P
                  </span>
                </div>
                <div className="flex-1 ml-3 pt-1">
                  <h5 className="text-uppercase fw-bold mb-1">
                    Prabowo Widodo <span className="text-success pl-3">open</span>
                  </h5>
                  <span className="text-muted">
                    I have some query regarding the license issue.
                  </span>
                </div>
                <div className="float-right pt-1">
                  <small className="text-muted">1 Day Ago</small>
                </div>
              </div>
              <div className="separator-dashed" />
              <div className="d-flex">
                <div className="avatar avatar-away">
                  <span className="avatar-title rounded-circle border border-white bg-danger">
                    L
                  </span>
                </div>
                <div className="flex-1 ml-3 pt-1">
                  <h5 className="text-uppercase fw-bold mb-1">
                    Lee Chong Wei <span className="text-muted pl-3">closed</span>
                  </h5>
                  <span className="text-muted">
                    Is there any update plan for RTL version near future?
                  </span>
                </div>
                <div className="float-right pt-1">
                  <small className="text-muted">2 Days Ago</small>
                </div>
              </div>
              <div className="separator-dashed" />
              <div className="d-flex">
                <div className="avatar avatar-offline">
                  <span className="avatar-title rounded-circle border border-white bg-secondary">
                    P
                  </span>
                </div>
                <div className="flex-1 ml-3 pt-1">
                  <h5 className="text-uppercase fw-bold mb-1">
                    Peter Parker <span className="text-success pl-3">open</span>
                  </h5>
                  <span className="text-muted">
                    I have some query regarding the license issue.
                  </span>
                </div>
                <div className="float-right pt-1">
                  <small className="text-muted">2 Day Ago</small>
                </div>
              </div>
              <div className="separator-dashed" />
              <div className="d-flex">
                <div className="avatar avatar-away">
                  <span className="avatar-title rounded-circle border border-white bg-danger">
                    L
                  </span>
                </div>
                <div className="flex-1 ml-3 pt-1">
                  <h5 className="text-uppercase fw-bold mb-1">
                    Logan Paul <span className="text-muted pl-3">closed</span>
                  </h5>
                  <span className="text-muted">
                    Is there any update plan for RTL version near future?
                  </span>
                </div>
                <div className="float-right pt-1">
                  <small className="text-muted">2 Days Ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
