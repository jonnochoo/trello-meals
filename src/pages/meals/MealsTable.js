import React, { PropTypes, Component } from 'react'
import Loading from './../../components/loading'

class MealsTable extends Component {  
  render() {
    if(this.props.meals.length === 0) {
      return <div>
        No meals found...
      </div>
    }
    else {
      return (
        <div>      
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.meals.map(m => (
                  <tr key={m.id}>
                    <td>
                      <a href={m.shortUrl} target="_blank">{m.name}</a>
                    </td>
                  </tr>        
                ))
              }
            </tbody>
          </table>
        </div>
      );
    }
  }
};

MealsTable.propTypes = {
  meals: PropTypes.array.isRequired
}

export default MealsTable;
