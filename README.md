# AirportsOfTheWorld

La aplicación muestra un listado de aeropuertos internacionales.

## Stubby configuration

The information is consumed from a Stubby server (node server) within the application.
The responses from the server are already configured.
- You can see the configurations in: `./stubbs/stubby.json`
- Las respuestas de las peticiones están en: `./stubbs/data/*`
- Request responses are in: `./stubbs/data/*`
- Requests to the server require a `securityKey` header (accepts any value)


## The objective of the test

### Configurations

- Updating this project to Angular 13 will be evaluated.
- Create a script in the package.json that when executed will raise both the stubs and the serve.

### Applicatión

- Refactor the `airports-list-component` component so that all elements are reusable
- Create a screen with the airport detail
- Control navigation between screens
- Implement unit test in some component and some service
- Create a login (screen) to create the security Key and manage the session in the application:
  - Show the username in the header
  - LogOut
  - Access control to the page if it is logged
  - Add `securityKey` to requests to get access

### Styles

- It is required to display the page as shown in Figma
  - https://www.figma.com/file/VDBOZy7QH7QJ3DrJTQqreQ/Frontend?type=design&node-id=0%3A1&mode=design&t=fRTdVhNihjBhTUgv-1
  - Password: FrontTest23
- The optimization of the HTML and CSS code and the use of techniques to lighten it will be valued
- The encapsulation system and accessibility will be considered
- Design the other pages based on the figma design

*It will be valued that the application is accessible <br>
*Any additional point to those required will be valued very positively

 **Por favor, una vez finalizada la prueba simplemente debemos crear una petición de incorporación (Pull Request) hacía la rama de master del repositorio, y el último commit contenga en al descripción "Finished". Con esto podemos saber que la prueba ha sido finalizada.**
