import React from 'react';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        loading: true, error: null, data: null
    };
  }

  componentDidMount(){
    this.props.promise.then(
      value => this.setState({loading: false, data: value}), 
      error => this.setState({loading: false, error: error})
    );
  }

  render(){
      if (this.state.loading) {
        return <span>Loading...</span>;
      }
      else if (this.state.error !== null) {
        return <span>Error: {this.state.error.message}</span>;
      }
      else {
        var repos = this.state.data.items;
        var repoList = repos.map(function (repo, idx) {
          return (
            <li key={idx}>
              <a href={repo.html_url}>{repo.name}</a> ({repo.stargazers_count} stars) <br/> {repo.description}
            </li>
          );
        });
        return (
          <main>
            <h1>Most Popular JavaScript Projects in Github</h1>
            <ol>{repoList}</ol>
          </main>
        );
      }
  }
}

module.exports = Hello;
