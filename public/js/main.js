import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import '../css/normalize.css'
import '../css/clouds.css'
import '../css/main.css'

// document.body.innerHTML = '<div id="app"></div><div id="Clouds"> '
// + '<div class="Cloud Foreground"></div> '
// + '<div class="Cloud Background"></div> '
// + '<div class="Cloud Foreground"></div> '
// + '<div class="Cloud Background"></div> '
// + '<div class="Cloud Foreground"></div> '
// + '<div class="Cloud Background"></div> '
// + '<div class="Cloud Background"></div> '
// + '<div class="Cloud Foreground"></div> '
// + '<div class="Cloud Background"></div> '
// + '<div class="Cloud Background"></div> '
// + '<svg viewBox="0 0 40 24" class="Cloud"><use xlink:href="#Cloud"></use></svg> '
// + '</div>'

class Admin extends Component {
	render() {
    return (
      <div>
        <h1>Users</h1>
        <div className="master">
          <ul>
          </ul>
        </div>
        <div className="detail">
          {this.props.children}
        </div>
      </div>
    )
  }
}


class Home extends Component {
	render() {
    return (
      <div>
        <h1>Users</h1>
        <div className="master">
          <ul>
            
          </ul>
        </div>
        <div className="detail">
          {this.props.children}
        </div>
      </div>
    )
  }
}

class Content extends Component {
	render() {
		return (
			<div id="content">
				<div className="inner">
					{this.props.children}
				</div>
			</div>
		)
	}
}

class page404 extends Component {
	render() {
		return (
			<div>
				404 page not found
			</div>
		)
	}
}


ReactDOM.render(
	<div>
		<div className="logo" />
		<Content>
			<div id="menu">
			</div>
			<Router history={browserHistory}>
		    <Route path="/" component={Home}>
		      <Route path="about" component={Admin}/>
		      <Route path="*" component={page404}/>
		    </Route>
		  </Router>
		</Content>
	</div>,
	document.getElementById('app')
)