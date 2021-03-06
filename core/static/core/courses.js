// Copyright (c) 2016, Shin DongJin. See the LICENSE file
// at the top-level directory of this distribution and at
// https://github.com/LastOne817/graduate/blob/master/LICENSE
//
// Licensed under the MIT license <http://opensource.org/licenses/MIT>.
// This file may not be copied, modified, or distributed except according
// to those terms.

var CourseBox = React.createClass({
  render: function() {
    return (
      <div className="courseBox">{this.props.name}</div>
    );
  }
});

var CourseList = React.createClass({
  getInitialState: function() {
    return {data: [{name: '결과를 기다리는 중...', code: ''}]};
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data.courses, dept: data.dept.cptnMjFgNm + ' : ' + data.dept.deptNm});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    var courseBoxes = this.state.data.map(function(course) {
      return (
        <CourseBox name={course.name} key={course.code}></CourseBox>
      );
    });
    return (
      <div className="courseList">
        <div className="dept">{this.state.dept}</div>
        {courseBoxes}
      </div>
    );
  },
});

ReactDOM.render(
  <CourseList url="/coursesData/" />,
  document.getElementById('content')
);
