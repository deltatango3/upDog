import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import PetCard from '../PetCard/PetCard';
import { getPage, getIsLoadingState } from '../../reducers/rootReducer';
import { setPage } from '../../actions/actionCreators';
import Loading from '../Loading/Loading';

const styles = makeStyles({
  gallery: {
    display: 'flex',
    flexWrap: 'wrap'
  }
});

const Gallery = props => {
  const classes = styles();
  const dispatch = useDispatch();
  const page = useSelector(state => getPage(state));
  const isLoading = useSelector(state => getIsLoadingState(state));

  //? TRY DELAY IN SAGA OR MOVE INTO ITS OWN UTILS FOLDER.
  const debounce = (func, delay) => {
    let inDebounce;
    return function() {
      clearTimeout(inDebounce);
      inDebounce = setTimeout(() => {
        func.apply(this, arguments);
      }, delay);
    };
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      const nextPage = page + 1;
      dispatch(setPage(nextPage));
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', debounce(handleScroll, 500));
    return () => {
      window.removeEventListener('scroll', debounce(handleScroll, 500));
    };
  }, [handleScroll]);

  const getPetCards = () =>
    props.pets.map(pet => (
      <PetCard key={pet.id} pet={pet} history={props.history} />
    ));

  return (
    <div className={classes.gallery}>
      {getPetCards()}
      {isLoading && <Loading />}
    </div>
  );
};

export default Gallery;
