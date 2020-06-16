import React from 'react';
import './index.scss';

import { withRouter } from 'react-router-dom';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import content from '../../content';

function FavoriteButton({ movieId, isFavorite, toggleFavorite }) {
  const onClick = () => toggleFavorite(movieId, isFavorite);

  return (
    <button className="FavoriteButton" onClick={onClick}>
      {isFavorite ? 'Remove 💔' : 'Favorite'}
    </button>
  );
}

function mapStateToProps({ content: { favorites } }) {
  return {
    favorites: content.favorites,
  };
}

// const withSecretToLife = (WrappedComponent) => {
//   class HOC extends React.Component {
//     render() {
//       return (
//         <WrappedComponent
//           history="Very History"
//           secretToLife={42}
//           {...this.props}
//         />
//       );
//     }
//   }
//   return HOC;
// };

// function mapDispatchToProps(dispatch) {
//   return {
//     toggleFavorite: (id) => dispatch({ type: actionTypes.TOGGLE_FAVORITE, id }),
//   };
// }

const enhance = compose(
  withRouter,
  connect(
    (state, { movieId }) => {
      return {
        isFavorite: content.selectors.isFavoriteById(state, movieId),
      };
    },
    (dispatch) => {
      console.log('here', content.actions.t);
      return {
        toggleFavorite: bindActionCreators(
          content.actions.toggleFavorite,
          dispatch
        ),
      };
    }
  )
);

export default enhance(FavoriteButton);
