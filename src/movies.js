
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const onlyDirectors = movies.map((movie) => {
    return movie.director;
  });

  return onlyDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const numberSpielbergDrama = movies
  .filter((movie) => movie.genre.includes("Drama") && movie.director === "Steven Spielberg");
  
  return numberSpielbergDrama.length;
}
// filter movie.genre.includes("Drama")

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
 if(!movies.length){
   return 0
 }

  const moviesSumScore = movies.reduce((accumulator, currentValue) => {
    if (currentValue.score) {
      return accumulator + currentValue.score; 
    } else {
      return accumulator;
    }
  }, 0);

  return Number((moviesSumScore/movies.length).toFixed(2));
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
