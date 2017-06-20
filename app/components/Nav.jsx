var React = require("react");
var { Link, IndexLink } = require("react-router");

var Nav = React.createClass({
  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Timer</li>
            <li>
              <IndexLink
                to="/"
                activeClassName="active-link"
                activeStyle={{ fontWeight: "bold" }}
              >
                Timer
              </IndexLink>
            </li>
            <li>
              <IndexLink
                to="/test"
                activeClassName="active-link"
                activeStyle={{ fontWeight: "bold" }}
              >
                Countdown
              </IndexLink>
            </li>
          </ul>
        </div>

        <div className = "top-bar-right">
          <ul className = "menu">
            <li className = "menu-text">
              Created by <a href ="reecelangerock.github.io" target = "_blank">Reece Langerock</a>
            </li>
          </ul>
        </div>

      </div>
    );
  }
});

module.exports = Nav;
