import React from 'react'
import PropTypes from 'prop-types'

const Dashboard = props => {
    return (
        <div>
        <div>
           <div className="page-container">	
<div className="left-content">
  <div className="mother-grid-inner">
    <div className="inner-block">
      {/*market updates updates*/}
      <div className="market-updates">
        <div className="col-md-4 market-update-gd">
          <div className="market-update-block clr-block-1">
            <div className="col-md-8 market-update-left">
              <h3>83</h3>
              <h4>Registered User</h4>
              <p>Other hand, we denounce</p>
            </div>
            <div className="col-md-4 market-update-right">
              <i className="fa fa-file-text-o"> </i>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
        <div className="col-md-4 market-update-gd">
          <div className="market-update-block clr-block-2">
            <div className="col-md-8 market-update-left">
              <h3>135</h3>
              <h4>Daily Visitors</h4>
              <p>Other hand, we denounce</p>
            </div>
            <div className="col-md-4 market-update-right">
              <i className="fa fa-eye"> </i>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
        <div className="col-md-4 market-update-gd">
          <div className="market-update-block clr-block-3">
            <div className="col-md-8 market-update-left">
              <h3>23</h3>
              <h4>New Messages</h4>
              <p>Other hand, we denounce</p>
            </div>
            <div className="col-md-4 market-update-right">
              <i className="fa fa-envelope-o"> </i>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
        <div className="clearfix"> </div>
      </div>
      {/*market updates end here*/}
      {/*mainpage chit-chating*/}
      <div className="chit-chat-layer1">
        <div className="col-md-6 chit-chat-layer1-left">
          <div className="work-progres">
            <div className="chit-chat-heading">
              Recent Followers
            </div>
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Project</th>
                    <th>Manager</th>                                   
                    <th>Status</th>
                    <th>Progress</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Face book</td>
                    <td>Malorum</td>                                 
                    <td><span className="label label-danger">in progress</span></td>
                    <td><span className="badge badge-info">50%</span></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Twitter</td>
                    <td>Evan</td>                               
                    <td><span className="label label-success">completed</span></td>
                    <td><span className="badge badge-success">100%</span></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Google</td>
                    <td>John</td>                                
                    <td><span className="label label-warning">in progress</span></td>
                    <td><span className="badge badge-warning">75%</span></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>LinkedIn</td>
                    <td>Danial</td>                                 
                    <td><span className="label label-info">in progress</span></td>
                    <td><span className="badge badge-info">65%</span></td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Tumblr</td>
                    <td>David</td>                                
                    <td><span className="label label-warning">in progress</span></td>
                    <td><span className="badge badge-danger">95%</span></td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Tesla</td>
                    <td>Mickey</td>                                  
                    <td><span className="label label-info">in progress</span></td>
                    <td><span className="badge badge-success">95%</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-md-6 chit-chat-layer1-rit">    	
          <div className="geo-chart">
            <section id="charts1" className="charts">
              <div className="wrapper-flex">
                <table id="myTable" className="geoChart tableChart data-table col-table" style={{display: 'none'}}>
                  <caption>Student Nationalities Table</caption>
                  <tbody><tr>
                      <th scope="col" data-type="string">Country</th>
                      <th scope="col" data-type="number">Number of Students</th>
                      <th scope="col" data-role="annotation">Annotation</th>
                    </tr>
                    <tr>
                      <td>China</td>
                      <td align="right">20</td>
                      <td align="right">20</td>
                    </tr>
                    <tr>
                      <td>Colombia</td>
                      <td align="right">5</td>
                      <td align="right">5</td>
                    </tr>
                    <tr>
                      <td>France</td>
                      <td align="right">3</td>
                      <td align="right">3</td>
                    </tr>
                    <tr>
                      <td>Italy</td>
                      <td align="right">1</td>
                      <td align="right">1</td>
                    </tr>
                    <tr>
                      <td>Japan</td>
                      <td align="right">18</td>
                      <td align="right">18</td>
                    </tr>
                    <tr>
                      <td>Kazakhstan</td>
                      <td align="right">1</td>
                      <td align="right">1</td>
                    </tr>
                    <tr>
                      <td>Mexico</td>
                      <td align="right">1</td>
                      <td align="right">1</td>
                    </tr>
                    <tr>
                      <td>Poland</td>
                      <td align="right">1</td>
                      <td align="right">1</td>
                    </tr>
                    <tr>
                      <td>Russia</td>
                      <td align="right">11</td>
                      <td align="right">11</td>
                    </tr>
                    <tr>
                      <td>Spain</td>
                      <td align="right">2</td>
                      <td align="right">2</td>
                    </tr>
                    <tr>
                      <td>Tanzania</td>
                      <td align="right">1</td>
                      <td align="right">1</td>
                    </tr>
                    <tr>
                      <td>Turkey</td>
                      <td align="right">2</td>
                      <td align="right">2</td>
                    </tr>
                  </tbody></table>
                <div className="col geo_main">
                  <h3 id="geoChartTitle">World Market</h3>
                  <div id="geoChart" className="chart"> </div>
                </div>
              </div>{/* .wrapper-flex */}
            </section>				
          </div>
        </div>
        <div className="clearfix"> </div>
      </div>
      {/*main page chit chating end here*/}
    
      {/*climate start here*/}
      <div className="climate">
        <div className="col-md-4 climate-grids">
          <div className="climate-grid1">
            <div className="climate-gd1-top">
              <div className="col-md-6 climate-gd1top-left">
                <h4>Aprill 6-wed</h4>
                <h3>12:30<span className="timein-pms">PM</span></h3>				
                <p>Humidity:</p>					
                <p>Sunset:</p>
                <p>Sunrise:</p>
              </div>
              <div className="col-md-6 climate-gd1top-right">
                <span className="clime-icon"> 
                  <figure className="icons">
                    <canvas id="partly-cloudy-day" width={64} height={64}>
                    </canvas>
                  </figure>
                </span>					
                <p>88%</p>					
                <p>5:40PM</p>
                <p>6:30AM</p>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="climate-gd1-bottom">
              <div className="col-md-4 cloudy1">
                <h4>Hongkong</h4>
                <figure className="icons">
                  <canvas id="sleet" width={58} height={58}>
                  </canvas>
                </figure>
                <h3>10c</h3>
              </div>
              <div className="col-md-4 cloudy1">
                <h4>UK</h4>
                <figure className="icons">
                  <canvas id="cloudy" width={58} height={58} />
                </figure>					
                <h3>6c</h3>
              </div>
              <div className="col-md-4 cloudy1">
                <h4>USA</h4>
                <figure className="icons">
                  <canvas id="snow" width={58} height={58}>
                  </canvas>
                </figure>
                <h3>10c</h3>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 climate-grids">
          <div className="climate-grid2">
            <span className="shoppy-rate"><h4>$180</h4></span>
            <ul>
              <li> <i className="fa fa-credit-card"> </i> </li>
              <li> <i className="fa fa-usd"> </i> </li>
            </ul>
          </div>
          <div className="shoppy">
            <h3>Those Who Hate Shopping?</h3>
          </div>
        </div>
        <div className="col-md-4 climate-grids">
          <div className="climate-grid3">
            <div className="popular-brand">
              <div className="col-md-6 popular-bran-left">
                <h3>Popular</h3>
                <h4>Brand of this month</h4>
                <p> Duis aute irure  in reprehenderit.</p>
              </div>
              <div className="col-md-6 popular-bran-right">
                <h3>Polo</h3>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="popular-follow">
              <div className="col-md-6 popular-follo-left">
                <p>Lorem ipsum dolor sit amet, adipiscing elit.</p>
              </div>
              <div className="col-md-6 popular-follo-right">
                <h4>Follower</h4>
                <h5>2892</h5>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>
        <div className="clearfix"> </div>
      </div>
      {/*climate end here*/}
    </div>
  </div></div></div>
      </div>    
      </div>
    )
}

Dashboard.propTypes = {

}

export default Dashboard
