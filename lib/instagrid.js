window.InstaGrid = React.createClass({
  getInitialState: function() {
    return { media: [] }
  },
  componentDidMount: function() {
    var url = "/" + this.props.userID + "/media"
    $.ajax({
      url: url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({media: data.items});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    var pics = this.state.media.map(function(item, i) {
      return (
        <InstaPic key={item.code} images={item.images} caption={item.caption.text}/>
      );
    });
    return (
      <div className="row">
        { pics }
      </div>
    )
  },
  componentDidRender: function() {
  }
});

window.InstaPic = React.createClass({
  render: function() {
    return (
      <a className="fancybox" rel="group" href={this.props.images.standard_resolution.url} title={this.props.caption}>
        <img className="col-1" src={this.props.images.low_resolution.url} alt={this.props.caption}/>
      </a>
    );
  }
});
