import React from "react";
import Layout from '../../components/Layout'

export default class Index extends React.Component {
  componentDidMount() {
    document.getElementById("map").src = "https://geosync.cloud/maps/2c011f43-c82e-4ba4-aa2f-46d007bcaf72" + this.props.location.search;
  }

  render() {
    return (
      <Layout>
      <iframe id="map" title="map" src="about:blank" allow="geolocation"></iframe>
      </Layout>
    )
  }
}
