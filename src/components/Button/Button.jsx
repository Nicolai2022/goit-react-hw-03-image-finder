import PropTypes from 'prop-types';
import { Button } from 'components/Button/Button.styled';

function LoadButton({ handleLoadMore }) {
  return (
    <Button onClick={handleLoadMore} type="button">
      Load More
    </Button>
  );
}

LoadButton.propTypes = {
  handleLoadMore: PropTypes.func.isRequired,
};

export default LoadButton;
