import React, { Component } from "react";
import songIndex from "../queries/songIndex";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";

class SongDetails extends Component {
  render() {
    const { song } = this.props.data;

    if (!song) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <LyricList lyrics={song.lyrics}></LyricList>
        <LyricCreate songId={this.props.params.id}></LyricCreate>
      </div>
    );
  }
}

export default graphql(songIndex, {
  options: props => {
    return { variables: { id: props.params.id } };
  }
})(SongDetails);
