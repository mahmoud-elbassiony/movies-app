# Movie App

# Main Idea
User can browse the movie app and able to see movies and see movie details in addition to
add movies to wishlist.

# Features
- User can view the list of movies by using the following api:
  https://api.themoviedb.org/3/movie/popular?api_key={apiKey} 
- User can view the movie details page using the following api:
  https://api.themoviedb.org/3/movie/{id}?api_key={apiKey}
- User can view the recommended movies in the details using the following api:
  https://api.themoviedb.org/3/movie/{movie_id}/recommendations?api_key={apiKey}
- User can add movie to wishlist and when added should increase the counter of wishlist in
  navbar, and heart icon should be filled with the main website color.
- User can toggle the wishlist action on the movie card, if movie added to wishlist and user
  clicked on the heart icon again should remove movie from wishlist, if movie not added to
  wishlist and clicked on the heart icon should add movie to wishlist.
- User can visit the wishlist page when click on the wishlist in navbar and will redirect to the
  page, Wishlist page will contain all the movies added to wishlist and user can remove it from
  wishlist
- User can paginate between the movies list pages by sending a query param to the
  movies list api like the following: https://api.themoviedb.org/3/movie/popular?api_key={api_key}&page=4
- User can search movies and redirect to a new page to view search results using the
  following api :https://api.themoviedb.org/3/search/movie?api_key={api_key}&query={MovieName}

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
