import { Component } from 'react';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchImagesWithQuery } from '../../services/api';
import {
  Searchbar,
  ImageGallery,
  Button,
  Modal,
  Loader,
} from 'components/index';
import { AppContainer } from 'components/App/App.styled';

class App extends Component {
  state = {
    searchQuery: '',
    data: [],
    largeImageURL: '',
    page: 1,
    isOpen: false,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.setState({ isLoading: true });
      try {
        fetchImagesWithQuery(this.state.searchQuery, 1).then(data => {
          this.setState({ data, isLoading: false });
        });
      } catch (error) {
        console.log(error);
      }
    }

    if (prevState.page !== this.state.page) {
      try {
        this.setState({ isLoading: true });
        fetchImagesWithQuery(this.state.searchQuery, this.state.page).then(
          data => {
            this.setState(prevState => ({
              data: [...prevState.data, ...data],
              isLoading: false,
            }));
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
  }

  handleModalClick = largeImageURL => {
    this.setState({ largeImageURL, isOpen: true });
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  onModalClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <AppContainer>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          data={this.state.data}
          modalClick={this.handleModalClick}
        />
        {this.state.isLoading && <Loader />}
        {this.state.data.length > 0 ? (
          <Button handleLoadMore={this.handleLoadMore} />
        ) : null}
        {this.state.isOpen && (
          <Modal
            largeImageURL={this.state.largeImageURL}
            onClose={this.onModalClose}
          />
        )}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </AppContainer>
    );
  }
}

export default App;
