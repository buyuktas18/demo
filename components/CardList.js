import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import Card from './Card';

const keyExtractor = ({ id }) => id.toString();

export default class CardList extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        author: PropTypes.string.isRequired,
      }),
    ).isRequired,
    commentsForItem: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string))
      .isRequired,
    onPressComments: PropTypes.func.isRequired,
  };

  renderItem = ({ item: { id, author } }) => {
    const { commentsForItem, onPressComments } = this.props;
    const comments = commentsForItem[id];

    render ()
        const images = {

            "1": require('./assets/feed_images/1.jpg'),
            "2": require('./assets/feed_images/2.jpg'),
            "3": require('./assets/feed_images/3.png')
        }
    ;
  };

  render() {
    const { items, commentsForItem } = this.props;

    return (
      <FlatList
        data={items}
        extraData={commentsForItem}
        renderItem={this.renderItem}
        keyExtractor={keyExtractor}
      />
    );
  }
}
